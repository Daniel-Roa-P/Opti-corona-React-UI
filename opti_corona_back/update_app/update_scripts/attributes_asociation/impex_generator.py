import csv 
from django.http import HttpResponse 
from ..attributes_structure import impex_dictionary

def generate_impex(data): 

    response = HttpResponse(content_type='text/csv') 
    response['Content-Disposition'] = 'attachment'

    writer = csv.writer(response, delimiter=';') 

    writer.writerow(["$productCatalog = corona-coProductCatalog"])
    writer.writerow(["$catalogVersion = catalogversion(catalog(id[default=$productCatalog]), version[default='Staged'])[unique=true, default=$productCatalog:Staged]"]) 
    writer.writerow(["$clAttrModifiers = system='corona-coClassification', version='1.0', translator=de.hybris.platform.catalog.jalo.classification.impex.ClassificationAttributeTranslator"])  

    print(data)

    data_serializada = {}

    macros = []
    cabezera_impex = ["UPDATE Product"]

    for objeto in data:

        clasification = objeto['properties']['clasification']
        attribute = objeto['properties']['attribute']
        mode = objeto['properties']['mode']
        
        data_serializada[clasification + ',' + attribute] = objeto['values']

        details = impex_dictionary.get_structure(clasification,attribute)

        if(clasification not in ['default','corona']):

            macroName = '$' + attribute

            if(details['zonified'] == "true"):

                macros.append(macroName + "= @" + attribute + "[$clAttrModifiers,lang=$lang]")

            else:

                macros.append(macroName + "= @" + attribute + "[$clAttrModifiers]")

            cabezera_impex.append(macroName + details['nomenclatura'] + mode)

        else:

            if(details['zonified'] == "true"):

                cabezera_impex.append(attribute + details['nomenclatura'] + '[lang=$lang]' + mode)

            else:

                cabezera_impex.append(attribute + details['nomenclatura'] + mode)

    cabezera_impex.insert(2,'$catalogVersion')
    cabezera_impex.append('')

    writer.writerow([])
    writer.writerow(["$lang = es"])

    for macro in macros:

        writer.writerow([macro])

    writer.writerow([])
    writer.writerow(cabezera_impex) 

    atributos = [*data_serializada.keys()] 

    n_referencias = len(data_serializada['default,code'])

    for i in range(0, n_referencias):

        temp_row = ['']

        for key in atributos:
            
            print(key)
            print(data_serializada[key][i])
            
            if(data_serializada[key][i] != None):
                
                temp_row.append(str(data_serializada[key][i]))

            else:
                
                temp_row.append(' ')

            if(atributos.index(key) == 0):

                temp_row.append('') 

        temp_row.append('')
        writer.writerow(temp_row)

    return response 
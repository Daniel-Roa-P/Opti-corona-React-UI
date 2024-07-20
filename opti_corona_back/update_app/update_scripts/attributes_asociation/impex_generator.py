import csv 
from django.http import HttpResponse 
from ..attributes_structure import impex_dictionary

def generate_impex(data): 

    response = HttpResponse(content_type='text/csv') 
    response['Content-Disposition'] = 'attachment'

    writer = csv.writer(response, delimiter=';') 

    print(data)

    data_serializada = {}

    for objeto in data:

        data_serializada[[*objeto.keys()][0]] = [*objeto.values()][0]    

    atributos = [*data_serializada.keys()] 

    writer.writerow(["$productCatalog = corona-coProductCatalog"])
    writer.writerow(["$catalogVersion = catalogversion(catalog(id[default=$productCatalog]), version[default='Staged'])[unique=true, default=$productCatalog:Staged]"]) 

    for atributo in list(data_serializada.keys()):

        print(atributo)

    writer.writerow(["UPDATE Product; code [unique = true]; $catalogVersion;"] + atributos) 

    n_referencias = len(data_serializada['code'])

    for i in range(0, n_referencias):

        temp_row = ['']

        for key in atributos:

            temp_row.append(data_serializada[key][i])
            
            if(key == 'code'):

                temp_row.append('') 


        temp_row.append('')
        writer.writerow(temp_row)

    return response 
import csv 
from django.http import HttpResponse 

attributes_structure = {'corona':{'name':[0,1],'summary':[0,1],'description':[0,1],'approvalStatus':[0,0],'supercategories':[1,0],'ean':[0,0],'externalSalesUnit':[0,0],'unit':[0,0],'conversionValue':[0,0],'conversionUnit':[0,0],'weight':[0,0],'relevance':[0,0],'productRequest':[0,0],'colorSelector':[0,0],'hasPriorityVariant':[0,0],'areaCovered':[0,0],'areaUnit':[0,0],'showCalculator':[0,0],'wastePerecentage':[0,0],'flag':[1,0],'recommendationsForUse':[0,1],'recommendationsForInstalation':[0,1],'recommendationsForApplying':[0,1],'recommendationsForCleaning':[0,1],'advantages':[0,1],'specialAttributes':[0,1],'extendedContent':[0,1],'presentation':[0,0],'technicalDocuments':[1,0],'blueprints':[1,0],'seoTitle':[0,1],'seoDescription':[0,1],'seoRobots':[0,0],'ogTitle':[0,1],'ogDescription':[0,1]},'especificaciones-accesorios':{'profundidad':[0,0],'temperatura-de-uso':[0,1]},'especificaciones-combos-y-kits':{'componentes':[1,0],'numero-de-piezas':[0,0],'tipo-de-sifon':[0,0]},'especificaciones-comunes-a':{'areas-de-uso':[1,0],'diseno':[1,1]},'especificaciones-comunes-b':{'contenido-del-producto':[0,1],'precauciones':[1,1],'presentacion':[0,0],'rendimiento':[1,1],'tiempo-de-secado':[0,1]},'especificaciones-comunes-c':{'consumo-de-agua':[0,0],'forma':[0,0],'tipo-de-instalacion':[0,0],'tipo-de-manija-o-accionamiento':[0,0]},'especificaciones-duchas':{'dimension-de-la-regadera':[0,1],'longitud-del-brazo':[0,0],'tipo-de-regadera':[1,0],'tipo-mezclador':[0,0]},'especificaciones-gaso-electro':{'color':[0,1],'eficiencia-energetica':[0,1],'especificaciones-gaso-electro':[0,1],'marca':[0,1],'observaciones':[0,1],'tipo-de-sistema':[1,1],'tipo-instalacion':[0,1]},'especificaciones-generales':{'acabado':[0,0],'alto':[0,0],'ancho':[0,0],'calidad':[0,1],'coleccion':[0,1],'espesor-mm':[0,1],'fabricado-por':[0,1],'fabricante':[0,1],'garantia':[0,1],'garantias-de-otros-componentes':[0,1],'incluye':[1,1],'largo':[0,0],'linea':[0,1],'marca':[0,1],'materiales':[1,1],'no-incluye':[1,1],'paisdeorigen':[0,1],'premios':[1,1],'productos-compatibles':[1,1],'resistencia':[1,1],'tecnologias':[1,1],'uso':[1,0]},'especificaciones-griferias':{'altura-de-la-griferia':[0,0],'capacidad-de-flujo':[0,1],'observaciones':[0,1],'rango-de-presion-de-agua':[0,1],'sistema-antivandalico':[0,1],'sistema-de-accionamiento':[0,1],'temperatura-de-uso':[0,1],'tipo-de-chorro':[1,0],'tipo-de-griferia':[0,0]},'especificaciones-herramientas':{'caracteristicas-funcionales':[1,1]},'especificaciones-materiales-limpiadores-pegantes':{'adherencia':[0,1],'dilucion':[0,1],'duracion-de-la-mezcla':[0,1],'tiempo-abierto':[0,1],'tiempo-para-emboquillar':[0,1]},'especificaciones-muebles':{'profundidad':[0,0],'resistente-humedad':[0,1],'tiempo-de-armado-estimado':[0,0],'tipo-de-canto':[0,0],'tipo-de-cierre':[0,0],'tipo-de-herrajes':[0,1]},'especificaciones-muebles-bano':{'material-del-lavamanos':[1,0],'material-del-meson':[1,0]},'especificaciones-muebles-cocina':{'caracteristicas-de-la-cubierta':[0,1],'material-del-lavaplatos':[1,1]},'especificaciones-muebles-lavadero':{'material-del-lavadero':[1,1]},'especificaciones-pinturas':{'cuarteamiento-alto-espesor':[0,1],'cuarteamiento-superficial':[0,1],'fabricado-por':[0,1],'lavabilidad':[0,0],'lote-fecha-fabricacion':[0,1],'poder-cubriente':[0,1],'remocion-manchas-lavabilidad':[0,1],'resistencia-abrasion':[0,1],'resistencia-agua':[0,1],'resistencia-hongos-algas':[0,1],'retencion-olor':[0,1],'toxicidad':[0,1]},'especificaciones-plomeria':{'alto-plomeria':[0,0],'ancho-plomeria':[0,0],'especificaciones':[0,1],'largo-plomeria':[0,0]},'especificaciones-pozos':{'diametro-del-desague':[0,0],'dimensiones-del-pozo':[0,1],'profundidad-del-pozo':[0,0],'sistema-antivandalico':[0,1],'tipo-de-desague':[0,0],'tipo-de-lavamanos':[0,1]},'especificaciones-revestimientos':{'aspecto':[0,0],'formato':[0,1],'lote-fecha-fabricacion':[0,1],'m2-por-caja':[0,0],'pais-origen':[0,1],'piezas-por-caja':[0,0],'resistencia-a-las-manchas':[0,0],'superficie':[0,1],'tamaño':[0,1],'trafico':[0,0],'unidad-de-embalaje':[0,1]},'especificaciones-sanitarios':{'accesibilidad':[0,1],'altura-de-la-taza':[0,0],'capacidad-de-descarga':[0,0],'espejo-de-agua':[0,1],'perfil-de-la-taza':[0,0],'sistema-antivandalico':[0,1],'sistema-de-descarga':[0,0],'tipo-de-asiento':[0,0],'tipo-de-sifon':[0,0],'tipo-de-tanque':[0,1],'tipo-de-valvula':[0,1]}}

def generate_impex(data): 

    response = HttpResponse(content_type='text/csv') 
    response['Content-Disposition'] = 'attachment'

    writer = csv.writer(response, delimiter=';') 

    data_serializada = {}

    for objeto in data:

        data_serializada[[*objeto.keys()][0]] = [*objeto.values()][0]    

    atributos = [*data_serializada.keys()] 

    writer.writerow(["$productCatalog = corona-coProductCatalog"])
    writer.writerow(["$catalogVersion = catalogversion(catalog(id[default=$productCatalog]), version[default='Staged'])[unique=true, default=$productCatalog:Staged]"]) 

    writer.writerow(['UPDATE Product'] + atributos) 

    n_referencias = len(data_serializada['code'])

    for i in range(0, n_referencias):

        temp_row = ['']

        for key in atributos:

            temp_row.append(data_serializada[key][i])

        temp_row.append('')
        writer.writerow(temp_row)

    return response 
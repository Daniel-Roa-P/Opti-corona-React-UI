import pandas as pd
import os
    
attributes_structure = {
    "corona": ["name","summary","description","approvalStatus","supercategories","ean","externalSalesUnit","unit","conversionValue","conversionUnit","weight","relevance","productRequest","colorSelector","hasPriorityVariant","areaCovered","areaUnit","showCalculator","wastePerecentage","flag","recommendationsForUse","recommendationsForInstalation","recommendationsForApplying","recommendationsForCleaning","advantages","specialAttributes","extendedContent","presentation","technicalDocuments","blueprints","seoTitle","seoDescription","seoRobots","ogTitle","ogDescription"]
    ,"especificaciones-accesorios": ["profundidad","temperatura-de-uso"]
    ,"especificaciones-combos-y-kits": ["componentes","numero-de-piezas","tipo-de-sifon"]
    ,"especificaciones-comunes-a": ["areas-de-uso","diseno"]
    ,"especificaciones-comunes-b": ["contenido-del-producto","precauciones","presentacion","rendimiento","tiempo-de-secado"]
    ,"especificaciones-comunes-c": ["consumo-de-agua","forma","tipo-de-instalacion","tipo-de-manija-o-accionamiento"]
    ,"especificaciones-duchas": ["dimension-de-la-regadera","longitud-del-brazo","tipo-de-regadera","tipo-mezclador"]
    ,"especificaciones-gaso-electro": ["color","eficiencia-energetica","especificaciones-gaso-electro","marca","observaciones","tipo-de-sistema","tipo-instalacion"]
    ,"especificaciones-generales": ["acabado","alto","ancho","calidad","coleccion","espesor-mm","fabricado-por","fabricante","garantia","garantias-de-otros-componentes","incluye","largo","linea","marca","materiales","no-incluye","paisdeorigen","premios","productos-compatibles","resistencia","tecnologias","uso"]
    ,"especificaciones-griferias": ["altura-de-la-griferia","capacidad-de-flujo","observaciones","rango-de-presion-de-agua","sistema-antivandalico","sistema-de-accionamiento","temperatura-de-uso","tipo-de-chorro","tipo-de-griferia"]
    ,"especificaciones-herramientas": ["caracteristicas-funcionales"]
    ,"especificaciones-materiales-limpiadores-pegantes": ["adherencia","dilucion","duracion-de-la-mezcla","tiempo-abierto","tiempo-para-emboquillar"]
    ,"especificaciones-muebles": ["profundidad","resistente-humedad","tiempo-de-armado-estimado","tipo-de-canto","tipo-de-cierre","tipo-de-herrajes"]
    ,"especificaciones-muebles-bano": ["material-del-lavamanos","material-del-meson"]
    ,"especificaciones-muebles-cocina": ["caracteristicas-de-la-cubierta","material-del-lavaplatos"]
    ,"especificaciones-muebles-lavadero": ["material-del-lavadero"]
    ,"especificaciones-pinturas": ["cuarteamiento-alto-espesor","cuarteamiento-superficial","fabricado-por","lavabilidad","lote-fecha-fabricacion","poder-cubriente","remocion-manchas-lavabilidad","resistencia-abrasion","resistencia-agua","resistencia-hongos-algas","retencion-olor","toxicidad"]
    ,"especificaciones-plomeria": ["alto-plomeria","ancho-plomeria","especificaciones","largo-plomeria"]
    ,"especificaciones-pozos": ["diametro-del-desague","dimensiones-del-pozo","profundidad-del-pozo","sistema-antivandalico","tipo-de-desague","tipo-de-lavamanos"]
    ,"especificaciones-revestimientos": ["aspecto","formato","lote-fecha-fabricacion","m2-por-caja","pais-origen","piezas-por-caja","resistencia-a-las-manchas","superficie","tamaño","trafico","unidad-de-embalaje"]
    ,"especificaciones-sanitarios": ["accesibilidad","altura-de-la-taza","capacidad-de-descarga","espejo-de-agua","perfil-de-la-taza","sistema-antivandalico","sistema-de-descarga","tipo-de-asiento","tipo-de-sifon","tipo-de-tanque","tipo-de-valvula"]
    }

zonified = [
'especificaciones-gaso-electro,marca',
'especificaciones-gaso-electro,tipo-de-sistema',
'especificaciones-gaso-electro,tipo-instalacion',
'especificaciones-accesorios,temperatura-de-uso',
'especificaciones-comunes-a,diseno',
'especificaciones-comunes-b,contenido-del-producto',
'especificaciones-comunes-b,precauciones',
'especificaciones-comunes-b,rendimiento',
'especificaciones-comunes-b,tiempo-de-secado',
'especificaciones-duchas,dimension-de-la-regadera',
'especificaciones-gaso-electro,color',
'especificaciones-gaso-electro,eficiencia-energetica',
'especificaciones-gaso-electro,especificaciones-gaso-electro',
'especificaciones-gaso-electro,observaciones',
'especificaciones-gaso-electro,voltaje',
'especificaciones-generales,calidad',
'especificaciones-generales,coleccion',
'especificaciones-generales,espesor-mm',
'especificaciones-generales,fabricado-por',
'especificaciones-generales,fabricante',
'especificaciones-generales,garantia',
'especificaciones-generales,garantias-de-otros-componentes',
'especificaciones-generales,incluye',
'especificaciones-generales,linea',
'especificaciones-generales,marca',
'especificaciones-generales,materiales',
'especificaciones-generales,no-incluye',
'especificaciones-generales,paisdeorigen',
'especificaciones-generales,premios',
'especificaciones-generales,productos-compatibles',
'especificaciones-generales,resistencia',
'especificaciones-generales,tecnologias',
'especificaciones-griferias,capacidad-de-flujo',
'especificaciones-griferias,observaciones',
'especificaciones-griferias,rango-de-presion-de-agua',
'especificaciones-griferias,sistema-antivandalico',
'especificaciones-griferias,sistema-de-accionamiento',
'especificaciones-griferias,temperatura-de-uso',
'especificaciones-herramientas,caracteristicas-funcionales',
'especificaciones-materiales-limpiadores-pegantes,adherencia',
'especificaciones-materiales-limpiadores-pegantes,dilucion',
'especificaciones-materiales-limpiadores-pegantes,duracion-de-la-mezcla',
'especificaciones-materiales-limpiadores-pegantes,tiempo-abierto',
'especificaciones-materiales-limpiadores-pegantes,tiempo-para-emboquillar',
'especificaciones-muebles,resistente-humedad',
'especificaciones-muebles,tipo-de-herrajes',
'especificaciones-muebles-cocina,caracteristicas-de-la-cubierta',
'especificaciones-muebles-cocina,material-del-lavaplatos',
'especificaciones-muebles-lavadero,material-del-lavadero',
'especificaciones-pinturas,cuarteamiento-alto-espesor',
'especificaciones-pinturas,cuarteamiento-superficial',
'especificaciones-pinturas,fabricado-por',
'especificaciones-pinturas,lote-fecha-fabricacion',
'especificaciones-pinturas,poder-cubriente',
'especificaciones-pinturas,remocion-manchas-lavabilidad',
'especificaciones-pinturas,resistencia-abrasion',
'especificaciones-pinturas,resistencia-agua',
'especificaciones-pinturas,resistencia-hongos-algas',
'especificaciones-pinturas,retencion-olor',
'especificaciones-pinturas,toxicidad',
'especificaciones-plomeria,especificaciones',
'especificaciones-pozos,dimensiones-del-pozo',
'especificaciones-pozos,sistema-antivandalico',
'especificaciones-pozos,tipo-de-lavamanos',
'especificaciones-revestimientos,formato',
'especificaciones-revestimientos,lote-fecha-fabricacion',
'especificaciones-revestimientos,pais-origen',
'especificaciones-revestimientos,superficie',
'especificaciones-revestimientos,tamaño',
'especificaciones-revestimientos,unidad-de-embalaje',
'especificaciones-sanitarios,accesibilidad',
'especificaciones-sanitarios,espejo-de-agua',
'especificaciones-sanitarios,sistema-antivandalico',
'especificaciones-sanitarios,tipo-de-tanque',
'especificaciones-sanitarios,tipo-de-valvula',
'corona,name',
'corona,summary',
'corona,description',
'corona,recommendationsForUse',
'corona,recommendationsForInstalation',
'corona,recommendationsForApplying',
'corona,recommendationsForCleaning',
'corona,advantages',
'corona,specialAttributes',
'corona,extendedContent',
'corona,seoTitle',
'corona,seoDescription',
'corona,ogTitle',
'corona,ogDescription'
]

multivalued = ['especificaciones-combos-y-kits,componentes',
'especificaciones-comunes-a,areas-de-uso',
'especificaciones-comunes-a,diseno',
'especificaciones-comunes-b,precauciones',
'especificaciones-comunes-b,rendimiento',
'especificaciones-duchas,tipo-de-regadera',
'especificaciones-gaso-electro,tipo-de-sistema',
'especificaciones-generales,incluye',
'especificaciones-generales,materiales',
'especificaciones-generales,no-incluye',
'especificaciones-generales,premios',
'especificaciones-generales,productos-compatibles',
'especificaciones-generales,resistencia',
'especificaciones-generales,tecnologias',
'especificaciones-generales,uso',
'especificaciones-griferias,tipo-de-chorro',
'especificaciones-herramientas,caracteristicas-funcionales',
'especificaciones-muebles-bano,material-del-lavamanos',
'especificaciones-muebles-bano,material-del-meson',
'especificaciones-muebles-cocina,material-del-lavaplatos',
'especificaciones-muebles-lavadero,material-del-lavadero',
'corona,supercategories',
'corona,flag',
'corona,technicalDocuments',
'corona,blueprints'
]

new_asset_structure = {}

def create_structure(df_atributes, df_values):
    
    estructura = {}
    
    for index in df_atributes.index:
    
        clasificacion =  str(df_atributes["codigo"][index])
        
        if(clasificacion not in estructura):
            
            estructura[clasificacion] = {}
        
        if(df_atributes["type"][index] == 'Cadena'):
            
            estructura[clasificacion][df_atributes["nombre"][index]] = {}
            estructura[clasificacion][df_atributes["nombre"][index]]["attribute_structure"] = { 'type': 'text' }
        
        elif(df_atributes["type"][index] == 'Numero'):
            
            estructura[clasificacion][df_atributes["nombre"][index]] = {}
            estructura[clasificacion][df_atributes["nombre"][index]]["attribute_structure"] = { 'type': 'numeric' }
        
        elif(df_atributes["type"][index] == 'Valuelist'):
            
            source = []
            
            lista = df_values[df_values['codigo'] == df_atributes["nombre"][index]]
            
            for indice in lista.index:
                
                source.append(lista['valor'][indice])
            
            temp_lista = {
                 'type': 'dropdown' ,
                 'source': source 
                }
            
            estructura[clasificacion][df_atributes["nombre"][index]] = {}
            estructura[clasificacion][df_atributes["nombre"][index]]["attribute_structure"] = temp_lista
            
        elif(df_atributes["type"][index] == 'Booleano'):

            estructura[clasificacion][df_atributes["nombre"][index]] = {}
            estructura[clasificacion][df_atributes["nombre"][index]]["attribute_structure"] = { 'type': 'checkbox' }

        temp = clasificacion + ',' + df_atributes["nombre"][index]

        if(temp in multivalued):
                
            estructura[clasificacion][df_atributes["nombre"][index]]["multivalued"] = 'true'
            
        else: 
            
            estructura[clasificacion][df_atributes["nombre"][index]]["multivalued"] = 'false'
            
        if(temp in zonified):
            
            estructura[clasificacion][df_atributes["nombre"][index]]["zonified"] = 'true'
        
        else: 
            
            estructura[clasificacion][df_atributes["nombre"][index]]["zonified"] = 'false'

    return estructura

def main():

    excel_path = str(os.getcwd()) + '/consolidado.xlsx'
    
    file_json = open('products_attributes_structure_v3.json','w')
         
    file_json.write(str(create_structure(pd.read_excel(excel_path, sheet_name='Atributos'),pd.read_excel(excel_path, sheet_name='values'))).replace("'", '"'))
      
    file_json.close()

    print(str(create_structure(pd.read_excel(excel_path, sheet_name='Atributos'),pd.read_excel(excel_path, sheet_name='values'))))

if __name__ == "__main__":
    
    main()


  

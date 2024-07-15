import pandas as pd
import os

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
        
        estructura[clasificacion][df_atributes["nombre"][index]] = {}
        estructura[clasificacion][df_atributes["nombre"][index]]["id"] = df_atributes["id"][index]
        
        if(df_atributes["type"][index] == 'Cadena'):
            
            estructura[clasificacion][df_atributes["nombre"][index]]["attribute_structure"] = { 'type': 'text' }
        
        elif(df_atributes["type"][index] == 'Numero'):
            
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
            
            estructura[clasificacion][df_atributes["nombre"][index]]["attribute_structure"] = temp_lista
            
        elif(df_atributes["type"][index] == 'Booleano'):

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
    
    file_json = open('products_attributes_structure_v4.json','w')
         
    file_json.write(str(create_structure(pd.read_excel(excel_path, sheet_name='Atributos'),pd.read_excel(excel_path, sheet_name='values'))).replace("'", '"'))
      
    file_json.close()

    print(str(create_structure(pd.read_excel(excel_path, sheet_name='Atributos'),pd.read_excel(excel_path, sheet_name='values'))))

if __name__ == "__main__":
    
    main()


  

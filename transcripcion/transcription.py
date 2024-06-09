import pandas as pd
import os
    
def create_structure(df_atributes, df_values):
    
    estructura = {}
    
    for index in df_atributes.index:
    
         
        clasificacion =  str(df_atributes["codigo"][index])
        
        if(clasificacion not in estructura):
            
            estructura[clasificacion] = {}
            
    
        if("header" not in estructura[clasificacion]):
            
            estructura[clasificacion]["header"] = []
            estructura[clasificacion]['column_structure'] = []
        
        estructura[clasificacion]["header"].append(df_atributes["nombre"][index])
        
        if(df_atributes["type"][index] == 'Cadena'):
            
            estructura[clasificacion]['column_structure'].append({ 'type': 'text' })
        
        elif(df_atributes["type"][index] == 'Numero'):
            
            estructura[clasificacion]['column_structure'].append({ 'type': 'numeric' })
            
        elif(df_atributes["type"][index] == 'Valuelist'):
            
            source = []
            
            lista = df_values[df_values['codigo'] == df_atributes["nombre"][index]]
            
            for indice in lista.index:
                
                source.append(lista['valor'][indice])
            
            temp_lista = {
                 'type': 'dropdown' ,
                 'source': source 
                }
            
            estructura[clasificacion]['column_structure'].append(temp_lista)

    return estructura

def main():

    excel_path = str(os.getcwd()) + '/consolidado.xlsx'
    
    file_json = open('products_attributes_structure.json','w')
         
    file_json.write(str(create_structure(pd.read_excel(excel_path, sheet_name='Atributos'),pd.read_excel(excel_path, sheet_name='values'))).replace("'", '"'))
      
    file_json.close()

    print(str(create_structure(pd.read_excel(excel_path, sheet_name='Atributos'),pd.read_excel(excel_path, sheet_name='values'))))

if __name__ == "__main__":
    
    main()


  

import csv
import os

referencias_sin_flitro = ['O22021111','931810001','931760001','709480001','931850001','931860001','O25860001','931880001','931890001','931900001','931770001','O25810001','931790001','931800001','937960001',]

referencias = sorted(list(set(referencias_sin_flitro)))

dir_path = str(os.getcwd()) + '/documents'

# list file and directories
res = os.listdir(dir_path)
text_file = open("technical_documents-co-es.csv", "w")
text_quantity = open("cantidades_docs.txt", "w")
files = []

indice = 0
tipoArchivo = ' ' 

cantidades = {}

for referencia in referencias:
    
    for filename in res:
            
        if (referencia in filename):
            
                if('ficha' in filename.lower() or 'ft' in filename.lower()):
                    
                    tipoArchivo = 'Ficha Técnica'
                    
                elif('instructivo' in filename.lower()): 
                    
                    tipoArchivo = 'Instructivo Instalación'
                    
                else:
                    
                    tipoArchivo = ' '
            
                text_file.write(referencia + ',' + filename + ',' + tipoArchivo +',PDF')
                text_file.write('\n')
                indice = indice + 1
                files.append(filename)
            
    text_quantity.write(referencia + ',' + str(indice))
    text_quantity.write('\n')

    cantidades[referencia] = indice

    indice = 0  
        
    
for filename in res:
    
    if filename not in files: 
        
        #os.remove(str(os.getcwd()) + '/documents/' + filename)
        print(filename)

text_file.close()
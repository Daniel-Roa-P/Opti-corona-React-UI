import csv
import os

referencias_sin_flitro = ['409041791','409021791','453891791','409031791','409011791','439031791','409051791','439021791','OLS-2022-110-T','C0074181','ORS3002-120-O','C0071049-T','C0073152-T','BC-P1002-500C','BC-P1002-500','ORS3001-80-O','C0074434','ORS3006-60','OLS-2022L-1100','125617','ALFA-100','C0074433','MUES0045','E289CE','E298EV','MUES0052','E256TE','E305IL','H910NCA','E303IL','MUES0055','MUES0043','MUES0053','H910BL']

referencias = sorted(list(set(referencias_sin_flitro)))

dir_path = str(os.getcwd()) + '/images'

# list file and directories
res = os.listdir(dir_path)
text_file = open("blueprints-co-es.csv", "w")
text_quantity = open("cantidades_planos.txt", "w")

indice = 0

cantidades = {}

for referencia in referencias:
    
    for filename in res:
            
        if (referencia in filename):
            
            text_file.write(referencia + ',' + filename)
            text_file.write('\n')
            indice = indice + 1
    
    text_quantity.write(referencia + ',' + str(indice))
    text_quantity.write('\n')

    cantidades[referencia] = indice
    
    indice = 0 
    
text_file.close()
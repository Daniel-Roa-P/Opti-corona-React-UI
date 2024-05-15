referencias = {'309291501':500, '267011751':500}

zonas = ['ZNV000','ZNV001','ZNV002','ZNV003','ZNV004','ZNV005','ZNV006','ZNV016']

columna_b = 'pieces'
currency = 'COP'

text_file = open("prices-co-es-202404041220.csv", "w")

print(referencias)

for referencia in referencias:
    
    for zona in zonas:
            
        text_file.write(referencia + ',' + columna_b + ',' + currency + ',' + str(referencias[referencia]) + ',' + str(1)  + ',' + str(1) + ',true,' + str(zona))
        text_file.write('\n')
        
        print(referencia + ',' + columna_b + ',' + currency + ',' + str(referencias[referencia]) + ',' + str(1)  + ',' + str(1) + ',true,' + str(zona)+'\n')

text_file.close()
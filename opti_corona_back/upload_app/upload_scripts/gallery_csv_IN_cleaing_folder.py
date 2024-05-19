import numpy as np

class Images:

    def upload_images(self, sku_list, file_list, manual):

        referencias = sorted(list(set(sku_list)))

        # list file and directories
        res = sorted(file_list)
        indice = 0
        miniatura = ''
        
        if(manual):

            print('puto')

        files = []
        cantidades = {}

        skus = []
        nombre_archivos = []
        posiciones = []
        thumbnails = []

        for referencia in referencias:
            
            for filename in res:
                
                if (str(referencia) in filename):

                    if(indice == 0):
                            
                        miniatura = 'thumbnail'

                    skus.append(str(referencia))
                    nombre_archivos.append(filename)
                    posiciones.append(str(indice))
                    thumbnails.append(miniatura)

                    indice = indice + 1
                    miniatura = ''
                    files.append(filename)

            cantidades[referencia] = indice

            indice = 0       

        relaciones = [ skus , nombre_archivos , nombre_archivos , nombre_archivos , nombre_archivos, posiciones , thumbnails ]

        relaciones_truncado = []

        for i in range(0,len(relaciones[0])):

            temp_list = []

            for j in range(0,len(relaciones)):

                temp_list.append(relaciones[j][i])

            relaciones_truncado.append(temp_list)

        for filename in res:
            
            if filename not in files: 
                
                print(filename)

        return relaciones_truncado
import numpy as np
from .Asset import Asset

class Images(Asset):

    def __init__(self, sku_list, file_list, manual):
        
        super().__init__(sku_list, file_list, manual)

    def create_automatic_matrix(self):

        referencias = sorted(list(set(self.references)))

        # list file and directories
        res = sorted(self.files)
        indice = 0
        miniatura = ''
        
        if(self.manual):

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

        self.relaciones = [ skus , nombre_archivos , nombre_archivos , nombre_archivos , nombre_archivos, posiciones , thumbnails ]

        self.truncate_relationships()

        for filename in res:
            
            if filename not in files: 
                
                print(filename)

        return self.relaciones_truncado
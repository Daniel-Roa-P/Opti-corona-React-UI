import numpy as np
from .Asset import Asset

class Images(Asset):

    def __init__(self, sku_list, file_list, manual):
        
        super().__init__(sku_list, file_list, manual)

    def create_automatic_matrix(self):

        referencias = sorted(self.references)

        # list file and directories
        res = sorted(self.files)
        indice = 0
        miniatura = ''
        
        if(self.manual):

            print('puto')

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
                    self.relatedFiles.append(filename)

            self.cantidades[referencia] = indice

            indice = 0       

        self.relaciones = [ skus , nombre_archivos , nombre_archivos , nombre_archivos , nombre_archivos, posiciones , thumbnails ]
        self.truncate_relationships()

        return self.relaciones_truncado
    
    def generate_report(self):
        
        info_report = []
        warning_report = []
        danger_report = []

        for referencia in self.references: 

            temp_ammount = self.cantidades[referencia]

            if(temp_ammount != 0):

                info_report.append(str(referencia) + " se le asocio " + str(temp_ammount) + ' imagenes')

            else:

                danger_report.append(str(referencia) + " no tiene ninguna imagen asociada")

        
        for filename in self.files:
            
            if filename not in self.relatedFiles: 
                
                warning_report.append('la imagen ' + filename + ' no fue asociada a ninguna referencia')

        report = [info_report, warning_report, danger_report]

        return report
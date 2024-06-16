import numpy as np
from .Asset import Asset

class Rfa(Asset):

    def __init__(self, data):

        super().__init__(data, data[1]['SKU'], data[2]['Nombre_archivo'], data[len(data) - 1]['manual'])

    def create_automatic_matrix(self):

        referencias = sorted(self.references)

        res = sorted(self.assets)
        indice = 0
        
        if(self.manual):

            print('puto')

        assets = []

        allowedTypes = ['rfa']

        skus = []
        nombre_archivos = []
        tipoArchivo = []

        for referencia in referencias:
            
            for filename in res:
                
                if (str(referencia) in filename and filename.lower()[-3:] in allowedTypes):
            
                    tipoArchivo.append('Modelo BIM')
                    skus.append(str(referencia))
                    nombre_archivos.append(filename)

                    indice = indice + 1
                    assets.append(filename)

            self.cantidades[referencia] = indice

            indice = 0       

        self.relaciones = [ skus , nombre_archivos , tipoArchivo ]

        self.truncate_relationships()

        return self.relaciones_truncado
    
    def generate_report(self):
        
        info_report = []
        warning_report = []
        danger_report = []

        for referencia in self.references: 

            temp_ammount = self.cantidades[referencia]

            if(temp_ammount != 0):

                info_report.append(str(referencia) + " se le asocio " + str(temp_ammount) + ' modelos BIM')

            else:

                danger_report.append(str(referencia) + " no tiene ningun modelo BIM asociado")

        for filename in self.assets:
            
            if filename not in self.relatedAssets: 
                
                warning_report.append('El modelo BIM ' + filename + ' no fue asociado a ninguna referencia')

        report = [info_report, warning_report, danger_report]

        return report

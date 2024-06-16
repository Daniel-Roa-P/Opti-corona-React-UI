from .Asset import Asset

class Document(Asset):

    def __init__(self, data):

        super().__init__(data, data[1]['SKU'], data[2]['Nombre_archivo'], data[len(data) - 1]['manual'])

    def create_automatic_matrix(self):

        referencias = sorted(self.references)

        # list file and directories
        res = sorted(self.assets)
        indice = 0
        
        if(self.manual):

            print('puto')

        else:

            assets = []

            allowedTypes = ['pdf', 'xml', 'txt']

            skus = []
            nombre_archivos = []
            tipoArchivo = []
            extentionFile = []

            for referencia in referencias:
                
                for filename in res:
                    
                    if (str(referencia) in filename and filename.lower()[-3:] in allowedTypes):
                
                        if('ficha' in filename.lower() or 'ft' in filename.lower()):
                            
                            tipoArchivo.append('Ficha Técnica')
                            
                        elif('instructivo' in filename.lower()): 
                            
                            tipoArchivo.append('Instructivo Instalación')
                            
                        elif('fds' in filename.lower()):

                            tipoArchivo.append('Hoja de seguridad')

                        else:
                            
                            tipoArchivo.append(' ')

                        extentionFile.append(filename.upper()[-3:])
                        skus.append(str(referencia))
                        nombre_archivos.append(filename)

                        indice = indice + 1
                        assets.append(filename)

                self.cantidades[referencia] = indice

                indice = 0       

            self.relaciones = [ skus , nombre_archivos , tipoArchivo, extentionFile ]

            self.truncate_relationships()

        return self.relaciones_truncado
    
    def generate_report(self):
        
        info_report = []
        warning_report = []
        danger_report = []

        for referencia in self.references: 

            temp_ammount = self.cantidades[referencia]

            if(temp_ammount != 0):

                info_report.append(str(referencia) + " se le asocio " + str(temp_ammount) + ' documentos')

            else:

                danger_report.append(str(referencia) + " no tiene ningun documento asociado")

        for i in range(0 , len(self.relaciones[2])):

            if(self.relaciones[2][i] == ' '): 

                danger_report.append('El documento ' + self.relaciones[1][i] + " no pudo ser clasificado")

        for filename in self.assets:
            
            if filename not in self.relatedAssets: 
                
                warning_report.append('El documento ' + filename + ' no fue asociado a ninguna referencia')

        report = [info_report, warning_report, danger_report]

        return report

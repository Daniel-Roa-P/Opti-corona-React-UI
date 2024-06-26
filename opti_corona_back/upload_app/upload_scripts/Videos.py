from .Asset import Asset

class Videos(Asset):

    def __init__(self, data):

        super().__init__(data, data[1]['SKU'], data[2]['ID_Video'], data[len(data) - 2]['asociation'], data[len(data) - 1]['manual'])

    def create_automatic_matrix(self):

        indice = 0
        
        if(self.manual):

            return self.create_manual_matrix()

        else:

            self.create_dictionary_by_row()

            skus = []
            videos_urls = []
            thumbnails_urls = []

            for referencia in self.relations_dictionary:

                for filename in self.relations_dictionary[str(referencia)]:

                    skus.append(str(referencia))
                    videos_urls.append('https://youtu.be/' +  filename)
                    thumbnails_urls.append('https://i.ytimg.com/vi/' + filename + '/hqdefault.jpg')

                    indice = indice + 1
                    self.relatedAssets.append(filename)

                self.cantidades[referencia] = indice

                indice = 0       

            self.relaciones = [ skus , videos_urls, thumbnails_urls]
            self.truncate_relationships()

            return self.relaciones_truncado
    
    def generate_report(self):
        
        info_report = []
        warning_report = []
        danger_report = []

        if(not self.manual):

            for referencia in sorted(set(map(str,self.references))): 

                temp_ammount = self.cantidades[referencia]

                if(temp_ammount != 0):

                    info_report.append(str(referencia) + " se le asocio " + str(temp_ammount) + ' videos')

                else:

                    danger_report.append(str(referencia) + " no tiene ningun video asociado")

            for filename in self.assets:
                
                if filename not in self.relatedAssets: 
                    
                    warning_report.append('El video ' + filename + ' no fue asociado a ninguna referencia')

        report = [info_report, warning_report, danger_report]

        return report
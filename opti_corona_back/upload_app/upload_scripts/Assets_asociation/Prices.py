from .Asset import Asset

class Prices(Asset):

    def __init__(self, data):

        self.zonas = ['ZNV000','ZNV001','ZNV002','ZNV003','ZNV004','ZNV005','ZNV006','ZNV016']

        skus = data[1]['SKU']
        precios = data[2]['Precio']
        zonasRegistradas = data[3]['Zona']

        while('TODAS' in zonasRegistradas):
            
            indexToReplace = zonasRegistradas.index('TODAS')
            
            temp_price = [precios[indexToReplace] for _ in range(len(self.zonas))]
            
            temp_sku = [skus[indexToReplace] for _ in range(len(self.zonas))]
            
            zonasRegistradas.pop(indexToReplace)
            
            zonasRegistradas = zonasRegistradas[:indexToReplace] + self.zonas + zonasRegistradas[indexToReplace:]
            
            precios.pop(indexToReplace)
            
            precios = precios[:indexToReplace] + temp_price + precios[indexToReplace:]
            
            skus.pop(indexToReplace)
            
            skus = skus[:indexToReplace] + temp_sku + skus[indexToReplace:]

        super().__init__(data, skus, map(lambda precio, zona: str(precio) + ',' + str(zona), precios, zonasRegistradas), data[len(data) - 2]['asociation'], data[len(data) - 1]['manual'])

    def create_automatic_matrix(self):

        indice = 0
        
        if(self.manual):

            return self.create_manual_matrix()

        else:

            self.create_dictionary_by_row()

            skus = []
            unidad_de_venta = []
            divisa = []
            precio = []
            zonas = []
            a = []
            b = []
            booleano = []

            for referencia in self.relations_dictionary:

                for price in self.relations_dictionary[str(referencia)]:

                    temp = price.split(',')

                    skus.append(str(referencia))
                    unidad_de_venta.append('pieces')
                    divisa.append('COP')
                    a.append('1')
                    b.append('1')
                    booleano.append('True')
                    precio.append(temp[0])
                    zonas.append(temp[1])

                    indice = indice + 1
                    self.relatedAssets.append(price)

                self.cantidades[referencia] = indice

                indice = 0       

            self.relaciones = [ skus , unidad_de_venta, divisa, precio, a, b, booleano, zonas]
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

                    info_report.append(str(referencia) + " se le asocio " + str(temp_ammount) + ' precios')

                else:

                    danger_report.append(str(referencia) + " no tiene ningun precio asociado")

            for filename in self.assets:
                
                if filename not in self.relatedAssets: 
                    
                    warning_report.append('El precio ' + filename + ' no fue asociado a ninguna referencia')

        report = [info_report, warning_report, danger_report]

        return report
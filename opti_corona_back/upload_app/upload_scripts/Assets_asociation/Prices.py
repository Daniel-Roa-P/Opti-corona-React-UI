import numpy as np
from .Asset import Asset

class Prices(Asset):

    def __init__(self, data):

        self.autoCompletar = False
        self.zonas = ['ZNV000','ZNV001','ZNV002','ZNV003','ZNV004','ZNV005','ZNV006','ZNV016']

        precios = []
        zonas = []

        if(not data[len(data) - 1]['manual']):

            precios = data[2]['Precio']
            zonas = data[3]['Zona']

        if(len(zonas) == 0):

            zonas = [""] * len(precios)
            self.autoCompletar = True

        super().__init__(data, data[1]['SKU'], map(lambda precio, zona: str(precio) + ',' + str(zona), precios, zonas), data[len(data) - 2]['asociation'], data[len(data) - 1]['manual'])

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

                    if(self.autoCompletar):

                        for zona in self.zonas:

                            temp = price.split(',')

                            skus.append(str(referencia))
                            unidad_de_venta.append('pieces')
                            divisa.append('COP')
                            a.append('1')
                            b.append('1')
                            booleano.append('True')
                            precio.append(temp[0])
                            zonas.append(zona)

                            indice = indice + 1
                            self.relatedAssets.append(price)

                    else:

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
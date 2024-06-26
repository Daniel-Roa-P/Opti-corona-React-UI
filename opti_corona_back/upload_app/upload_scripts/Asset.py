class Asset:

    def __init__(self, data, references, assets, asociation, manual = False):

        self.references = references
        self.assets = assets
        self.relaciones = []
        self.relaciones_truncado = []
        self.asociation = asociation
        self.manual = manual
        self.relatedAssets = []
        self.cantidades = {}
        self.relations_dictionary = {}
        self.data = data

    def create_automatic_matrix(self):
        pass

    def generate_report(self):
        pass
    
    def truncate_relationships(self):

        for i in range(0,len(self.relaciones[0])):

            temp_list = []

            for j in range(0,len(self.relaciones)):

                temp_list.append(self.relaciones[j][i])

            self.relaciones_truncado.append(temp_list)

        return self.relaciones_truncado
    
    def create_dictionary_by_name(self):

        referencias = sorted(set(map(str,self.references)))
        archivos = sorted(set(map(str,self.assets)))

        for referencia in referencias:
            
            self.relations_dictionary[str(referencia)] = []

            for filename in archivos:

                if(str(referencia) in filename):

                    self.relations_dictionary[str(referencia)].append(filename)

    def create_dictionary_by_row(self):

        referencias = list(map(str,self.references))
        archivos = list(map(str,self.assets))

        print(referencias)
        print(archivos)

        for i in range(0, len(referencias)):
            
            if(str(referencias[i]) not in self.relations_dictionary):
                
                self.relations_dictionary[str(referencias[i])] = []

            self.relations_dictionary[str(referencias[i])].append(archivos[i])

    def create_manual_matrix(self):

        for i in range (1,(len(self.data)-2)):

            self.relaciones.append(list(self.data[i].values())[0])

        self.truncate_relationships()
        return self.relaciones_truncado
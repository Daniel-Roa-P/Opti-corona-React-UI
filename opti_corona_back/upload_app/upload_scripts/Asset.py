class Asset:

    def __init__(self, data, references, assets, manual = False):

        self.references = set(map(str,references))
        self.assets = set(map(str,assets))
        self.relaciones = []
        self.relaciones_truncado = []
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

        referencias = sorted(self.references)

        # list file and directories
        res = sorted(self.assets)

        for referencia in referencias:
            
            self.relations_dictionary[str(referencia)] = []

            for filename in res:

                if(str(referencia) in filename):

                    self.relations_dictionary[str(referencia)].append(filename)

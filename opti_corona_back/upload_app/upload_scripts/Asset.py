class Asset:

    def __init__(self, references, files, manual = False):

        self.references = set(references)
        self.files = files
        self.relaciones = []
        self.relaciones_truncado = []
        self.manual = manual
        self.cantidades = {}
        self.relatedFiles = []

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
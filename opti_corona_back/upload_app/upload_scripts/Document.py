from .Asset import Asset

class Document(Asset):

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

        allowedTypes = ['pdf', 'xml', 'txt']

        skus = []
        nombre_archivos = []
        tipoArchivo = []
        extentionFile = []

        for referencia in referencias:
            
            for filename in res:
                
                if (str(referencia) in filename and 'pdf' in filename.lower()):
            
                    if('ficha' in filename.lower() or 'ft' in filename.lower()):
                        
                        tipoArchivo.append('Ficha Técnica')
                        
                    elif('instructivo' in filename.lower()): 
                        
                        tipoArchivo.append('Instructivo Instalación')
                        
                    elif('fds' in filename.lower()):

                        tipoArchivo.append('Hoja de seguridad')

                    else:
                        
                        tipoArchivo.append(' ')

                    extentionFile.append('PDF')
                    skus.append(str(referencia))
                    nombre_archivos.append(filename)

                    indice = indice + 1
                    files.append(filename)

            cantidades[referencia] = indice

            indice = 0       

        self.relaciones = [ skus , nombre_archivos , tipoArchivo, extentionFile ]

        self.truncate_relationships()

        for filename in res:
            
            if filename not in files: 
                
                print(filename)

        return self.relaciones_truncado
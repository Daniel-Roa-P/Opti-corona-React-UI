class Images:

    def upload_images(self, sku_list, file_list, manual):

        referencias = sorted(list(set(sku_list)))

        # list file and directories
        res = sorted(file_list)
        indice = 0
        miniatura = ''
        
        if(manual):

            print('puto')

        relaciones = []
        files = []
        cantidades = {}

        for referencia in referencias:
            
            for filename in res:
                
                if (str(referencia) in filename):
                    
                    if(indice == 0):
                            
                        miniatura = 'thumbnail'
                    
                    temp_object = {

                        "sku": str(referencia),
                        "nombre_archivo": filename,
                        "imagen_contenedor": filename,
                        "imagen_rara": filename,
                        "alt": filename,
                        "pos": str(indice),
                        "thumbnail": miniatura

                    }

                    relaciones.append(temp_object)
                    indice = indice + 1
                    miniatura = ''
                    files.append(filename)

            cantidades[referencia] = indice

            indice = 0       

        for filename in res:
            
            if filename not in files: 
                
                print(filename)
                
        return relaciones
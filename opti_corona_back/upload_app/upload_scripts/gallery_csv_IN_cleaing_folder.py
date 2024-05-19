class Images:

    def upload_images(self, sku_list, file_list, manual):

        referencias = sorted(list(set(sku_list)))

        # list file and directories
        res = sorted(file_list)
        indice = 0
        miniatura = ''
        
        if(manual):

            print('puto')

        files = []
        cantidades = {}

        skus = []
        nombre_archivos = []
        posiciones = []
        thumbnails = []

        for referencia in referencias:
            
            for filename in res:
                
                if (str(referencia) in filename):

                    if(indice == 0):
                            
                        miniatura = 'thumbnail'

                    skus.append(str(referencia))
                    nombre_archivos.append(filename)
                    posiciones.append(str(indice))
                    thumbnails.append(miniatura)

                    indice = indice + 1
                    miniatura = ''
                    files.append(filename)

            cantidades[referencia] = indice

            indice = 0       

        relaciones = [ {'SKU':skus }, {'Nombre_archivo':nombre_archivos }, {'Imagen_contenedor':nombre_archivos }, {'Imagen_rara':nombre_archivos }, {'Texto_alternativo':nombre_archivos }, {'Posicion':posiciones }, {'Miniatura': thumbnails} ]

        for filename in res:
            
            if filename not in files: 
                
                print(filename)
                
        return relaciones
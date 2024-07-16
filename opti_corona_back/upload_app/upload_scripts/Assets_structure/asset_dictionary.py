assets_structure = {

    'images': {

        'true': {

            'header': ['SKU', 'Nombre_archivo', 'Contenedor_de_imagen', 'Contenedor_de_medio', 'Texto_alternativo', 'Posicion', 'Miniatura'],
            'column_structure': [
                { 'type': 'text' },
                { 'type': 'text' },
                { 'type': 'text' },
                { 'type': 'text' },
                { 'type': 'text' },
                { 'type': 'numeric' },
                { 'type': 'dropdown', 'source': ['', 'thumbnail'] }
            ]

        },

        'false': {

            'header': ['SKU', 'Nombre_archivo'],
            'column_structure': [
                { 'type': 'text' },
                { 'type': 'text' }
            ]

        },

    },
    'docs': {

        'true': {

            'header': ['SKU', 'Nombre_archivo', 'Nombre_documento' , 'Extension_archivo'],
            'column_structure': [
                { 'type': 'text' },
                { 'type': 'text' },
                { 'type': 'text' },
                { 'type': 'dropdown', 'source': ['PDF', 'TEXT', 'XML'] }
            ]

        }, 'false': {

            'header': ['SKU', 'Nombre_archivo'],
            'column_structure': [
                { 'type': 'text' },
                { 'type': 'text' }
            ]

        }


    },
    'blueprints': {

        'true': {

            'header': ['SKU', 'Nombre_archivo'],
            'column_structure': [
                { 'type': 'text' },
                { 'type': 'text' },
            ]
        }, 'false': {

            'header': ['SKU', 'Nombre_archivo'],
            'column_structure': [
                { 'type': 'text' },
                { 'type': 'text' }
            ]

        }

    },
    'rfa': {

        'true': {

            'header': ['SKU', 'Nombre_archivo', 'Nombre_del_documento'],
            'column_structure': [
                { 'type': 'text' },
                { 'type': 'text' },
                { 'type': 'text' }
            ]

        }, 'false': {

            'header': ['SKU', 'Nombre_archivo'],
            'column_structure': [
                { 'type': 'text' },
                { 'type': 'text' }
            ]

        }


    },
    'prices': {

        'true': {

            'header': ['SKU', 'Unidad_de_venta', 'Divisa', 'Precio', 'Escala', 'Factor_de_unidad', 'Activo', 'Zona'],
            'column_structure': [
                { 'type': 'text' },
                { 'type': 'dropdown', 'source': ['pieces', 'M2', 'CJ'] },
                { 'type': 'dropdown', 'source': ['COP', 'MXN', 'USD'] },
                { 'type': 'numeric' },
                { 'type': 'numeric' },
                { 'type': 'numeric' },
                { 'type': 'checkbox' },
                { 'type': 'dropdown', 'source': ['ZNV000', 'ZNV001', 'ZNV002', 'ZNV003', 'ZNV004', 'ZNV005', 'ZNV006', 'ZNV016'] }
            ]

        }, 'false': {

            'header': ['SKU', 'Precio', 'Zona'],
            'column_structure': [
                { 'type': 'text' },
                { 'type': 'numeric'},
                { 'type': 'dropdown', 'source': ['ZNV000', 'ZNV001', 'ZNV002', 'ZNV003', 'ZNV004', 'ZNV005', 'ZNV006', 'ZNV016'] }
            ]

        }

    },
    'videos': {

        'true': {

            'header': ['SKU', 'ID_Video', 'ID_Miniatura'],
            'column_structure': [
                { 'type': 'text' },
                { 'type': 'text' },
                { 'type': 'text' }
            ]

        },

        'false': {

            'header': ['SKU', 'ID_Video'],
            'column_structure': [
                { 'type': 'text' },
                { 'type': 'text' }
            ]

        },

    }

}

def get_list():

    return list(assets_structure.keys())

def get_structure(asset, manually):

    return assets_structure[str(asset)][str(manually).lower()]
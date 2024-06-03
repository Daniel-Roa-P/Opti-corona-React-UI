const assets_structure = {

    images: {

        true: {

            header: ['SKU', 'Nombre_archivo', 'Imagen_contenedor', 'Imagen_rara', 'Texto_alternativo', 'Posicion', 'Miniatura'],
            column_structure: [
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'numeric' },
                { type: 'dropdown', source: ['', 'thumbnail'] }
            ]

        },

        false: {

            header: ['SKU', 'Nombre_archivo'],
            column_structure: [
                { type: 'text' },
                { type: 'text' }
            ]

        },

    },
    docs: {

        true: {

            header: ['SKU', 'Nombre_archivo', 'Nombre_documento' , 'Extension_archivo'],
            column_structure: [
                { type: 'text' },
                { type: 'text' },
                { type: 'text' },
                { type: 'dropdown', source: ['PDF', 'TEXT', 'XML'] }
            ]

        }, false: {

            header: ['SKU', 'Nombre_archivo'],
            column_structure: [
                { type: 'text' },
                { type: 'text' }
            ]

        }


    },
    blueprints: {

        true: {

            header: ['SKU', 'Nombre_archivo'],
            column_structure: [
                { type: 'text' },
                { type: 'text' },
            ]
        }, false: {

            header: ['SKU', 'Nombre_archivo'],
            column_structure: [
                { type: 'text' },
                { type: 'text' }
            ]

        }

    },
    rfa: {

        true: {

            header: ['SKU', 'Nombre_archivo', 'Nombre_del_documento'],
            column_structure: [
                { type: 'text' },
                { type: 'text' },
                { type: 'text' }
            ]

        }, false: {

            header: ['SKU', 'Nombre_archivo'],
            column_structure: [
                { type: 'text' },
                { type: 'text' }
            ]

        }


    },
    prices: {

        true: {

            header: ['SKU', 'Unidad_de_venta', 'Divisa', 'Precio', 'Valor_raro_1', 'Valor_raro_2', 'Booleano_raro', 'Zona'],
            column_structure: [
                { type: 'text' },
                { type: 'dropdown', source: ['pieces', 'M2', 'CJ'] },
                { type: 'dropdown', source: ['COP', 'MXN', 'USD'] },
                { type: 'numeric' },
                { type: 'numeric' },
                { type: 'numeric' },
                { type: 'checkbox' },
                { type: 'text' }
            ]

        }, false: {

            header: ['SKU', 'Precio', 'Divisa', 'Zona'],
            column_structure: [
                { type: 'text' },
                { type: 'numeric', readOnly: true },
                { type: 'dropdown', source: ['COP', 'MXN', 'USD'], readOnly: true },
                { type: 'text', readOnly: true }
            ]

        }

    },
    videos: {

        true: {

            header: ['SKU', 'ID_Video', 'ID_Miniatura'],
            column_structure: [
                { type: 'text' },
                { type: 'text' },
                { type: 'text' }
            ]

        },

        false: {

            header: ['SKU', 'ID_Video'],
            column_structure: [
                { type: 'text' },
                { type: 'text' }
            ]

        },

    }

}

export { assets_structure };
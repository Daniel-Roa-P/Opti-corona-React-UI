const assets_structure = {

    images: {

        true: {

            header: ['SKU', 'Nombre archivo', 'Nombre archivo 2', 'Nombre archivo 3', 'Texto alternativo', 'Posición', 'miniatura'],
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

            header: ['SKU', 'Nombre archivo'],
            column_structure: [
                { type: 'text' },
                { type: 'text', readOnly: true, }
            ]

        },

    },
    docs: {

        true: {

            header: ['SKU', 'Nombre archivo', 'Extension archivo', 'Nombre del documento'],
            column_structure: [
                { type: 'text' },
                { type: 'text' },
                { type: 'dropdown', source: ['PDF', 'TEXT', 'XML'] },
                { type: 'text' }
            ]

        }, false: {

            header: ['SKU', 'Nombre archivo'],
            column_structure: [
                { type: 'text' },
                { type: 'text', readOnly: true, }
            ]

        }


    },
    blueprints: {

        true: {

            header: ['SKU', 'Nombre archivo'],
            column_structure: [
                { type: 'text' },
                { type: 'text' },
            ]
        }, false: {

            header: ['SKU', 'Nombre archivo'],
            column_structure: [
                { type: 'text' },
                { type: 'text', readOnly: true, }
            ]

        }

    },
    rfa: {

        true: {

            header: ['SKU', 'Nombre archivo', 'Nombre del documento'],
            column_structure: [
                { type: 'text' },
                { type: 'text' },
                { type: 'text' }
            ]

        }, false: {

            header: ['SKU', 'Nombre archivo'],
            column_structure: [
                { type: 'text' },
                { type: 'text', readOnly: true, }
            ]

        }


    },
    prices: {

        true: {

            header: ['SKU', 'Unidad de venta', 'Divisa', 'Precio', 'Valor raro 1', 'Valor raro 2', 'Booleano raro', 'Zona'],
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

            header: ['SKU', 'ID Video', 'ID Miniatura'],
            column_structure: [
                { type: 'text' },
                { type: 'text' },
                { type: 'text' }
            ]

        },

        false: {

            header: ['SKU', 'ID Video'],
            column_structure: [
                { type: 'text' },
                { type: 'text', readOnly: true, }
            ]

        },

    }

}

export { assets_structure };
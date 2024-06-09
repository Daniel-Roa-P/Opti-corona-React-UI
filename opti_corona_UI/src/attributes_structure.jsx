const attributes_structure = {
    "corona": {
        "header": [
            "name",
            "summary",
            "description",
            "approvalStatus",
            "supercategories",
            "ean",
            "externalSalesUnit",
            "unit",
            "conversionValue",
            "conversionUnit",
            "weight",
            "relevance",
            "productRequest",
            "colorSelector",
            "hasPriorityVariant",
            "areaCovered",
            "areaUnit",
            "showCalculator",
            "wastePerecentage",
            "flag",
            "recommendationsForUse",
            "recommendationsForInstalation",
            "recommendationsForApplying",
            "recommendationsForCleaning",
            "advantages",
            "specialAttributes",
            "extendedContent",
            "presentation",
            "technicalDocuments",
            "blueprints",
            "seoTitle",
            "seoDescription",
            "seoRobots",
            "ogTitle",
            "ogDescription"
        ],
        "column_structure": [
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "dropdown",
                "source": [
                    "approved",
                    "unapproved",
                    "check"
                ]
            },
            {
                "type": "text"
            },
            {
                "type": "numeric"
            },
            {
                "type": "numeric"
            },
            {
                "type": "dropdown",
                "source": [
                    "CJ",
                    "M2",
                    "KG",
                    "UN"
                ]
            },
            {
                "type": "numeric"
            },
            {
                "type": "dropdown",
                "source": [
                    "FT2",
                    "G",
                    "GAL",
                    "IN2",
                    "KG",
                    "L",
                    "LB",
                    "M2",
                    "ML",
                    "OZ"
                ]
            },
            {
                "type": "numeric"
            },
            {
                "type": "dropdown",
                "source": [
                    "HIGH_RELEVANCE",
                    "LOW_RELEVANCE",
                    "MEDIUM_RELEVANCE",
                    "NO_RELEVANCE",
                    "VERY_HIGH_RELEVANCE",
                    "VERY_LOW_RELEVANCE"
                ]
            },
            {
                "type": "numeric"
            },
            {
                "type": "dropdown",
                "source": [
                    "M2",
                    "CM2"
                ]
            },
            {
                "type": "numeric"
            },
            {
                "type": "dropdown",
                "source": [
                    "PRONTO",
                    "FREE_SHIPPING",
                    "SPECIAL_PRICE",
                    "EXCLUSIVE",
                    "ANNIVERSARY",
                    "POTENTIAL_PROMOTION",
                    "NEW"
                ]
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "dropdown",
                "source": [
                    "BOX",
                    "SET",
                    "UNIT"
                ]
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "dropdown",
                "source": [
                    "INDEX_FOLLOW",
                    "INDEX_NOFOLLOW",
                    "NOINDEX",
                    "NOINDEX_FOLLOW",
                    "NOINDEX_NOFOLLOW"
                ]
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            }
        ]
    },
    "especificaciones-accesorios": {
        "header": [
            "profundidad",
            "temperatura-de-uso"
        ],
        "column_structure": [
            {
                "type": "numeric"
            },
            {
                "type": "text"
            }
        ]
    },
    "especificaciones-combos-y-kits": {
        "header": [
            "componentes",
            "numero-de-piezas",
            "tipo-de-sifon"
        ],
        "column_structure": [
            {
                "type": "dropdown",
                "source": [
                    "accesorios",
                    "barra",
                    "cepillera",
                    "dispensador-de-jabon",
                    "griferia",
                    "jabonera",
                    "lavamanos-con-pedestal",
                    "lavamanos-sin-pedestal",
                    "mueble-con-lavamanos-a-piso",
                    "mueble-con-lavamanos-elevado",
                    "percha",
                    "portarrollo",
                    "sanitario-de-dos-piezas",
                    "sanitario-de-una-pieza",
                    "toallero"
                ]
            },
            {
                "type": "numeric"
            },
            {
                "type": "dropdown",
                "source": [
                    "expuesto",
                    "oculto"
                ]
            }
        ]
    },
    "especificaciones-comunes-a": {
        "header": [
            "areas-de-uso",
            "diseno"
        ],
        "column_structure": [
            {
                "type": "dropdown",
                "source": [
                    "alcobas",
                    "areas-comerciales",
                    "areas-exteriores",
                    "areas-exteriores-techadas",
                    "bano",
                    "biblioteca",
                    "cocina",
                    "escaleras",
                    "hall",
                    "pasillo",
                    "piscina",
                    "sala-comedor",
                    "terrazas"
                ]
            },
            {
                "type": "text"
            }
        ]
    },
    "especificaciones-comunes-b": {
        "header": [
            "contenido-del-producto",
            "precauciones",
            "presentacion",
            "rendimiento",
            "tiempo-de-secado"
        ],
        "column_structure": [
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "dropdown",
                "source": [
                    "balde",
                    "bolsa",
                    "botella",
                    "bulto",
                    "caja",
                    "cunete",
                    "galon",
                    "garrafa",
                    "tambor",
                    "tubo",
                    "unidad"
                ]
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            }
        ]
    },
    "especificaciones-comunes-c": {
        "header": [
            "consumo-de-agua",
            "forma",
            "tipo-de-instalacion",
            "tipo-de-manija-o-accionamiento"
        ],
        "column_structure": [
            {
                "type": "numeric"
            },
            {
                "type": "dropdown",
                "source": [
                    "alongado",
                    "cuadrado",
                    "ovalado",
                    "rectangular",
                    "redondo"
                ]
            },
            {
                "type": "dropdown",
                "source": [
                    "a-pared",
                    "a-piso",
                    "elevado",
                    "facil-click",
                    "sobre-meson"
                ]
            },
            {
                "type": "dropdown",
                "source": [
                    "cruceta",
                    "oculta",
                    "palanca",
                    "pomo",
                    "push",
                    "push-mesa",
                    "push-pared",
                    "sensor",
                    "tiradera",
                    "triceta"
                ]
            }
        ]
    },
    "especificaciones-duchas": {
        "header": [
            "dimension-de-la-regadera",
            "longitud-del-brazo",
            "tipo-de-regadera",
            "tipo-mezclador"
        ],
        "column_structure": [
            {
                "type": "text"
            },
            {
                "type": "numeric"
            },
            {
                "type": "dropdown",
                "source": [
                    "cobertura-envolvente",
                    "cobertura-estandar",
                    "cobertura-focalizada",
                    "regadera-con-brazo",
                    "regadera-con-funciones",
                    "regadera-diametro-amplio",
                    "regadera-sencilla",
                    "regadera-sin-brazo",
                    "valores-a-adicionar"
                ]
            },
            {
                "type": "dropdown",
                "source": [
                    "monocontrol",
                    "monocontrol-con-desviador",
                    "ocho-pulgadas",
                    "sencillo"
                ]
            }
        ]
    },
    "especificaciones-gaso-electro": {
        "header": [
            "color",
            "eficiencia-energetica",
            "especificaciones-gaso-electro",
            "marca",
            "observaciones",
            "tipo-de-sistema",
            "tipo-instalacion",
            "voltaje"
        ],
        "column_structure": [
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "dropdown",
                "source": [
                    "abba",
                    "airon",
                    "ariston",
                    "challenger",
                    "electric",
                    "mabe-general",
                    "teka"
                ]
            },
            {
                "type": "text"
            },
            {
                "type": "dropdown",
                "source": [
                    "128piezas",
                    "40piezas",
                    "48piezas",
                    "60piezas",
                    "70piezas",
                    "75piezas",
                    "dropdown",
                    "electrico",
                    "gas-natural",
                    "gas-propano",
                    "isla",
                    "mixto-electro-gas",
                    "mueble",
                    "pared-peninsula",
                    "ultraslim"
                ]
            },
            {
                "type": "dropdown",
                "source": [
                    "empotrar",
                    "piso"
                ]
            },
            {
                "type": "text"
            }
        ]
    },
    "especificaciones-generales": {
        "header": [
            "acabado",
            "alto",
            "ancho",
            "calidad",
            "coleccion",
            "espesor-mm",
            "fabricado-por",
            "fabricante",
            "garantia",
            "garantias-de-otros-componentes",
            "incluye",
            "largo",
            "linea",
            "marca",
            "materiales",
            "no-incluye",
            "paisdeorigen",
            "premios",
            "productos-compatibles",
            "resistencia",
            "tecnologias",
            "uso"
        ],
        "column_structure": [
            {
                "type": "dropdown",
                "source": [
                    "brillante",
                    "cromado",
                    "mate",
                    "satinado",
                    "semibrillante",
                    "semimate"
                ]
            },
            {
                "type": "numeric"
            },
            {
                "type": "numeric"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "numeric"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "dropdown",
                "source": [
                    "hogar",
                    "institucional",
                    "residencial"
                ]
            }
        ]
    },
    "especificaciones-griferias": {
        "header": [
            "altura-de-la-griferia",
            "capacidad-de-flujo",
            "observaciones",
            "rango-de-presion-de-agua",
            "sistema-antivandalico",
            "sistema-de-accionamiento",
            "temperatura-de-uso",
            "tipo-de-chorro",
            "tipo-de-griferia"
        ],
        "column_structure": [
            {
                "type": "dropdown",
                "source": [
                    "altura-de-la-griferia-alta",
                    "altura-de-la-griferia-baja",
                    "altura-de-la-griferia-media"
                ]
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "dropdown",
                "source": [
                    "cascada",
                    "espumoso",
                    "hidromasaje",
                    "tipo-lluvia"
                ]
            },
            {
                "type": "dropdown",
                "source": [
                    "cuatro-pulgadas",
                    "de-pared",
                    "monocontrol",
                    "ocho-pulgadas",
                    "sencilla"
                ]
            }
        ]
    },
    "especificaciones-herramientas": {
        "header": [
            "caracteristicas-funcionales"
        ],
        "column_structure": [
            {
                "type": "text"
            }
        ]
    },
    "especificaciones-materiales-limpiadores-pegantes": {
        "header": [
            "adherencia",
            "dilucion",
            "duracion-de-la-mezcla",
            "tiempo-abierto",
            "tiempo-para-emboquillar"
        ],
        "column_structure": [
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            }
        ]
    },
    "especificaciones-muebles": {
        "header": [
            "profundidad",
            "resistente-humedad",
            "tiempo-de-armado-estimado",
            "tipo-de-canto",
            "tipo-de-cierre",
            "tipo-de-herrajes"
        ],
        "column_structure": [
            {
                "type": "numeric"
            },
            {
                "type": "text"
            },
            {
                "type": "numeric"
            },
            {
                "type": "dropdown",
                "source": [
                    "flexible",
                    "rigido"
                ]
            },
            {
                "type": "dropdown",
                "source": [
                    "lento",
                    "push-to-open-suave",
                    "seco",
                    "suave"
                ]
            },
            {
                "type": "text"
            }
        ]
    },
    "especificaciones-muebles-bano": {
        "header": [
            "material-del-lavamanos",
            "material-del-meson"
        ],
        "column_structure": [
            {
                "type": "dropdown",
                "source": [
                    "ceramica",
                    "porcelana",
                    "vidrio"
                ]
            },
            {
                "type": "dropdown",
                "source": [
                    "corona-stone",
                    "porcelana"
                ]
            }
        ]
    },
    "especificaciones-muebles-cocina": {
        "header": [
            "caracteristicas-de-la-cubierta",
            "material-del-lavaplatos"
        ],
        "column_structure": [
            {
                "type": "text"
            },
            {
                "type": "text"
            }
        ]
    },
    "especificaciones-muebles-lavadero": {
        "header": [
            "material-del-lavadero"
        ],
        "column_structure": [
            {
                "type": "text"
            }
        ]
    },
    "especificaciones-pinturas": {
        "header": [
            "cuarteamiento-alto-espesor",
            "cuarteamiento-superficial",
            "fabricado-por",
            "lavabilidad",
            "lote-fecha-fabricacion",
            "poder-cubriente",
            "remocion-manchas-lavabilidad",
            "resistencia-abrasion",
            "resistencia-agua",
            "resistencia-hongos-algas",
            "retencion-olor",
            "toxicidad"
        ],
        "column_structure": [
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "dropdown",
                "source": [
                    "lavabilidad-alta",
                    "lavabilidad-baja",
                    "lavabilidad-media"
                ]
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            }
        ]
    },
    "especificaciones-plomeria": {
        "header": [
            "alto-plomeria",
            "ancho-plomeria",
            "especificaciones",
            "largo-plomeria"
        ],
        "column_structure": [
            {
                "type": "numeric"
            },
            {
                "type": "numeric"
            },
            {
                "type": "text"
            },
            {
                "type": "numeric"
            }
        ]
    },
    "especificaciones-pozos": {
        "header": [
            "diametro-del-desague",
            "dimensiones-del-pozo",
            "profundidad-del-pozo",
            "sistema-antivandalico",
            "tipo-de-desague",
            "tipo-de-lavamanos"
        ],
        "column_structure": [
            {
                "type": "numeric"
            },
            {
                "type": "text"
            },
            {
                "type": "numeric"
            },
            {
                "type": "text"
            },
            {
                "type": "dropdown",
                "source": [
                    "expuesto",
                    "oculto"
                ]
            },
            {
                "type": "text"
            }
        ]
    },
    "especificaciones-revestimientos": {
        "header": [
            "aspecto",
            "formato",
            "lote-fecha-fabricacion",
            "m2-por-caja",
            "pais-origen",
            "piezas-por-caja",
            "resistencia-a-las-manchas",
            "superficie",
            "tamaño",
            "trafico",
            "unidad-de-embalaje"
        ],
        "column_structure": [
            {
                "type": "dropdown",
                "source": [
                    "caras-diferenciadas",
                    "caras-unicas",
                    "multitono"
                ]
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "numeric"
            },
            {
                "type": "text"
            },
            {
                "type": "numeric"
            },
            {
                "type": "dropdown",
                "source": [
                    "clase-1",
                    "clase-2",
                    "clase-3",
                    "clase-4",
                    "clase-5"
                ]
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            },
            {
                "type": "dropdown",
                "source": [
                    "comercial-general",
                    "comercial-moderado",
                    "residencial-general",
                    "residencial-moderado",
                    "solo-pared",
                    "todo-trafico"
                ]
            },
            {
                "type": "text"
            }
        ]
    },
    "especificaciones-sanitarios": {
        "header": [
            "accesibilidad",
            "altura-de-la-taza",
            "capacidad-de-descarga",
            "espejo-de-agua",
            "perfil-de-la-taza",
            "sistema-antivandalico",
            "sistema-de-descarga",
            "tipo-de-asiento",
            "tipo-de-sifon",
            "tipo-de-tanque",
            "tipo-de-valvula"
        ],
        "column_structure": [
            {
                "type": "text"
            },
            {
                "type": "numeric"
            },
            {
                "type": "numeric"
            },
            {
                "type": "text"
            },
            {
                "type": "dropdown",
                "source": [
                    "alongado",
                    "redondo"
                ]
            },
            {
                "type": "text"
            },
            {
                "type": "dropdown",
                "source": [
                    "boton-dual-azul-corona",
                    "boton-tipo-push",
                    "palanca"
                ]
            },
            {
                "type": "dropdown",
                "source": [
                    "cierre-lento",
                    "cierre-tradicional"
                ]
            },
            {
                "type": "dropdown",
                "source": [
                    "expuesto",
                    "oculto"
                ]
            },
            {
                "type": "text"
            },
            {
                "type": "text"
            }
        ]
    }
}

export { attributes_structure };
attributes_structure = {
    "default": {
        "code": {
            "id": -1,
            "nomenclatura": "[unique = true]",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "false"
        }
    },
    "corona": {
        "advantages": {
            "id": 1,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "approvalStatus": {
            "id": 2,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "approved",
                    "unapproved",
                    "check"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "areaCovered": {
            "id": 3,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "areaUnit": {
            "id": 4,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "M2",
                    "CM2"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "blueprints": {
            "id": 5,
            "nomenclatura": "(code, $catalogVersion)",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "false"
        },
        "colorSelector": {
            "id": 6,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "checkbox"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "conversionUnit": {
            "id": 7,
            "nomenclatura": "(code)",
            "attribute_structure": {
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
            "multivalued": "false",
            "zonified": "false"
        },
        "conversionValue": {
            "id": 8,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "description": {
            "id": 9,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "ean": {
            "id": 10,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "extendedContent": {
            "id": 11,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "externalSalesUnit": {
            "id": 12,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "flag": {
            "id": 13,
            "nomenclatura": "(code)",
            "attribute_structure": {
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
            "multivalued": "true",
            "zonified": "false"
        },
        "hasPriorityVariant": {
            "id": 14,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "checkbox"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "name": {
            "id": 15,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "ogDescription": {
            "id": 16,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "ogTitle": {
            "id": 17,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "presentation": {
            "id": 18,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "BOX",
                    "SET",
                    "UNIT"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "productRequest": {
            "id": 19,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "checkbox"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "recommendationsForApplying": {
            "id": 20,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "recommendationsForCleaning": {
            "id": 21,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "recommendationsForInstalation": {
            "id": 22,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "recommendationsForUse": {
            "id": 23,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "relevance": {
            "id": 24,
            "nomenclatura": "(code)",
            "attribute_structure": {
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
            "multivalued": "false",
            "zonified": "false"
        },
        "seoDescription": {
            "id": 25,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "seoRobots": {
            "id": 26,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "INDEX_FOLLOW",
                    "INDEX_NOFOLLOW",
                    "NOINDEX",
                    "NOINDEX_FOLLOW",
                    "NOINDEX_NOFOLLOW"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "seoTitle": {
            "id": 27,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "showCalculator": {
            "id": 28,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "checkbox"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "specialAttributes": {
            "id": 29,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "summary": {
            "id": 30,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "supercategories": {
            "id": 31,
            "nomenclatura": "(code, $catalogVersion)",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "false"
        },
        "taxonomyCode": {
            "id": 32,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "technicalDocuments": {
            "id": 33,
            "nomenclatura": "(code, $catalogVersion)",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "false"
        },
        "unit": {
            "id": 34,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "CJ",
                    "M2",
                    "KG",
                    "UN"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "wastePerecentage": {
            "id": 35,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "weight": {
            "id": 36,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        }
    },
    "especificaciones-accesorios": {
        "profundidad": {
            "id": 37,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "temperatura-de-uso": {
            "id": 38,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        }
    },
    "especificaciones-combos-y-kits": {
        "componentes": {
            "id": 39,
            "nomenclatura": "(code)",
            "attribute_structure": {
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
            "multivalued": "true",
            "zonified": "false"
        },
        "numero-de-piezas": {
            "id": 40,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "tipo-de-sifon": {
            "id": 41,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "expuesto",
                    "oculto"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        }
    },
    "especificaciones-comunes-a": {
        "areas-de-uso": {
            "id": 42,
            "nomenclatura": "(code)",
            "attribute_structure": {
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
            "multivalued": "true",
            "zonified": "false"
        },
        "diseno": {
            "id": 43,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "true"
        }
    },
    "especificaciones-comunes-b": {
        "contenido-del-producto": {
            "id": 44,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "precauciones": {
            "id": 45,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "true"
        },
        "presentacion": {
            "id": 46,
            "nomenclatura": "(code)",
            "attribute_structure": {
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
            "multivalued": "false",
            "zonified": "false"
        },
        "rendimiento": {
            "id": 47,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "true"
        },
        "tiempo-de-secado": {
            "id": 48,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        }
    },
    "especificaciones-comunes-c": {
        "consumo-de-agua": {
            "id": 49,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "forma": {
            "id": 50,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "alongado",
                    "cuadrado",
                    "ovalado",
                    "rectangular",
                    "redondo"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "tipo-de-instalacion": {
            "id": 51,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "a-pared",
                    "a-piso",
                    "elevado",
                    "facil-click",
                    "sobre-meson"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "tipo-de-manija-o-accionamiento": {
            "id": 52,
            "nomenclatura": "(code)",
            "attribute_structure": {
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
            },
            "multivalued": "false",
            "zonified": "false"
        }
    },
    "especificaciones-duchas": {
        "dimension-de-la-regadera": {
            "id": 53,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "longitud-del-brazo": {
            "id": 54,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "tipo-de-regadera": {
            "id": 55,
            "nomenclatura": "(code)",
            "attribute_structure": {
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
            "multivalued": "true",
            "zonified": "false"
        },
        "tipo-mezclador": {
            "id": 56,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "monocontrol",
                    "monocontrol-con-desviador",
                    "ocho-pulgadas",
                    "sencillo"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        }
    },
    "especificaciones-gaso-electro": {
        "color": {
            "id": 57,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "eficiencia-energetica": {
            "id": 58,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "especificaciones-gaso-electro": {
            "id": 59,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "marca": {
            "id": 60,
            "nomenclatura": "(code)",
            "attribute_structure": {
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
            "multivalued": "false",
            "zonified": "true"
        },
        "observaciones": {
            "id": 61,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "tipo-de-sistema": {
            "id": 62,
            "nomenclatura": "(code)",
            "attribute_structure": {
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
            "multivalued": "true",
            "zonified": "true"
        },
        "tipo-instalacion": {
            "id": 63,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "empotrar",
                    "piso"
                ]
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "voltaje": {
            "id": 64,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        }
    },
    "especificaciones-generales": {
        "acabado": {
            "id": 65,
            "nomenclatura": "(code)",
            "attribute_structure": {
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
            "multivalued": "false",
            "zonified": "false"
        },
        "alto": {
            "id": 66,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "ancho": {
            "id": 67,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "calidad": {
            "id": 68,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "coleccion": {
            "id": 69,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "espesor-mm": {
            "id": 70,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "fabricado-por": {
            "id": 71,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "fabricante": {
            "id": 72,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "garantia": {
            "id": 73,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "garantias-de-otros-componentes": {
            "id": 74,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "incluye": {
            "id": 75,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "true"
        },
        "largo": {
            "id": 76,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "linea": {
            "id": 77,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "marca": {
            "id": 78,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "materiales": {
            "id": 79,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "true"
        },
        "no-incluye": {
            "id": 80,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "true"
        },
        "paisdeorigen": {
            "id": 81,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "premios": {
            "id": 82,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "true"
        },
        "productos-compatibles": {
            "id": 83,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "true"
        },
        "resistencia": {
            "id": 84,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "true"
        },
        "tecnologias": {
            "id": 85,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "true"
        },
        "uso": {
            "id": 86,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "hogar",
                    "institucional",
                    "residencial"
                ]
            },
            "multivalued": "true",
            "zonified": "false"
        }
    },
    "especificaciones-griferias": {
        "altura-de-la-griferia": {
            "id": 87,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "altura-de-la-griferia-alta",
                    "altura-de-la-griferia-baja",
                    "altura-de-la-griferia-media"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "capacidad-de-flujo": {
            "id": 88,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "observaciones": {
            "id": 89,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "rango-de-presion-de-agua": {
            "id": 90,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "sistema-antivandalico": {
            "id": 91,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "sistema-de-accionamiento": {
            "id": 92,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "temperatura-de-uso": {
            "id": 93,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "tipo-de-chorro": {
            "id": 94,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "cascada",
                    "espumoso",
                    "hidromasaje",
                    "tipo-lluvia"
                ]
            },
            "multivalued": "true",
            "zonified": "false"
        },
        "tipo-de-griferia": {
            "id": 95,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "cuatro-pulgadas",
                    "de-pared",
                    "monocontrol",
                    "ocho-pulgadas",
                    "sencilla"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        }
    },
    "especificaciones-herramientas": {
        "caracteristicas-funcionales": {
            "id": 96,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "true"
        }
    },
    "especificaciones-materiales-limpiadores-pegantes": {
        "adherencia": {
            "id": 97,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "dilucion": {
            "id": 98,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "duracion-de-la-mezcla": {
            "id": 99,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "tiempo-abierto": {
            "id": 100,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "tiempo-para-emboquillar": {
            "id": 101,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        }
    },
    "especificaciones-muebles": {
        "profundidad": {
            "id": 102,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "resistente-humedad": {
            "id": 103,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "tiempo-de-armado-estimado": {
            "id": 104,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "tipo-de-canto": {
            "id": 105,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "flexible",
                    "rigido"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "tipo-de-cierre": {
            "id": 106,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "lento",
                    "push-to-open-suave",
                    "seco",
                    "suave"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "tipo-de-herrajes": {
            "id": 107,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        }
    },
    "especificaciones-muebles-bano": {
        "material-del-lavamanos": {
            "id": 108,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "ceramica",
                    "porcelana",
                    "vidrio"
                ]
            },
            "multivalued": "true",
            "zonified": "false"
        },
        "material-del-meson": {
            "id": 109,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "corona-stone",
                    "porcelana"
                ]
            },
            "multivalued": "true",
            "zonified": "false"
        }
    },
    "especificaciones-muebles-cocina": {
        "caracteristicas-de-la-cubierta": {
            "id": 110,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "material-del-lavaplatos": {
            "id": 111,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "true"
        }
    },
    "especificaciones-muebles-lavadero": {
        "material-del-lavadero": {
            "id": 112,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "true",
            "zonified": "true"
        }
    },
    "especificaciones-pinturas": {
        "cuarteamiento-alto-espesor": {
            "id": 113,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "cuarteamiento-superficial": {
            "id": 114,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "fabricado-por": {
            "id": 115,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "lavabilidad": {
            "id": 116,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "lavabilidad-alta",
                    "lavabilidad-baja",
                    "lavabilidad-media"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "lote-fecha-fabricacion": {
            "id": 117,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "poder-cubriente": {
            "id": 118,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "remocion-manchas-lavabilidad": {
            "id": 119,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "resistencia-abrasion": {
            "id": 120,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "resistencia-agua": {
            "id": 121,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "resistencia-hongos-algas": {
            "id": 122,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "retencion-olor": {
            "id": 123,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "toxicidad": {
            "id": 124,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        }
    },
    "especificaciones-plomeria": {
        "alto-plomeria": {
            "id": 125,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "ancho-plomeria": {
            "id": 126,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "especificaciones": {
            "id": 127,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "largo-plomeria": {
            "id": 128,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        }
    },
    "especificaciones-pozos": {
        "diametro-del-desague": {
            "id": 129,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "dimensiones-del-pozo": {
            "id": 130,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "profundidad-del-pozo": {
            "id": 131,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "sistema-antivandalico": {
            "id": 132,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "tipo-de-desague": {
            "id": 133,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "expuesto",
                    "oculto"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "tipo-de-lavamanos": {
            "id": 134,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        }
    },
    "especificaciones-revestimientos": {
        "aspecto": {
            "id": 135,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "caras-diferenciadas",
                    "caras-unicas",
                    "multitono"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "formato": {
            "id": 136,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "lote-fecha-fabricacion": {
            "id": 137,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "m2-por-caja": {
            "id": 138,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "pais-origen": {
            "id": 139,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "piezas-por-caja": {
            "id": 140,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "resistencia-a-las-manchas": {
            "id": 141,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "clase-1",
                    "clase-2",
                    "clase-3",
                    "clase-4",
                    "clase-5"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "superficie": {
            "id": 142,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "tamaño": {
            "id": 143,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "trafico": {
            "id": 144,
            "nomenclatura": "(code)",
            "attribute_structure": {
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
            "multivalued": "false",
            "zonified": "false"
        },
        "unidad-de-embalaje": {
            "id": 145,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        }
    },
    "especificaciones-sanitarios": {
        "accesibilidad": {
            "id": 146,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "altura-de-la-taza": {
            "id": 147,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "capacidad-de-descarga": {
            "id": 148,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "numeric"
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "espejo-de-agua": {
            "id": 149,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "perfil-de-la-taza": {
            "id": 150,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "alongado",
                    "redondo"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "sistema-antivandalico": {
            "id": 151,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "sistema-de-descarga": {
            "id": 152,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "boton-dual-azul-corona",
                    "boton-tipo-push",
                    "palanca"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "tipo-de-asiento": {
            "id": 153,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "cierre-lento",
                    "cierre-tradicional"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "tipo-de-sifon": {
            "id": 154,
            "nomenclatura": "(code)",
            "attribute_structure": {
                "type": "dropdown",
                "source": [
                    "expuesto",
                    "oculto"
                ]
            },
            "multivalued": "false",
            "zonified": "false"
        },
        "tipo-de-tanque": {
            "id": 155,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        },
        "tipo-de-valvula": {
            "id": 156,
            "nomenclatura": "",
            "attribute_structure": {
                "type": "text"
            },
            "multivalued": "false",
            "zonified": "true"
        }
    }
}


def get_list():

    return list(attributes_structure.keys())[1:]

def get_attributes(clasification):

    return attributes_structure[str(clasification)]

def get_structure(clasification, attribute):

    return attributes_structure[str(clasification)][str(attribute)]
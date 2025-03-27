interface Module {
  id: number
  title: string
  description: string
}

interface CourseData {
  id: string
  title: string
  modules: Module[]
}

export const coursesData: CourseData[] = [
  {
    id: "html",
    title: "Fundamentos de HTML",
    modules: [
      { id: 1, title: "Introduction al HTML", description: "Aprende conceptos básicos, la sintaxis, estructura" },
      { id: 2, title: "Primeros Elementos", description: "Exploremos elementos de texto, concepto inline y block, listas, propiedades y atributos" },
      { id: 3, title: "Enlaces y Multimedia",   description: "Rutas, Enlaces, Imagenes, Videos, Audios, Iframe",
      },
      { id: 4, title: "Semántica y Agrupación", description: "Arquitectura Web, Divisores, fieldset, etiquetas de estructurado" },
      { id: 5, title: "Formularios", description: "Conceptos, inputs y labels, tipo de inputs, listas desplegables, textarea, tablas" },
      { id: 6, title: "Actualizaciones", description: "DataList, propiedad popovertarget, Dialog" },
      { id: 7, title: "Elemento Head", description: "Contenido del Head, title, meta, link, style, script" },
    ],
  },
  {
    id: "css",
    title: "Dominio de CSS",
    modules: [
      { id: 1, title: "CSS Básico", description: "Introduccion a CSS, estilos en linea y externo, reglas, propiedades, valores, selectores, unidades de medida" },
      { id: 2, title: "Propiedades Básicas", description: "color y fondo, textos, fuentes, listas, modelo de caja, tamaño de elementos, box-sizing" },
      { id: 3, title: "Diseño y Maquetación", description: "Text shadow, box shadow, display, float, position, visibility y z-index" },
      { id: 4, title: "Optimización y buenas prácticas", description: "Normalize, especificidad, metodología BEM, optimizacion y rendimiento" },
      { id: 5, title: "Propiedades Avanzadas", description: "Pseudo clases, Pseudo elementos, cursores, gradiantes, overflow, propiedades de imagenes, viariables" },
      { id: 6, title: "Transiciones y Animaciones", description: "Concepto de transiciones, tranciciones, funciones de transform, animaciones" },
      { id: 7, title: "Flex Box", description: "Flex Box, Directon, Order, Alineación, Distribuición, Wrap, Grow, Shrink, Basis" },
      { id: 8, title: "Flex Grid", description: "Flex Grid, columnas y filas, gap, asignar área y span, repeat, grid automático, grid dinámico" },
      { id: 9, title: "Media Querys", description: "Media Query, Medias Query mas utilizados, Estandares" },
      
    ],
  },
  {
    id: "js",
    title: "Fundamentos de JavaScript",
    modules: [
      { id: 1, title: "Fundamentos de Javascript", description: "Conceptos básicos, herramientas, configuraciones, entrada y salida de datos" },
      { id: 2, title: "Variables y Operadores", description: "Tipo de variables, uso de variables, operadores, template string, tipo de notación" },
      { id: 3, title: "Condicionales", description: "Condicionales, diagrama de flujo, if, if anidados, if else, uso de && y ||, condiciones ternarias, switch" },
      { id: 4, title: "Arreglos", description: "Crear Arrays, metodos de un array, arrays asociativas, colección de arrays, spread operator, destructuring" },
      { id: 5, title: "Búcles e Iteraciones", description: "While, Do while, for, forEach, for in, for of" },
      { id: 6, title: "Funciones", description: "Declaración y ejecución, funciones flecha, parámetros, retorno" },
      { id: 7, title: "Programación Orientada a Objetos", description: "Objetos, clases, constructores, instancias, métodos, herencia, métodos estaticos, get y set" },
      { id: 8, title: "Modularización", description: "Export, Export Default, import, agrupación de módulos" },
      { id: 9, title: "Javascript en Web", description: "DOM, Nodos y elementos, tipo de nodos, jerarquia de nodos, navegacion entre nodos, propiedades, metodos y eventos" },
      { id: 10, title: "Selección de elementos", description: "getElementById, getElementByClassName, getElementByTagName, querySelector, querySelectorAll" },
      { id: 11, title: "Manipulación del DOM", description: "Creación de elementos, modificar contenido, agrega nodos, agregar texto, modificar atributos, modificar clases, modificar estilos" },
      { id: 12, title: "Eventos", description: "EventListenner, eventos comunes" },
      { id: 13, title: "Objeto window", description: "Propiedades de window, window.onload, método open, método scrollBy, método addeventListenner" },
      { id: 14, title: "Buenas Practicas", description: "Uso de clases y selectores claros, minimizar uso de estilos en javascript, principios S.O.L.I.D., eventos delegados, carga y rendimiento, compatibilidad, documentación" },
      { id: 15, title: "Callback, Promesas, Asincronia", description: "Callbacks, promesas, manejo de errores, them y catch, async y await" },
      { id: 16, title: "Fetch, Json, y RESTFUL API", description: "Formato json, Formato base64, persistencia de datos, fetch, method, header y body, consumo de APIs" },
    ],
  },
]
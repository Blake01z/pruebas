// export const myMutations = (state) => {
// }

/* Fucion para almacenar el token en una variable global y en el localStorage */
export const setToken = (state,token) => {
    state.token = token
    localStorage.setItem('tokenVentaOnline',token)
}

/* Agregamos los banners de la api a la variable del state principal */
export const setBanners = (state,banners) => {
    state.banners = [...banners]
}

/* Agregamos el usaurio de la api para la variable interna de state */
export const setUser = (state,user) => {
    state.user = user
    state.isLoading = false
}

/* Agregar los productos del colaborar al catalogo */
export const setProductosCatalogo = (state,{data}) => {
    state.productosCatalogo = [...data]
}

/* Agregamos el valor a la variable contador al state principal */
export const setContadorAndProductos = (state) => {
    state.contador = 0
    state.productos = []
}

/* Cambiamos la variable para el setView y abrir el carrito */
export const setIsView = (state,header = '') => {
    if(header==="header"){
        state.isView = !state.isView
    }else{
        state.isView = false
    }
}


/* Cambiarmos la variable setView a falso cada vez que llamamos la funcion */
export const setViewFalse = (state) => {
    state.isView = false
}

/* Agregamos el id del usaurio a la variable del state principal y 
    por default le seteamos el id de localStorage en caso de tener algo
*/
export const setIdUser = (state, id = localStorage.getItem('id')) => {
    state.idUser = id
}

/* Agregamos los productos a la variable del state principal y al localstorage */
export const setProducto = (state,producto) => {
    if(state.productos.some(p => p.id_producto === producto.id_producto)){
        return state.productos
    }else{
        state.productos = [...state.productos,producto]
        localStorage.setItem('productos',JSON.stringify(state.productos));
    }
    state.contador = state.productos.length
}

/* Eliminanos un producto dentro de un arreglo de la variable principal del state principal y
    lo sacamos tambien de localstorage
*/
export const setOutProducto = (state,id) => {
    state.productos = state.productos.filter(producto => producto.id_producto !== id)
    state.contador = state.productos.length
    localStorage.setItem('productos',JSON.stringify(state.productos));
}

/* funcion para filtrar los productos sugeridos con base a los productos del usuario
    y los que ya estan agregados, si no hay los regresara todos
*/
export const productosSuger = (state) => {

    if(state.productos.length <= 0){
        state.productosSug = [...state.productosCatalogo]
    }else{


    // convertimos los arrays de objetos a arrays de cadenas
    let aux1 = state.productosCatalogo.map(function(el) { return JSON.stringify(el); });
    let aux2 = state.productos.map(function(el) { return JSON.stringify(el); });

    // añadimos todas las cadenas del primer array que no estén en el segundo
    let data3 = aux1.filter(function(el) {
    if (aux2.indexOf(el) < 0) return el;
    });

    // añadimos todas las cadenas del segundo array que no estén en el primero
    data3 = data3.concat( aux2.filter(function(el) {
    if (aux1.indexOf(el) < 0) return el;
    }));

    // convertimos las cadenas de nuevo a objetos
    data3 = data3.map(function (el) { return JSON.parse(el); });

    state.productosSug = [...data3]
    // mostramos el resultado
    // console.log(data3);
    }
}

/* Limpiamos el localstorage el arreglo de las funciones y el contador */
export const inciarCarritoProductos = (state) => {
    state.productos = JSON.parse(localStorage.getItem('productos')) || []
    state.contador = state.productos.length
}

/* Seteamos los la respuesta de la api que nos retornara una vez que le mandemos el nuevo registro */
export const setFolios = (state,data) =>{
    state.folios = {...data}
    console.log(state.folios)
    localStorage.removeItem('productos')
    state.productos = []
    state.contador = 0
    state.productosSug = []
}

/* Datos recibidos de la encuesta */
export const setDataSurvey = (state,data) => {
    state.surveyResponse = data
}
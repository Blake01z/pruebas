// export const myActions = async ({commit}) => {
// }

import clienteAxios, {apiReferidosAxios} from "@/config/axios"

/* Obtenemos El token desde la API */
export const loadToken = async  ({commit}) => {
    const user = {
    username:"desarrolloti@autocom.mx",
    password:"Autocom#2022"
    }

    try {
        const {data} = await apiReferidosAxios.post('/Token/login',user)
        commit('setToken',data.token)
    } catch (error) {
        console.log(error)
    }
}

/* Cargar los Banners desde la API */
export const loadBanners = async  ({commit}) => {
    try {
        const {data} = await clienteAxios.get('/banners')
        commit('setBanners',data)
    } catch (error) {
        console.log(error)
    }
}

/* Cargar el usuario desde la API */
export const loadUser = async ({commit},id = localStorage.getItem('id')) => {

    try {
        const {data} = await clienteAxios(`/users/${id}`)
        commit('setUser',data)
    }catch(error){
        console.log(error)
    }
}

// export const loadUserr = async ({commit},id_user = localStorage.getItem('id')) => {
//     const token = localStorage.getItem('tokenVentaOnline')

//     try {
//         const {data} = await apiReferidosAxios.post('/PerfilColaborador',id_user,{
//             headers:{
//                 Authorization: `Bearer ${token}`,
//                 'Content-Type': 'application/json'
//             }
//         })
//         commit('asas',data)
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }


/* Funcion para obetener el catalogo de productos personalizados por usuario */
export const catalogoProductosUser = async ({commit},id = localStorage.getItem('id')) => {
    const token = localStorage.getItem('tokenVentaOnline')
    try {
        const {data} = await apiReferidosAxios.get(`/CatalogoProductosUser/?id_user=${id}`,{
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        commit('setProductosCatalogo',data)
    }catch(error){
        console.log(error)
    }
}

/* Funcion para registrar al usuario */
export const enviarRegistro = async ({commit},nuevoRegistro) => {
    const token = localStorage.getItem('tokenVentaOnline')

    try {
        const {data} = await apiReferidosAxios.post('/RegistroReferidoAPI',nuevoRegistro,{
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        commit('setFolios',data)
    } catch (error) {
        console.log(error.response)
    }
}

/* Enviar el registro del la encueta de satisfacion a la API */
export const enviarRegistroEncuesta = async ({commit},registroEncuesta) => {
    try {
        await clienteAxios.post('/encuesta',registroEncuesta)
        commit('')
    } catch (error) {
        console.log(error)
    }
}

/* Enviar la encuesta se satisfacion para evaluar al colaborador */
export const enviarSurvey = async({commit},survey) => {
    const token = localStorage.getItem('tokenVentaOnline')
    try {
        const {data} = await apiReferidosAxios.post('/EvaluacionColaborador',survey,{
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
    commit('setDataSurvey',data)
    } catch (error) {
        console.log(error)
    }
}
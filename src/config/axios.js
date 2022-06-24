import axios from "axios";

// Api para la base de datos de prueba
const clienteAxios = axios.create({
    baseURL:'https://my-json-server.typicode.com/Blake01z/pruebas'
});

// Api para la conexcion a la base de datos real
export const apiReferidosAxios = axios.create({
    baseURL: 'https://pruebas-referidos.autocom.mx/api'
})

export default clienteAxios;



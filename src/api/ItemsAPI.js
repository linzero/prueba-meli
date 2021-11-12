import axios from "axios";
import { enviroment } from "../enviroment/enviroment";

export const getItemDetailGET = async (id) => {
    return axios.get(`${ enviroment.api_base_url }/items/${id}`)
}

export const getItemsGET = async (q) => {
    return axios.get(`${ enviroment.api_base_url }/items?q=${q}`)
}
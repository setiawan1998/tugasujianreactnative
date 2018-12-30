import axios from 'axios'

export function ALL_PRODUCTS(){

    return {
        type: "ALL_PRODUCTS",
        payload: axios.get("http://192.168.43.58:3333/api/v1/products")
    }
}

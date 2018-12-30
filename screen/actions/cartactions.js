import axios from 'axios'

export function ALL_ORDERS(){

    return {
        type: "ALL_ORDERS",
        payload: axios.get("http://192.168.43.58:3333/api/v1/orders")
    }
}
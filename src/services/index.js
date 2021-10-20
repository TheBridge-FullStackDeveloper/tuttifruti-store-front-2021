import axios from 'axios'

import { getFeatured } from './products'

const client = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
      },
})
console.log("entra aqi")
export default {
    getFeatured: getFeatured(client)
}
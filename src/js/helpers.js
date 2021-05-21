
import { async } from "regenerator-runtime";
import { TIMEOUT_SEC } from './config.js'

const timeout = s => {
    return new Promise((_, reject) => {
        setTimeout(() => { reject(new Error(`Request took too long! Timeout after ${s} seconds`)) }, s * 1000)
    })
}

export const getJSON = async function (url) {
    try {
        const fetchPro = fetch(url, {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        const data = await res.json();
     //   if (!res.ok) throw new Error('Request failed!')
        return data.data;

    } catch (err) {
        throw err;
    }
}

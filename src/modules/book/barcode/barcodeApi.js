/**
 * Created by phanmduong on 4/6/17.
 */
import axios from 'axios';
import * as env from '../../../constants/env';


export function createBarcode(barcode) {
    let url = env.MANAGE_API_URL + "/book/barcode";
    let token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    return axios.post(url, barcode);
}


export function loadBarcodes(page = 1) {
    let url = env.MANAGE_API_URL + "/book/barcodes?page=" + page;
    let token = localStorage.getItem('token');

    if (token) {
        url += "&token=" + token;
    }
    return axios.get(url);
}
import axios from 'axios';
import * as env from '../../constants/env';

export function loadCustomersApi(limit , page , query ,status) {
    let url = env.MANAGE_API_URL + "/order/all-customers?";
    let token = localStorage.getItem('token');
    if (limit){
        url += "&limit=" + limit;
    }
    if (page) {
        url += "&page=" + page;
    }
    if (query) {
        url += "&search=" + query;
    }
    if (status){
        url += "&status=" + status;
    }
    if (token) {
        url += "&token=" + token;
    }
    return axios.get(url);
}
export function loadTotalAndDebtMoneyApi() {
    let url = env.MANAGE_API_URL + "/order/total-and-debt-money?";
    let token = localStorage.getItem('token');
    if (token) {
        url += "token=" + token;
    }
    return axios.get(url);
}
export function addCustomerApi(customer) {
    let url = env.MANAGE_API_URL + "/order/add-customer?";
    let token = localStorage.getItem('token');
    if (token) {
        url += "token=" + token;
    }
    return axios.post(url,{
        'name' :  customer.name,
        'gender' : customer.gender,
        'address' : customer.address,
        'email' : customer.email,
        'phone' : customer.phone,
        'dob' : customer.dob,
    });
}

export function deleteCustomerApi(id) {
    let token = localStorage.getItem("token");
    let url = env.MANAGE_API_URL + '/order/delete-customer?';
    if (token){
        url += 'token=' + token;
    }
    return axios.delete(url, {
        id : id,
    });
}

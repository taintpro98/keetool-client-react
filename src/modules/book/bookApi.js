/**
 * Created by phanmduong on 4/6/17.
 */
import axios from 'axios';
import * as env from '../../constants/env';


export function loadTaskListTemplates(page = 1, query = null) {
    let url = env.MANAGE_API_URL + "/book/task-list-templates?page=" + page;
    let token = localStorage.getItem('token');
    if (query) {
        url += "&q=" + query;
    }
    if (token) {
        url += "&token=" + token;
    }
    return axios.get(url);
}

export function storeTaskListTemplates(taskList) {
    let url = env.MANAGE_API_URL + "/book/store-task-list-templates";
    let token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    return axios.post(url, taskList);
}


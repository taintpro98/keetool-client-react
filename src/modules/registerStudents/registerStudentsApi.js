import axios from 'axios';
import * as env from '../../constants/env';


export function getRegisterStudent(page = 1, genId, search = '', salerId = '', campaignId = '', classId = '', paid_status='', class_status='') {
    let token = localStorage.getItem('token');
    let url = env.API_URL + "/register-list?"+
        "page=" + page +
        "&gen_id=" + genId +
        "&search=" + search +
        "&saler_id=" + salerId +
        '&campaign_id=' + campaignId +
        "&class_id=" + classId +
        "&status=" + paid_status +
        "&type=" + class_status +
        "&token=" + token;
    return axios.get(url);
}

export function loadGens() {
    let token = localStorage.getItem('token');
    let url = env.API_URL + "/gens?token=" + token;
    return axios.get(url);
}

export  function loadClassFilter(genid){
    //http://manageapi.keetool.xyz/class/all?token=
    //http://api.keetool.xyz/apiv2/gens/22/classes?token=
    let token = localStorage.getItem('token');
    let url = env.API_URL + "/apiv2/gens/"+ genid +"/classes?token=" + token;
    return axios.get(url);
}

export  function loadSalerFilter(){
    //http://api.keetool.xyz/all-saler?
    let token = localStorage.getItem('token');
    let url = env.API_URL + "/all-saler?token=" + token;
    return axios.get(url);
}

export  function loadCampaignFilter(){
    //http://manageapi.keetool.xyz/marketing-campaign/all?token=
    let token = localStorage.getItem('token');
    let url = env.MANAGE_API_URL + "/marketing-campaign/all?token=" + token;
    return axios.get(url);
}

export function historyCallStudent(studentId, registerId) {
    let token = localStorage.getItem('token');
    let url = `${env.MANAGE_API_URL}/history-call-student?id=${studentId}&register_id=${registerId}&token=${token}`;
    return axios.get(url);
}

export function changeCallStatusStudent(callStatus, studentId, telecallId, genId = '', note = '', callerId = '') {
    let url = env.MANAGE_API_URL + "/change-call-status-student";
    let token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    return axios.post(url, {
            student_id: studentId,
            telecall_id: telecallId,
            gen_id: genId,
            caller_id: callerId,
            note: note,
            status: callStatus
        }
    );
}

export function confirmChangeClass(registerId, classId) {
    let url = env.MANAGE_API_URL + "/register-student/confirm-change-class";
    let token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    return axios.post(url, {
            register_id: registerId,
            class_id: classId
        }
    );
}

export function deleteRegisterStudent(registerId) {
    let url = env.MANAGE_API_URL + "/delete-register-student";
    let token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    return axios.post(url, {
            register_id: registerId
        }
    );
}

export function loadClasses(registerId) {
    let token = localStorage.getItem('token');
    let url = env.MANAGE_API_URL + `/register-student/${registerId}/classes?token=` + token;
    return axios.get(url);
}

export function loadRegisterByStudent(studentId) {
    let url = env.MANAGE_API_URL + `/student/${studentId}/registers`;
    let token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }

    return axios.get(url);
}
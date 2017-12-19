import axios from 'axios';

//let base = 'http://1e659h7706.iok.la:26528';
let base = 'http://localhost:7891';
export const requestLogin = params => { return axios.post(`${base}/user/login`, params).then(res => res.data); };

export const getRoleList = params => { return axios.post(`${base}/user/listrole`, params).then(res => res.data); };

export const getRoleMenu = params => { return axios.post(`${base}/user/listrolemenus`, params).then(res => res.data); };

export const saveRoleMenu = params => { return axios.post(`${base}/user/saverolemenus`, params).then(res => res.data); };

export const getMenuTree = params => { return axios.post(`${base}/system/listtreemenu`, params).then(res => res.data); };

export const getMenuList = params => { return axios.post(`${base}/system/listmenu`, params).then(res => res.data); };

export const saveMenus = params => { return axios.post(`${base}/system/savemenus`, params).then(res => res.data); };
import axios from 'axios';

 // let base = 'http://1e659h7706.iok.la';
let base = 'http://localhost:7891';
//登录相关
export const requestLogin = params => { return axios.post(`${base}/user/login`, params).then(res => res.data); };
//角色相关
export const getRoleList = params => { return axios.post(`${base}/user/listrole`, params).then(res => res.data); };
export const getRoleMenu = params => { return axios.post(`${base}/user/listrolemenus`, params).then(res => res.data); };
export const saveRoleMenu = params => { return axios.post(`${base}/user/saverolemenus`, params).then(res => res.data); };
export const getMenuTree = params => { return axios.post(`${base}/system/listtreemenu`, params).then(res => res.data); };
export const saveMenus = params => { return axios.post(`${base}/system/savemenus`, params).then(res => res.data); };
//图片相关
export const getIMGSLList = params => { return axios.post(`${base}/upload/listSL`, params).then(res => res.data); };
export const getIMGList = params => { return axios.post(`${base}/upload/list`, params).then(res => res.data); };
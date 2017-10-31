import axios from 'axios';
import qs from 'qs';

let base = '';
let headers = {
  "Content-Type":"multipart/form-data"
};

var instance = axios.create({
    headers: headers
});

// export const getBugInfoListPage = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getBugInfoListPage = params => { return axios.post(`/api/ProjectPlugin/bug/getBugInfoListByParam.do`, qs.stringify(params)).then(res => res.data); };

export const saveOrUpdateBugInfo = params => { return axios.post(`/api/ProjectPlugin/bug/saveOrUpdateBugInfo.do`, qs.stringify(params)).then(res => res.data); };

export const deleteBugInfoById = params => { return axios.post(`/api/ProjectPlugin/bug/deleteBugInfo.do`, qs.stringify(params)).then(res => res.data); };

export const exportBugInfoToExcel = params => { return axios.post(`/api/ProjectPlugin/bug/exportBugInfoToExcel.do`, qs.stringify(params)).then(res => res.data); };

export const downloadBugInfoFile = params => { return instance.get(`/api/ProjectPlugin/file/bug/downloadFile.do`, { params: params }); };

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


export const login = params => { return axios.post(`/api/MLZone/user/login.do`, qs.stringify(params)).then(res => res.data); };

export const getAuth = params => { return axios.get(`/api/MLZone/user/getAuth.do`, { params: params }); };

export const getBugInfoListPage = params => { return axios.post(`/api/ProjectPlugin/bug/getBugInfoListByParam.do`, qs.stringify(params)).then(res => res.data); };

export const saveOrUpdateBugInfo = params => { return axios.post(`/api/ProjectPlugin/bug/saveOrUpdateBugInfo.do`, qs.stringify(params)).then(res => res.data); };

export const deleteBugInfoById = params => { return axios.post(`/api/ProjectPlugin/bug/deleteBugInfo.do`, qs.stringify(params)).then(res => res.data); };

export const exportBugInfoToExcel = params => { return axios.post(`/api/ProjectPlugin/bug/exportBugInfoToExcel.do`, qs.stringify(params)).then(res => res.data); };

export const downloadBugInfoFile = params => { return instance.get(`/api/ProjectPlugin/file/bug/downloadFile.do`, { params: params }); };

export const getArticleListByPage = params => { return axios.post(`/api/MLZone/articleInfo/getArticelInfoList.do`, qs.stringify(params)).then(res => res.data); };

export const saveOrUpdateComment = params => { return axios.post(`/api/MLZone/comment/saveOrUpdateComment.do`, qs.stringify(params)).then(res => res.data); };

export const getCommentListByParam = params => { return axios.post(`/api/MLZone/comment/getCommentListByParam.do`, qs.stringify(params)).then(res => res.data); };

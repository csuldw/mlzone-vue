import axios from 'axios';
import qs from 'qs';
import cookieUtils from "../common/js/cookieUtils.js"

let base = '';
let headers = {
  "Content-Type":"multipart/form-data"
};

let headers2 = {
//     "Content-Type":"multipart/form-data"
  'content-type': 'application/json'
};

var instance = axios.create({
    headers: headers
});

var instance2 = axios.create({
  headers: headers2
});

function setHeader() {
  let auth_token = cookieUtils.getTokenId();
  let userId = cookieUtils.getUserId();
  if(auth_token != null)
  {
    axios.defaults.headers.common['O-Auth-Token'] = auth_token;
    axios.defaults.headers.common['O-Auth-UserId'] = userId;
  }
}

export const login = params => { return axios.post(`/MLZone/user/login.do`, qs.stringify(params)).then(res => res.data); };

export const getAuth = params => { setHeader(); return axios.get(`/MLZone/user/getAuth.do`, { params: params }); };

export const getArticleListByPage = params => { return axios.post(`/MLZone/articleInfo/getArticelInfoList.do`, qs.stringify(params)).then(res => res.data); };

export const getRecArticelInfoList = params => { return axios.post(`/MLZone/articleInfo/getRecArticelInfoList.do`, qs.stringify(params)).then(res => res.data); };

export const getArticleStatInfoByParam = params => { return axios.post(`/MLZone/article/getArticleCountStatByParam.do`, qs.stringify(params)).then(res => res.data); };

export const getArticelDetailInfoById = params => { return axios.post(`/MLZone/articleInfo/getArticelInfoById.do`, qs.stringify(params)).then(res => res.data); };

export const saveOrUpdateComment = params => { return axios.post(`/MLZone/comment/saveOrUpdateComment.do`, qs.stringify(params)).then(res => res.data); };

export const getCommentListByParam = params => { return axios.post(`/MLZone/comment/getCommentListByParam.do`, qs.stringify(params)).then(res => res.data); };

export const loadContentByPath = params => { return axios.post(`/MLZone/file/loadContentByPath.do`, qs.stringify(params)).then(res => res.data); };

export const getWebSourceListByParam = params => { return axios.post(`/MLZone/webSource/getWebSourceListByParam.do`, qs.stringify(params)).then(res => res.data); };

export const checkEmailExistByUsername = params => { return axios.post(`/MLZone/user/checkEmailExistByUsername.do`, qs.stringify(params)).then(res => res.data); };

export const checkUserExistByUsername = params => { return axios.post(`/MLZone/user/checkUserExistByUsername.do`, qs.stringify(params)).then(res => res.data); };

export const saveOrUpdateUser = params => { return instance2.post(`/MLZone/user/saveOrUpdateUser.do`, JSON.stringify(params)).then(res => res.data); };


// export const getBugInfoListPage = params => { return axios.post(`${base}/login`, params).then(res => res.data); };
// export const getBugInfoListPage = params => { return axios.post(`/api/ProjectPlugin/bug/getBugInfoListByParam.do`, qs.stringify(params)).then(res => res.data); };
// export const saveOrUpdateBugInfo = params => {  setHeader();  return axios.post(`/api/ProjectPlugin/bug/saveOrUpdateBugInfo.do`, qs.stringify(params)).then(res => res.data); };
// export const deleteBugInfoById = params => { return axios.post(`/api/ProjectPlugin/bug/deleteBugInfo.do`, qs.stringify(params)).then(res => res.data); };
// export const exportBugInfoToExcel = params => { return axios.post(`/api/ProjectPlugin/bug/exportBugInfoToExcel.do`, qs.stringify(params)).then(res => res.data); };
// export const downloadBugInfoFile = params => { return instance.get(`/api/ProjectPlugin/file/bug/downloadFile.do`, { params: params }); };



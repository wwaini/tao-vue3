import fetch from "./fetch";

function request(url, method, data) {
  switch (method) {
    case "get":
      return fetch({
        method: "get",
        url: url,
        params: data,
      });
    case "post":
      return fetch({
        method: "post",
        url: url,
        data,
      });
    case "download":
      return fetch({
        method: "get",
        url: url,
        params: data,
        // responseType: "blob",
      });
    case 'upload':
      return fetch({
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        url: url,
        data
      })
    default:
      return fetch;
  }
}
export default request;
// 注:download、upload 并非请求类型，只是为了方便下载、上传文件添加的，修改使用

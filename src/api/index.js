// 封装接口

import request from "@util/request";

// 登录

export function login(data) {

  return request("/auth/login", "post", data);

}
// xxxxxxxxxx pnpm i pinia - S 
// 封装接口import request from "@util/request";
// 登录export function login(data) { return request("/auth/login", "post", data);}

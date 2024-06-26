import router from "@/router/index"; // 引入路由，token过期时返回登录页

// import Cookies from "js-cookie"; // 引入Cookies插件，用来存储token ,未下载 需要下载 npm install js-cookie

import axios from "axios";

axios.defaults.headers["Content-Type"] = "application/json;charset=UTF-8"; //设置请求头信息

const fetch = axios.create({

  baseURL: import.meta.env.VITE_BASE_API,

  timeout: 60 * 1000, // 设置超时时间

});

// 请求拦截器-效验token

fetch.interceptors.request.use(

  (config) => {

    console.log('config', config);

    if (config.url == '/auth/login') {

      console.log('login');

      return config;

    } else if (config.url == '/auth/getMachineCode') {

      console.log('getMachineCode');

      return config;

    } else {

      // const token = Cookies.get("token") || ""; // 设置token，从localStorage里读出来

      const token = window.localStorage.getItem('token')

      // console.log('token',token);

      if (!token) {

        router.push("/login");

        ElNotification({

          title: 'Token',

          message: 'token失效，请重新登录',

          type: 'info',
        })

      } else {

        config.headers["Authorization"] = token;

        return config;

      }

    }

  },

  (error) => {

    return Promise.reject(error);

  }

);

// 响应拦截器

fetch.interceptors.response.use(

  (res) => {

    success(res)

    return res

  },

  (error) => {

    console.log(error);

    fail(error)

  }

);

function success(res) {

  ElMessage({

    message: res.data.msg,

    type: "success",

  });

}

function fail(error) {

  ElMessage({

    message: error.data.msg,

    type: "fail",

  });

}

export default fetch;

//封装axois框架

import axios from 'axios'


//导出实例
export function request(config){
//创建实例
  const homeRequest = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  });

  homeRequest.interceptors.request.use(config => {
    return config;
  },error => {
    console.log(error)
  });

  //拦截器
  homeRequest.interceptors.response.use(config => {
    return config.data
  },error => {
    console.log(error)
  })



  //3.发送网络请求
  return homeRequest(config);
}

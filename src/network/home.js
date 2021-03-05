//专门请求home的数据
import {request} from "@/network/request";

export function getHomeMuldata(){
  return request({
    url: '/home/multidata'
  })
}
export function getHomeGoods(type,page){
  return request({
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}

//专门请求home的数据
import {request} from "@/network/request";

export function getHomeMuldata(){
  return request({
    url: '/home/multidata'
  })

}

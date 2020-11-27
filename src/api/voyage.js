import request from '@/utils/request'

// 推荐产品
export function getVoyageInfoList(data){
  return request({
    url: '/cruise/ctp/voyage/voyageInfoList',
    method: 'post',
    data: data
  })
}
// 邮轮公司
export function cruiseCompInfolist(data){
  return request({
    url: '/cruise/ctp/cruise/cruiseCompInfolist',
    method: 'post',
    params: data
  })
}
// 邮轮日历
export function getCalenderList(data){
  return request({
    url: '/cruise/ctp/voyage/getCalenderList',
    method: 'get',
    params: data
  })
}
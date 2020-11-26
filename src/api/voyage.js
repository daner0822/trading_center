import request from '@/utils/request'

// 获取路由
export const getVoyageInfoList = (data) => {
  return request({
    url: '/cruise/ctp/voyage/voyageInfoList',
    method: 'post',
    data: data
  })
}
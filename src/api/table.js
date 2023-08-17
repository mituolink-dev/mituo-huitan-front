import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}
export function getGroupData(data) {
  return request({
    url: '/api/list/getGroupData',
    method: 'post',
    data
  })
}

export function getPointData() {
  return request({
    url: '/api/list/getPointData',
    method: 'get'
  })
}

export function downloadFile(data) {
  return request({
    url: '/api/list/getDownloadUrl/' + data,
    method: 'get'
  })
}
// export function downloadGroupData() {
//   return request({
//     url: '/api/list/getPointData',
//     method: 'get'
//   })
// }

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
    url: '/list/getGroupData',
    method: 'post',
    data
  })
}

export function getPointData() {
  return request({
    url: '/list/getPointData',
    method: 'get'
  })
}

export function downloadFile(data) {
  return request({
    url: '/list/getDownloadUrl/' + data,
    method: 'get'
  })
}
export function getAllUserName() {
  return request({
    url: '/list/getAllUserName',
    method: 'get'
  })
}

import musicJssonp from '../common/js/jsonp.js'
import { commonParams, options } from './config.js'
import Axios from 'axios'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  console.log(url)
  return musicJssonp(url, data, options)
}

export function getDiscList () {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return Axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

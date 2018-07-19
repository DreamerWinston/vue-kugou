import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'


export function requestSearchSong(keyword,page,showtype) {
  // const url ='http://iosservice.kugou.com/api/v3/search/song'
  const url ='/api/searchSong'

  const data = Object.assign({},commonParams,{
    keyword:keyword,
    page:page,
    pagesize:30,
    showtype:showtype,
    plat:2,
    version:8940,
    tag:1,
    correct:1,
    privilege:1,
    sver:5,
    highlight:'em',
    tag_aggr:1,
    tagtype:'%E5%85%A8%E9%83%A8',
    api_ver:1,
    area_code:1
  })

  return  axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

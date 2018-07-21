import axios from 'axios'

export function requestSongWithHash(hash){
  const url ='/api/getSong'

  const data ={
    r:'play/getdata',
    hash:hash
  }

  return axios.get(url, {
    params: data
  }).then((res) => {
    
    return Promise.resolve(res.data)
  })
}

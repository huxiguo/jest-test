import axios from 'axios'

export const getPost = (fn) => {
  axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => {
    fn(res.data)
  })
}

export const getPost2 = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts/2')
}

export const getError = () => {
  return axios.get('https://xxxx.kd')
}
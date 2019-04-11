import axios from 'axios';

const KEY = 'fLIfZZeWjAhPawnoL8lIyubp9JeOYPSdvJUU4jYk'
//i don't think i'll use this present in the url
//probably have it in headers as NASA images app

export default axios.create({
  baseURL: 'https://images-api.nasa.gov',
  headers: {
    Authorization: KEY
  }
  // params: {
  //   q: term,
  //   media_type: 'video'
  // }
})

//hoping headers will work correctly

import axios from 'axios';

// const KEY = 'fLIfZZeWjAhPawnoL8lIyubp9JeOYPSdvJUU4jYk'
//i don't think i'll use this present in the url
//probably have it in headers as NASA images app
//this kept returning a 502 error(which is rare on the API's end but it wasn't working)
//i decided to go with the same format as the NASA images app and it worked

export default axios.create({
  baseURL: 'https://images-api.nasa.gov',
  headers: {
    Authorization: 'API-key fLIfZZeWjAhPawnoL8lIyubp9JeOYPSdvJUU4jYk'
  }
  // params: {
  //   q: term,
  //   media_type: 'video'
  // }
})

//hoping headers will work correctly

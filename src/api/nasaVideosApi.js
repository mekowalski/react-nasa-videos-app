import axios from 'axios';

export default axios.create({
  baseURL: 'https://images-api.nasa.gov',
  headers: {
    Authorization: 'API-key fLIfZZeWjAhPawnoL8lIyubp9JeOYPSdvJUU4jYk'
  }
})

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
      Authorization: 'Client-ID 2mVlTfVdl49EuBXMJS0Btok8DibEqqTNgWVIksmcEoQ' 
  }
})
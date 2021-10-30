import axios from 'axios'
const baseUrl = 'http://localhost:5000'

async function fetchItems() {
    const response = await axios.get(`${baseUrl}/shop`);
    const arr = response.data.data;
  
    return arr
  }

  const fetchService = {
    fetchItems
  }

  export {
      fetchService
  }
import axios from 'axios'
const baseUrl = 'http://localhost:5000'

async function fetchItems() {
  const response = await axios.get(`${baseUrl}/shop`);
  const arr = response.data

  return arr
}

async function fetchItem(id) {
  const response = await axios.get(`${baseUrl}/shop/${id}`);
  const arr = response.data

  return arr
}

const fetchService = {
  fetchItems,
  fetchItem
}

export {
    fetchService
}
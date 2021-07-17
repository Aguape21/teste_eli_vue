import axios from 'axios'

export default {
  get: async (endereco) => {
    return await axios.get(process.env.API_BASE_URL+endereco)
  },
}

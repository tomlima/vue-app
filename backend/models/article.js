const axios = require('axios')
require('dotenv').config()

module.exports = {
  getAll: (query, page) => {
    return new Promise((resolve, reject) => {
      console.log(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=20&page=${page}&apiKey=${process.env.API_KEY}`
      )
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${query}&pageSize=20&page=${page}&apiKey=${process.env.API_KEY}`
        )
        .then(result => resolve(result.data))
        .catch(err => reject(err))
    })
  }
}

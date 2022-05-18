
const axios = require('axios')
const { OMDB_API_KEY } = process.env
const { OMDB_API_URL } = process.env

exports.handler = async function (event) {
  const payload = JSON.parse(event.body)
  try {
    const {data} = await axios.get(`${OMDB_API_URL}?apikey=${OMDB_API_KEY}`,
      { params: payload.param })
    
    return{
      statusCode:200,
      body: JSON.stringify(data)
    }

  } catch(e) {
    console.error(e.message)
  }
}
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(cors())



app.get('/api/user', async (req, res) => {
  const {access_token} = req.query;
  const headers = {
    "Authorization" : `token ${access_token}`
  }
  const user = await axios.get("https://api.github.com/user", {
    headers: headers
  })
  console.log(user)
  res.send(user.data)
})

 

app.post('/api/auth', async (req, res) => {

  const headers = {
    'Accept': 'application/json' 
  }

  const { code, client_id, client_secret} = req.query
  if(client_id){
  const resp = await axios.post(`https://github.com/login/oauth/access_token?code=${code}&client_id=${client_id}&client_secret=${client_secret}`,
  {
    headers: headers
  })
  console.log(resp.data)
  res.json(resp.data)
   
}else{
  res.send('falhou')
}
  
});

 

app.listen(3001);
console.log('App listening on port 3001');
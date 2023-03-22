const express = require('express')
const app = express()



const port = 3003

app.get('/userGet3', async(req,res)=>{
    console.log('find user data 3003')
    res.json({msg:"Find user data successfully 3003"})
})

app.post('/userPost', async(req,res)=>{

    const data = {
        name:"Lalji",
        email:"lal@gmail.com"
    }

})

app.listen(port,()=>{
    console.log('server is create on port 3003')
})

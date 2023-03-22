const express = require('express')
const app = express()



const port = 3002

app.get('/userGet2', async(req,res)=>{
    console.log('find user data from 3002')
    res.json({msg:"Find user data successfully 3002"})
})

app.post('/userPost', async(req,res)=>{

    const data = {
        name:"Lalji",
        email:"lal@gmail.com"
    }

})

app.listen(port,()=>{
    console.log('server is create on port 3002')
})

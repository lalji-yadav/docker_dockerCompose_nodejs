const express = require('express')
const app = express()



const port = 3001

app.get('/userGet1', async(req,res)=>{
    console.log('find user data from 3001')
    res.json({msg:"find user data from 3001"})
})

app.post('/userPost', async(req,res)=>{

    const data = {
        name:"Lalji",
        email:"lal@gmail.com"
    }

})

app.listen(port,()=>{
    console.log('server is create on port 3001')
})

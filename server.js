const express=require('express')
const app =express()
const router=require('./router/router')

app.use(express.json())
app.use('/',router)


app.get('/',(req,res)=>{
    console.log('data is geting');
})

app.listen(5005,()=>{
    console.log('listen 5005');
})
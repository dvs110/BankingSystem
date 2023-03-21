const express=require('express')
const app=express();
const cors=require('cors')
const dotenv=require('dotenv')
require('./DB/conn')
dotenv.config({path:'./config.env'})
const PORT=process.env.PORT || 8080

const routes=require('./router/auth')
// middleware
app.use(cors());
app.use(express.json());
app.use('/',routes)



// app.get('/',(req,res)=>{
//     res.send(`Hello myself Ashish`)
// })

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})
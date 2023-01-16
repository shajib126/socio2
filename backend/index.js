const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoute = require('./routes/User')
const cookiParser = require('cookie-parser')
const app = express()


//
dotenv.config()
app.use(cookiParser())
app.use(express.json())

app.use(morgan('tiny'))
app.use(cors())

//
app.use('/api',userRoute)

const port = process.env.PORT || 4000
mongoose.connect(process.env.MONGO_URI).then(()=>console.log(`DB connected ${mongoose.connection.host}`)).catch((err)=>log(err)).finally(()=>{
    app.listen(port,()=>console.log(`server running in ${port}`))
})
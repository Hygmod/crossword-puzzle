const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

app.use(cors())
app.use(express.json())

require('dotenv').config({path: './config/.env'})
const PORT = process.env.PORT || 3001

connectDB()

//app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
 
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}, you better catch it!`)
})    
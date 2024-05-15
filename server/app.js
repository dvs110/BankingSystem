
// https://banking-website-ind.netlify.app/
const express = require('express')
const app = express();
const cors = require('cors')
const dotenv = require('dotenv')
const connection = require('./DB/database')
dotenv.config({ path: './config.env' })
const PORT = process.env.PORT || 8080

const routes = require('./router/auth')
// middleware
app.use(cors());
app.use(express.json());
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)

})
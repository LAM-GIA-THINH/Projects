
const express = require("express")
const app = express()
const morgan = require("morgan")
const {default: helmet} = require("helmet")
const compression = require("compression")
require('dotenv').config()
//init middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
//init db
require('./dbs/init.mongodb')

const {checkOverload} = require('./helpers/check.connect')
// checkOverload()
//init routes
app.get('/',(req,res,next) => {
    const StrCom = "Hello"
    return res.status(200).json({
        message: 'Welcome',
        // metadata: StrCom.repeat(10000)
    })
})
//init handling error

module.exports = app
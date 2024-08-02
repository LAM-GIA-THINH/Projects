'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _SECONDS= 5000
const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Number of connections::${numConnection}`)

}

//check overload
const checkOverload = () => {
    setInterval( () => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        const maxConnection = numCores*3;
        console.log(`Activate connections::${numConnection}`)
        console.log(`Memory usage:: ${memoryUsage/1024/1024} MB`)
        if(numConnection > maxConnection){
            console.log('Connection overloaded')
        }
    }, _SECONDS) //monitors every 5s
}

module.exports = {
    countConnect,
    checkOverload
}
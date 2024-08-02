'use strict'

const mongoose = require('mongoose')
const connectString = `mongodb://localhost:27017/test`
const { countConnect } = require('../helpers/check.connect')


class Database{
    constructor(){
        this.connect()
    }
    connect(type = 'mongodb'){
        if(1 ===1){
            mongoose.set('debug', true)
            mongoose.set('debug', {color : true})
        }
        mongoose.connect(connectString).then( _ => {
            
            console.log(`Connected to mongo`,countConnect())
        })
        .catch( err => console.log(`Connection Error`))
    }
    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database();

        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb
const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const Lga = require('../model/lgaModal')
const Region = require('../model/regionsModal')

dotenv.config({ path: './config.env'});


const DB = process.env.DATABASE

// Database connection
mongoose.connect(DB, {}).then(() => {
    console.log('connected to DB')
})


const lga = JSON.parse(fs.readFileSync(`./data/lga.json`, 'utf-8'))
const region = JSON.parse(fs.readFileSync(`./data/region.json`, 'utf-8'))

//import data into database
const importData = async () => {
    try{
        await Lga.create(lga)
        await Region.create(region)
        console.log('data successfully created')
    } catch (err) {
        console.log(err)
    }
    process.exit()
}

const deleteData = async () => {
    try{
        await Lga.deleteMany()
        console.log('data successfully deleted')
    } catch (err) {
        console.log(err)
    }
    process.exit()
}


if(process.argv[2] === `--import`){
    importData()
} else if (process.argv[2] === `--delete`){
    deleteData()
}

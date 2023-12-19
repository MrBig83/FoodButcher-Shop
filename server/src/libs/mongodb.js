require('dotenv').config()
const mongoose = require ('mongoose')
//console.log(process.env.MONGO_URL)

const connectMongoDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://mjohansson176:TCiQcXrOMVsbn5Qd@cluster0.hjjjed7.mongodb.net/?retryWrites=true&w=majority")
        console.log('connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = { 
    connectMongoDB
};


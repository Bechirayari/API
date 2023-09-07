
const mongoose = require('mongoose')
const connect= async()=>{
    const password= process.env.PASSWORD 
    try{
        await mongoose.connect(`mongodb://bechir240:mongodb+srv://bechir240:${password}@cluster0.gs634vj.mongodb.net/?retryWrites=true&w=majority`)
        console.log('you are connected to ur db')
    }catch(err){
        console.log(err)
    }
}

module.exports = connect

import mongoose from "mongoose"


const DBconnection= async()=>{
    const MONGODB_URI=`mongodb+srv://user:xb9pg3hpq@cluster0.pygiiz5.mongodb.net/?retryWrites=true&w=majority`
    try{
       await mongoose.connect(MONGODB_URI, {useNewUrlParser:true})
        console.log('database connected successfully')

    } catch(error){
        console.log('error while connecting database', error.message)
    }
}
export default DBconnection;
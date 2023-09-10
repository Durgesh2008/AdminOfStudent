import  mongoose from 'mongoose'
import 'dotenv/config'


const connectionParams={ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
 } 
const connectToMongo = async()=>{
    const conn= await mongoose.connect(process.env.MONGODB_URI,connectionParams);
    if(conn){
     console.log('connect successfully')
    }
}

export default connectToMongo;
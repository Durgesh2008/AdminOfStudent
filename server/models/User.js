import mongoose from 'mongoose';
const { Schema } = mongoose;

const Usershema = new Schema({
  
    username:{
         type: String,
        required: true,
       
    },
     email:{
        type: String,
        required: true, 
        unique: true
    },
    phone:{
        type: String,
        required: true, 
        unique: true
    },
    Joining:{
        type: String,
        required: true, 
    },
  ending:{
        type: String,
        required: true, 
    },
    course:{
        type: String,
        required: true, 
    },
    collegeName:{
        type: String,
        required: true, 
    }
  });

 const Alluser = mongoose.model('Alluser', Usershema);
 export default Alluser
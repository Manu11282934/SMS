const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({

    ID:Number,
    Name:String,
    FatherName:String,
    MotherName:String,
    Email:String,
   
   PhoneNumber:String,
   Contactpreference:String,
   Dob:String,
   Medium:String,
   IsActive:Boolean,
   PhotoPath:String,
   IsDeleted:Boolean,
   
      
   
   
   
   });


module.exports =mongoose.model('Student',StudentSchema)
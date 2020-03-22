
const StudentModel=require('../Models/Student');
const bodyParser=require('body-parser');
var jsonParser = bodyParser.json();


exports.GetAllStudents=async(req,res,next)=>
{
    try{
const Students = await StudentModel.find();
console.log(Students);
res.status(200).json({success:true,data:Students});
    }
    catch(err)
    {
        res.status(401).json({success:false,msg:err.message});
    }
   
}

exports.GetStudent=async(req,res,next)=>
{
    console.log(req.params.id);
    const StudentDetails =await StudentModel.findById(req.params.id);
  
    res.status(200).json({success:true,data:StudentDetails});
}
exports.CreateStudent= (req,res,next)=>
{
    try{
   
// const emp ={

//     "id": "2",
//     "Name": "Manoj1"
// }

  const Student=    StudentModel.create(req.body);
  console.log(Student);
//const Employee=req.body.Name;
    res.status(201).json({success:true,data:Student});
    }
    catch(err)
    {
        res.status(401).json({success:false,msg:err.message});
    }
  //  res.status(200).json({success:true,msg:`create  Record of Employee`});
}
exports.UpdateStudent=async(req,res,next)=>
{
   
try{
   
 console.log(req.body);
   
 const Student= await   StudentModel.findByIdAndUpdate(req.body._id,req.body,{new:true,});
    res.status(201).json({success:true,data:Student});
    }
    catch(err)
    {
        res.status(401).json({success:false,msg:err.message});
    } 
   // res.status(200).json({success:true,msg:'update  Record of Employee'});
//res.status(200).json({success:true,msg:req.body});
}

exports.DeleteStudent=async(req,res,next)=>
{
    try{
   
      
       
     const Student= await   StudentModel.findByIdAndDelete(req.params.id);
        res.status(201).json({success:true,data:Student});
        }
        catch(err)
        {
            res.status(401).json({success:false,msg:err.message});
        }
   // res.status(200).json({success:true,msg:`Delete  Record of Employee`});
}
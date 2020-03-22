const express = require('express');
const router = express.Router();


const {CreateStudent,
    GetAllStudents,
    GetStudent,
    UpdateStudent,
    DeleteStudent
} =require('../Controller/Student');

router
.route('/').
get(GetAllStudents)

.post(CreateStudent)
.put(UpdateStudent)




router
.route('/:id')
.get(GetStudent)

.delete(DeleteStudent);
// router.get('/',(req,res)=>{
    
    
    
//     });

// router.get('/:id',(req,res)=>{
  
//    // res.send('Responce from NodeJs',req.params.id);
    
//     });


//     router.post('/',(req,res)=>{
//         res.status(200).json({success:true,msg:`Post Record`});
     
        
//         });

//         router.put('/:id',(req,res)=>{
//             res.status(200).json({success:true,msg:`Update  Record of ${req.params.id}`});
//            // res.send('Responce from NodeJs',req.params.id);
            
//             });
//             router.delete('/:id',(req,res)=>{
//                 res.status(200).json({success:true,msg:`Delete  Record of ${req.params.id}`});
//                // res.send('Responce from NodeJs',req.params.id);
                
//                 }); 


        module.exports=router;
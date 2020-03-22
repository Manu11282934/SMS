const express = require('express');
const dotenv = require('dotenv');
const Student = require('./routes/Student');
const ConnectDb=require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors')

dotenv.config({path:'./config/config.env'});


ConnectDb();

const app =express();
app.use(cors());
 app.use(express.json());
app.use('/api/Student/',Student);
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

const PORT =process.env.PORT || 5000;
const server =app.listen
(
    PORT,console.log(`Server runnig in ${process.env.NODE_ENV} mode  on port ${PORT}`)
    );

    process.on('unhandledRejection',(err,promise)=>{
console.log(`Error ${err.message}`);
server.close(()=>process.exit(1));
    })
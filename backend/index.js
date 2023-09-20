require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { connectToDb,calculate,history,clearHistory} = require('./data/backend');
const app = express();


//port
const PORT = process.env.PORT || 6001;
app.use(express.json());
app.use(cors());

connectToDb((err) => {
    if(!err){
        app.listen(PORT,()=>{
            console.log('Connected to database and server started at port:',PORT);
        })
    }
    else{
        console.error(err);
    }
});

app.post('/post', async (req,res)=>{
    try{
        const data  = await calculate(req);
        res.json(data);
    }
    catch(err){
        throw err;
    }
});

app.post('/history',async (req,res) =>{
    try{
        const data = await history();
        res.json(data);
    }
    catch(err){
        throw err;
    }
})

app.post('/clear',async (req,res) =>{
    try{
        const data = await clearHistory();
        res.send(data);
    }
    catch(err){
        throw err;
    }
})
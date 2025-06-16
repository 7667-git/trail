// var addition = (a,b) => a + b

// module.exports = {addition};


const fs = require('fs')


fs.readFile('./Files/content1.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data)
});
    process.on('uncaughtException',err=>{
        console.log(err,"kk")
        process.exit()
    })
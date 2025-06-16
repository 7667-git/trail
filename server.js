const http = require('http')
const fs = require('fs')
const PORT = 3000

const createServer = http.createServer((req,res)=>{
    fs.readFile('index.html',(error,data)=>{
        if(error){
            res.writeHead(404)
            res.write('Page not found')
        }else{
        res.write(data)}
        res.end()
    })
    
})

createServer.listen(PORT,(error)=>{
    if(error) throw error
    console.log("Server is running on "+ PORT)
})
const http = require('http')
const PORT =4000;

const server =http.createServer((req, res)=>{
    res.end('hello world')
})

server.listen(PORT,()=>{
 console.log(`server listening on port ${PORT}`)
})
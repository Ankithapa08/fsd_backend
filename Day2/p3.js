const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead('Content-Type','text/plain');
    res.end('<h1>Hello world</h1>');

})
server.listen(9000,()=>{
    console.log('server running on port 9000');
});
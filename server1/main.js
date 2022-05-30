const http = require('http');
const htppscode=require('http-status-code');
const server = http.createServer((req, res)=>{
    res.writeHead(httpcode.StatysCodes.Ok,{"Content-Type": "text/html"});
    res.write("<h1>Welcome To Sample Node Web Server</h1>")
    res.end();
});
server.listen(port, ()=>{console.log("server is runnig on port 3000")});
//webserver 404 오류는 없다는 뜻
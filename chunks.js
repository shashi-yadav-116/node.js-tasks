var a = require("http")
var b = require("url")
var fs= require("fs")
a.createServer((req, res) => {
    let bb = b.parse(req.url,true) 
       // console.log(req.url);
        // console.log(req.method);
         console.log(bb.query)
    if (bb.pathname == "/register" && req.method=="GET") {
        //quearyparams
        res.write("hello 10k team")
        res.end();
        
    } 
   else if (bb.pathname == "/register" && req.method=="POST") {
       var body="gghg";
       req.on('data',(chunk)=>{
        body+=chunk.tostring();
       })
       req.on('end',()=>{
        console.log(body);
        fs.writeFile("index2.html",body,(err)=>{
            console.log(err);
            res.write("hello shashi") 
            res.end()
        })
      })
    }
        else {
        res.write("hello world is error");
        res.end();
    }
}).listen(3008, () => {
    console.log("sky");
})
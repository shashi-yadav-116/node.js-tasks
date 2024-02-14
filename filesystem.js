var a = require("http")
var b = require("url")
var c= require("fs")
a.createServer((req, res) => {
    let bb = b.parse(req.url,true) 
       // console.log(req.url);
        // console.log(req.method);
         console.log(bb.query)
    if (bb.pathname == "/register" && req.method=="GET") {
        //quearyparams
        res.write("hello 10k team")
        res.end();
//         //readfile
//         c.readFile("./index.js",(err,data)=>{
// res.write(data);
// res.end();
        //})
        // res.write(JSON.stringify([{"profile":"hello world is registered in GET"}]));
        // res.end();
    } 
   else if (bb.pathname == "/register" && req.method=="POST") {
        //console.log(req.url);
        res.write(JSON.stringify([{"profile":"hello world is registered in POST successfully"}]));
        res.end();
    }
    else if (bb.pathname == "/login") {
        console.log(req.url);
        res.write(JSON.stringify([{"profile":"hello world is logged in successfully"}]));
        res.end();
    }
   
        else {
        res.write("hello world is error");
        res.end();
    }
// // update files
// c.appendFile("./index.html","yatlaunnav",(err,data)=>{
// if(err){
//     res.write(err);
//     res.end()
// }else{
//     res.write("file is updated")
//     res.end()
// }
// })
// // update files
// c.writeFile("./index2.html","yatlaunnav",(err,data)=>{
//     if(err){
//         res.write(err);
//         res.end()
//     }else{
//         res.write("file is updated")
//         res.end()
//     }
//     })
// // create files
// c.appendFile("./index1.html"," yatlaunnav",(err,data)=>{
//     if(err){
//         res.write(err);
//         res.end()
//     }else{
//         res.write("file is updated")
//         res.end()
//     }
//     })
//     // create files
// c.writeFile("./index3.html"," yatlaunnav",(err,data)=>{
//     if(err){
//         res.write(err);
//         res.end()
//     }else{
//         res.write("file is updated")
//         res.end()
//     }
//     })
//     // delete files
// c.unlink("./index1.html",(err,data)=>{
//     if(err){
//         res.write(err);
//         res.end()
//     }else{
//         res.write("file is updated")
//         res.end()
//     }
//     })
//     // rename files
// c.rename("./index3.html","./shashi.html",(err,data)=>{
//     if(err){
//         res.write(err);
//         res.end()
//     }else{
//         res.write("file is updated")
//         res.end()
//     }
//     })

}).listen(3008, () => {
    console.log("sky");
})
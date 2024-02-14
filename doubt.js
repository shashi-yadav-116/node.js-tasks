var a=require("http")
var b=require("url")
var c=require("fs")
a.createServer((req,res)=>{
    let bb=b.parse(req.url,true)
    console.log(bb.query)

    if(bb.pathname=="/register"&& req.method=="GET"){
       
       
        res.write("queary")
        res.end()
        // c.writeFile("./yadav.html","shashi kumar yadav (dkysdghkbd)",(err,data)=>{
        //     res.write("registered")
        //     res.end()
        // })
       
    }
    else if(bb.pathname == "/login" && req.method=="GET"){
        var body="shashi gad anataru ra babu"
        req.on('data',(chunk)=>{
            body+=chunk.tostring()
        })
        req.on('end',()=>{
            console.log(body);
            c.writeFile("./shashi.html",body,(err)=>{
                console.log(err);
                res.write("loged in")
                res.end()
            })
          
        })

       
    }
    else{
        res.write("Error")
        res.end()
    }
}).listen(3002,()=>{
console.log("sky");
})
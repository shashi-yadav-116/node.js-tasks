var a=require("express")
var b=a()
var c= require("fs")
let register=[]
b.use(a.json());
b.get("/ownlog",(req,res)=>{
    c.readFile("index22.json",(err,data)=>{
        console.log(JSON.parse(data));
        res.json(data)
    })
})
b.post("/shashiapi",(req,res)=>{
    register.push(req.body)
    c.writeFile("index22.json",JSON.stringify(register),(err)=>{
        res.send("success")
    })
})
b.listen(3006,()=>{
    console.log("all set ");
})

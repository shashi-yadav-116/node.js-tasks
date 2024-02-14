let a=require("express")
let b=a();
var c=require("fs")
b.use(a.json());//middele ware
var register=[]
b.get("/users",(req,res)=>{
    c.readFile("index.json",(err,data)=>{ 
        // res.json("success")
       // console.log(req.query); // to get queary
        console.log(JSON.parse(data));
        res.json(data)
    })
   
})    
b.post("/shashi",(req,res)=>{
    register.push(req.body)
    c.writeFile("index.json",JSON.stringify(register),(err)=>{
res.json("success")
    }) 
   
})
b.listen(3004,()=>{
    console.log("sky");
})

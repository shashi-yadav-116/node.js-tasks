var express=require("express")
var b=express()
let jws=require("jsonwebtoken")
var c=require("fs")
var bcrypt=require("bcrypt")
let secretkey="shashi"
b.use(express.json())

b.get("/" ,(req,res)=>{
    let dob=req.body.DOB;
    var pass=req.body.password;
   
bcrypt.hash(pass,10,(err,hash)=>{ 
    if(err){ 
        res.send("err")
    }
    function sky(dob){
        let token=jws.sign({DOB:req.body.dob},secretkey,{expiresIn:"1hr"})
        return token
    }
    
        c.writeFile("bcrypt.text",JSON.stringify({username:req.body.username,DOB:sky(dob),password:hash}),(err,data)=>{
            if(err){
                res.send("error")
            }
            else{
               res.json({username:req.body.username,DOB:sky(dob),password:hash}) 
            }
        })
})

 })
b.listen(3000,()=>{

    console.log("ok");
})

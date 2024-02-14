var express=require("express");
var b=express()
var bcrypt=require("bcrypt")
var saltRounds=10;
b.get("/sky",(req,res)=>{
    const plainpassword="shashikumar"
    bcrypt.hash(plainpassword,saltRounds,(err,hash)=>{
        if(err){
            res.send("err")
        }
        else{
            res.json(hash)
        }
    })
})

b.listen(3006,()=>{
    console.log("okkk");
})

var express=require("express");
var b=express()
var multer=require("multer");
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./multerimage")
    },   
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"--" + file.originalname)
    }
})
const upload=multer({storage:storage}) 
b.post("/sky",upload.single("shashi"),(req,res)=>{
    console.log(req.file); 
    res.send("ok")
})
b.listen(3009,()=>{
    console.log("all ok");
})

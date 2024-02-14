var a=require("express")
var b=a();
var jwt=require("jsonwebtoken");
const secretkey="shashi";
const user={
    id:1,
    username:"shashi kumar",
    DOB:2002-1-18
}
function sky(user){
    const token=jwt.sign({id:user.id,username:user.username,DOB:user.DOB},secretkey,{expiresIn:"1hr"})
    return token;
}
b.get("/sky",(req,res)=>{
    res.json(sky(user))
})
b.listen(3008,()=>{
    console.log("shshshshshshsjsjsjsj");
})


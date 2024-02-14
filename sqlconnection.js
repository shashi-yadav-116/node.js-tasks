let express=require("express")
let app=express();
let con=require("./db.js")
app.use(express.json())
   app.get("/register",(req,res)=>{
    console.log(req.body);
   // let sqll="create table coders(FirstName varchar(330),LastName varchar(330))"
    con.query("insert into coders set ? ",req.body,(err,data)=>{
        console.log(err)
        console.log(data);
        res.status(200).json({
            "status":200,
            "msg":"success"
        })

    })
})

app.get("/users",(req,res)=>{
    con.query(" SELECT * FROM college.coders;",(err,data)=>{
if(err){
    res.status(400).send(err);
}else{
    res.status(200).json(data)
}
    })
})

app.listen(3003,()=>{

    console.log("all ok");
})  
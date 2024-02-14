//------------------task-1-------------------------------
// var a=require("express")
// var b=a()
// b.use(a.json())
// var{LocalStorage}=require("node-localstorage")
//  const shashi= new LocalStorage("./localstorage")
//  b.get("/",(req,res)=>{
//     shashi.setItem("value" ,JSON.stringify(req.body))
//     const stored=shashi.getItem("value")
//     res.send({stored:stored})
//  })
//  b.listen(3003,()=>{
//     console.log("ok");
//  })
//--------------------------task2------------------
// var a=require("express")
// var b=a()
// b.use(a.json())
// var {LocalStorage}=require("node-localstorage")
// const shashi=new LocalStorage("./localstorage")

// b.post("/register",(req,res)=>{
//     shashi.setItem("task2",JSON.stringify(req.body))
//     const sky=shashi.getItem("task2")
//     res.json("success")
// })
//  b.listen(3003,()=>{
//         console.log("ok");
//      })
//--------------------------task3----------------------
// let a=require("express")
// let b=a()
// b.use(a.json())
// let {LocalStorage}=require("node-localstorage");
// const shashi=new LocalStorage("./localstorage")
// b.post("/login", (req,res)=>{
//     const data=JSON.parse(shashi.getItem("task3"))
//     const {username, password}=req.body;
//     let validations=data.find((val)=>val.username==username && val.password==password)
//     if(validations){
//         res.send("user already exists")
//     }
//     else{
//         data.push(req.body)
//     }
//     shashi.setItem("task3",JSON.stringify(data,null,3))
//     res.send("registration succesfull")
// })
// b.listen(3001,()=>{
//     console.log("ok");
// })
//-----------------------task-4------------------
// let a=require("express")
// let b=a()
// let con=require("./tsk.js")
// b.use(a.json())
// b.get("/sha",(req,res)=>{
//        // let sqll="create table task33(Username varchar(330),Password varchar(330), Email varchar(330))"
//     con.query("insert  into task33 set ? ",req.body,(err,data)=>{
//         console.log(err)
//         console.log(data);
//         res.status(200).json({
//             "status":200,
//             "msg":"success"
//         })
//     })
// })
// b.listen(3001,()=>{
//         console.log("ok");
//     })
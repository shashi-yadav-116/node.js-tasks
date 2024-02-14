var a=require("http")
console.log(a);

a.createServer((req,res)=>{
res.write(JSON.stringify({"hii shashi":"yadav"}));
res.end()
}).listen(3002,()=>{
    console.log("hiii prends");
}); 


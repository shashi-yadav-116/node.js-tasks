let sql=require("mysql");
let con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"Shashi@123",
    database:"college"
    
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
module.exports=con; 
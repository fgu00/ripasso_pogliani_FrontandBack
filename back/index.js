//Ctrl+ò npm init
//nmp i express
//npm i cors
//npm i mysql
var express = require("express");
var apiServer = express();
var cors = require("cors");
apiServer.use(cors());
let mysql = require('mysql');

var host = "localhost";
var port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',//'russo.salvatore.tave.osd',
  user: 'root',//'c190_salvo',
  database: 'pogliani',//'c190_primo',
  password: ''//"Az-17694"
});
 connection.connect(function(error){
    if(!!error){
        console.log('error: '+error)
    }else{
        console.log('connesso al db')
    }
 })
apiServer.listen(port, host, () => {
    console.log("Server partito: http://%s:%d/", host, port);
});
apiServer.get("/login",(req, res)=>{
    var a=req.query.id;
    console.log(a);
    var b=req.query.name;
    console.log(b);
    connection.query("INSERT INTO es_prova1 ('id','nome') VALUES ('"+a+"','"+b+"')",
     function(err, rows, fields) {
    if(err){
        res.status(400).json({ message: "sign-up faileds" });
      }else{
        res.status(200).json({ message: "sign-up success" });
    }
}
    )
});
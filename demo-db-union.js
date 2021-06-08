var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kadalmesir123",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "SELECT name,id FROM customers UNION SELECT name,id FROM products";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    for (let index = 0; index < result.length; index++) {
      
        console.log(result[index]['name']);
        console.log(result[index]['id']);
       
        
    }
  });
});

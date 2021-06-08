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
    "SELECT customers.name AS customer, products.name AS products FROM customers LEFT JOIN products ON customers.id = products.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    for (let index = 0; index < result.length; index++) {
      
        console.log(result[index]['customer']);
        console.log(result[index]['products']);
        
    }
  });
});

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
    "UPDATE customers SET address = 'LOTUS 123x' WHERE address = 'Highway 71'";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    console.log(result.affectedRows);
    // console.log(fields);
  });
});

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kadalmesir123",
  database: "mydb"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO products (name, address) VALUES ?";
  var values = [
    ["Dolger", "Hill 9"],
    ["Ruly", "Bogo 6"],
    ["Among", "State st 65"],
    ["Rizzy", "Runay 216"],
    ["Susan", "Silicon 3455"],
    ["Johny", "World blvd 24"],
    ["Susy", "Red Grass 12"],
    ["Parker", "Wat st 731"],
    ["Albert", "One 198"],
    ["Stark", "Green Garden 9"],
    ["Toni", "Park 99"],
    ["Robert", "North st 74"],
    ["Kiy", "Road 79"],
    ["Poppy", "Classy 193"],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

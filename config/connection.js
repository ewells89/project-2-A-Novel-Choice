var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
<<<<<<< HEAD
	password: "potato16",
=======
	password: "Lain7891!",
>>>>>>> c9588fc49e42a7cd84e5d3b2844d1ee4a8f20bc5
	database: "books_db"
  });
  
  connection.connect(function(err) {
	if (err) {
	  console.error("error connecting: " + err.stack);
	  return;
	}
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
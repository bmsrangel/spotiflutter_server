var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3360,
  database: "mediaserver",
  multipleStatements: true
});

connection.connect();

// var options = {
//   sql:
//     "SELECT al.name, ar.name FROM albums al JOIN artists ar ON al.id_artists = ar.id WHERE ar.name='Ling tosite sigure'",
//   nestTables: "_"
// };

// connection.query(options, (err, res, fields) => {
//   if (err) throw err;
//   console.log(res[0]);
// });

// connection.end();

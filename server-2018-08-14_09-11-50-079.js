//Initiallising node modules
const express = require("express");
const mssql = require("mssql");
const app = express();
const dbConfig = require("./settings");
const http = require('http');


// HTTP Response
// http.createServer(function(req, res){
//   res.render(recordset)

// }).listen(8080);

// Testing SQL connection via query; exporting to 'list'

let testSqlQuery = "SELECT * FROM SALES.SALESPERSON WHERE TerritoryID = 1";



function testQuery() {

  const conn = new mssql.ConnectionPool(dbConfig);
  var sqlReq = new mssql.Request(conn);

  conn.connect(function (err) {
    if (err) {
      console.log(err);
      return;
    };
    sqlReq.query(testSqlQuery)
    .then(function (recordset) {
      console.log(recordset);
      // recordset.render('index');
      // conn.close();
    })

    .catch(function (err) {
      console.log(err);
      conn.close();
    })
    .catch(function (err) {
      console.log(err);
      conn.close;
    });
  })

  
};


testQuery();

// //Setting up server
// var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
// });
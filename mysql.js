var mysql = require('mysql')

var connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"Zb@123456",
    database:"test"
});

connection.connect();

connection.query('select *  from employee',function (error,results,fields){
    if (error) throw error;
    console.log('The solution is: ', results[0].id);
});
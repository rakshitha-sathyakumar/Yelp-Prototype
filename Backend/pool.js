const mysql = require('mysql');
const myPort = 3306;
const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'ADD YOUR USERNAME',
    port: myPort,
    password: 'ADD YOUR PASSWORD',
    database: 'ADD YOUR DB NAME'
});

// const pool = mysql.createConnection({
//   connectionLimit: 1,
//   host: 'localhost',
//   port: myPort,
//   user: 'root',
//   password: 'password',
//   database: 'react_sql',
// });


pool.getConnection((err) => {
    if(err){
      throw 'Error occured: ' + err;
    }
  });

// pool.connect((err) => {
//     if (err) {
//       console.log(`Error occured: ${err}`);
//     }
//     console.log('connected')
//   });
  
module.exports = pool;


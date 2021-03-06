var express = require('express');
var router = express.Router();
const sql = require('mssql');
const config = {
  user: '4DD_22',  
  password: 'xxx123##', 
  server: "213.140.22.237",  
  database: '4DD_22'
}

/* GET users listing. */
router.get('/classe', function(req, res, next) {
  sql.connect(config, err => {
    if(err) console.log(err);  // ... error check
    
    // Query
    let sqlRequest = new sql.Request();  
    sqlRequest.query('select * from dbo.AA_ATTORE', (err, result) => {
        if (err) console.log(err); // ... error checks
        res.send(result);  //Invio il risultato
    });
  });
});

router.get('/search/:name', function(req, res, next) {
  sql.connect(config, err => {
    // ... error check
    if(err) console.log(err);
    // Query
    let sqlRequest = new sql.Request();
    sqlRequest.query(`select * from [School].[Person] where FirstName = '${req.params.name}'`, (err, result) => {
        // ... error checks
        if (err) console.log(err);

        res.send(result);
    });
  });
});

module.exports = router;
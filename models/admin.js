var db = require('./connection');

exports.register= function (data) {
    db.query(`INSERT INTO userdetails( name, contact, userName, password, role) VALUES ('${data.name}','${data.contact}','${data.username}','${data.password}','employee')`,function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0]);
      })
    
}

exports.viewEmployee = function(req,res){
    if(req.session.loggedin)
    {
        db.querydb.query(`SELECT * FROM employees`,function (error, results, fields) {
            if (error) throw error;
            //console.log(results);
            res.render('admin/home',{employees : results});
          })
    }
}
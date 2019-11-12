var db = require('./connection');

exports.register= function (data) {
    db.query(`INSERT INTO userdetails( name, contact, userName, password, role) VALUES ('${data.name}','${data.contact}','${data.username}','${data.password}','employee')`,function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0]);
      })
    
}

exports.auth = function (req,res) {
    db.query(`SELECT * FROM userdetails WHERE userName = '${req.body.name}' AND password = '${req.body.password}'`,function (error, results, fields) {
        if (error) throw error;
        if(results.length===1)
        {
            req.session.loggedin = true;
            req.session.username = req.body.name;
            req.session.userId = results[0].id;
            res.redirect('/viewblog')
        }
        else
        {
            res.redirect('/auth');
        }
      })
    
}
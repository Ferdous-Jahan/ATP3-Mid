var db = require('./connection');



exports.auth = function (req,res) {
    db.query(`SELECT * FROM employees WHERE userName = '${req.body.name}' AND password = '${req.body.password}'`,function (error, results, fields) {
        if (error) throw error;
        else if(results[0].role === 'admin')
        {
            req.session.loggedin = true;
            req.session.username = req.body.name;
            req.session.userId = results[0].id;
            console.log(req.body);
            res.redirect('/admin');
        }
        else if(results[0].role === 'employee')
        {
            req.session.loggedin = true;
            req.session.username = req.body.name;
            req.session.userId = results[0].id;
            res.redirect('/employee');
        }
        else
        {
            res.redirect('/auth');
        }
      })    
}
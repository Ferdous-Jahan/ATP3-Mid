var db = require('./connection');

exports.register = function (data) {
    db.query(`INSERT INTO userdetails( name, contact, userName, password, role) VALUES ('${data.name}','${data.contact}','${data.username}','${data.password}','employee')`, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0]);
    })

}

exports.viewEmployee = function (req, res) {
    if (req.session.loggedin) {
        db.query(`SELECT * FROM employees`, function (error, results, fields) {
            if (error) throw error;
            res.render('admin/home', { employees: results });
        })
    }
    else {
        res.redirect('/auth');
    }
}

exports.viewSingleEmployee = function (req, res) {
    if (req.session.loggedin) {
        db.query(`SELECT * FROM employees WHERE id=${req.params.id}`, function (error, results, fields) {
            if (error) throw error;
            res.render('admin/edit', { employees: results });
        })
    }
    else
        res.redirect('/auth');
}

exports.editSingleEmployee = function (req, res) {
    if (req.session.loggedin) {
        db.query(`UPDATE employees SET name='${req.body.name}', contact='${req.body.contact}', userName='${req.body.userName}', password='${req.body.password}' WHERE id=${req.params.id}`, function (error, results, fields) {
            if (error) throw error;
            res.redirect('/admin');
        })
        
    }

    else
        res.redirect('/auth');
}
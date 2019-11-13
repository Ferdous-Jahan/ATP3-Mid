var db = require('./connection');

exports.viewRegister = function (req, res) {
    if (req.session.loggedin) {
        res.render('authentication/registration');
    }
    else
        res.redirect('/auth');
}

exports.register = function (req, res) {
    console.log(req.body);
    if (req.body.password === req.body.password_confirmation) {
        db.query(`INSERT INTO employees( name, contact, userName, password, role) VALUES ('${req.body.name}','${req.body.contact}','${req.body.userName}','${req.body.password}','employee')`, function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0]);
        })
    }
    else
        console.log('pass doesnt match');
    res.redirect('/admin');
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

exports.deleteSingleEmployee = function (req, res) {
    if (req.session.loggedin) {
        db.query(`DELETE FROM employees WHERE id=${req.params.id}`, function (error, results, fields) {
            if (error) throw error;
            res.redirect('/admin');
        })
    }
    else {
        res.redirect('/auth');
    }
}
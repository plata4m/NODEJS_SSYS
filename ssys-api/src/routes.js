const express = require('express');
const routes = express.Router();

const tokenValidation = require('./validation/validation');
const errorController = require('./controllers/ErrorController');

const EmployeesController = require('./controllers/EmployeesControlller');
const EmployeesReportController = require('./controllers/EmployeesReportController');

routes.use(function (req, res, next) {

    // valida o token antes de redirecionar as rotas.
    const validateToken = tokenValidation.validateToken(req.header('token'));
    if(validateToken.error == 0){

        // libera as sub rotas. (middleware )
        next();
        // Rotas crud employees
        routes.get('/employees',EmployeesController.list); 
        routes.get('/employees/:id', EmployeesController.detail);
        routes.post('/employees', EmployeesController.create);
        routes.put('/employees/:id', EmployeesController.update);
        routes.delete('/employees/:id', EmployeesController.delete);

        // Rotas relatorios
        routes.get('/reports/employees/salary/',EmployeesReportController.salary); 
        routes.get('/reports/employees/age/',EmployeesReportController.age);

    } else {

        return res.json({ error: 0, message: validateToken.message });
        
    }

});

module.exports = routes;
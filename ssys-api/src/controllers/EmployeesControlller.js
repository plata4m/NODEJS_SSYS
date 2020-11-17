const tokenValidation = require('../validation/validation');
const mongoose = require('mongoose');

const Employees = mongoose.model('Employees');

module.exports = {
    async list(req, res){
        const employee = await Employees.find();
        
        const validateToken = tokenValidation.validateToken(req.header('token'));
        if(validateToken.error == 0){
            return res.json(employee);
        }

        return res.json(validateToken.message);
    },

    async create(req, res){
        const employee = await Employees.create(req.body);

        const validateToken = tokenValidation.validateToken(req.header('token'));
        if(validateToken.error == 0){
            return res.json(employee);
        }

        return res.json(validateToken.message);
    },

    async detail(req, res){
        const employee = await Employees.findById(req.params.id);

        return res.json(employee);
    },

    async update(req, res){
        const employee = await Employees.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(employee);
    }, 

    async delete(req, res){
        await Employees.findByIdAndRemove(req.param.id);
        return res.send();
    }

    
} 
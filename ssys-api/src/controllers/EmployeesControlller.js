const mongoose = require('mongoose');

const Employees = mongoose.model('Employees');

module.exports = {
    async list(req, res){
        const employee = await Employees.find();
        
        return res.json(employee);
    },

    async create(req, res){
        const employee = await Employees.create(req.body);
        
        return res.json(employee);
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

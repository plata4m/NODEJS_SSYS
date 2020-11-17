const mongoose = require('mongoose');

const Employees = mongoose.model('Employees');

module.exports = {
 
    async salary(req, res){

      const salary1 = await Employees.find().select("-__v").select("-createdAt").sort({salary: 1}).limit(1);
      const salary2 = await Employees.find().select("-__v").select("-createdAt").sort({salary: -1}).limit(1);

      var salaryAverage = (parseFloat(salary1[0].salary) + parseFloat(salary2[0].salary)) / 2;

      const return_ = { "lowest": salary1[0], "highest": salary2[0], "average":parseFloat(salaryAverage).toFixed(3) };

      return res.json( return_);
    },



    async age(req, res){

      var now_ = new Date();
      now_ = now_.getYear();

      const age1 = await Employees.find().select("-__v").select("-createdAt").sort({birth_date: 1}).limit(1);
      const age2 = await Employees.find().select("-__v").select("-createdAt").sort({birth_date: -1}).limit(1);

      const ageMin = now_ - age1[0].birth_date.getYear();
      const ageMax = now_ - age2[0].birth_date.getYear();

      var ageAverage = (ageMax + ageMin) / 2;

      const return_ = { "younger": age1[0], "older": age2[0], "average":parseFloat(ageAverage).toFixed(3) };

      return res.json( return_);
    },
 
} 
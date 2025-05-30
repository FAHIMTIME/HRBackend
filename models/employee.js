const mongo = require('mongoose')

const employee = new mongo.Schema({
    empnumber: String,
    name: String,
    dob: date,
    dept: String,
    doj: date,
    email: String,
    phone: String,
    dot: date,
    etype: String,
    isactive: {type: Boolean, default: true},
    isdeleted: {type: Boolean, default: false}
}); 

module.exports = mongo.model('Employee', employee)
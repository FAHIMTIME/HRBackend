const mongo = require('mongoose')

const employee = new mongo.Schema({
    empnumber: String,
    name: String,
    dob: String,
    dept: String,
    doj: String,
    email: String,
    phone: String,
    dot: String,
    etype: String,
    isactive: {type: Boolean, default: true},
    isdeleted: {type: Boolean, default: false}
}); 

module.exports = mongo.model('Employee', employee)
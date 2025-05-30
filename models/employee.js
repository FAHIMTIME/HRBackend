const mongo = require('mongoose')

const employee = new mongo.Schema({
    empnumber: String,
    name: String,
    dob: Date,
    dept: String,
    doj: Date,
    email: String,
    phone: String,
    dot: Date,
    etype: String,
    isactive: {type: Boolean, default: true},
    isdeleted: {type: Boolean, default: false}
}); 

module.exports = mongo.model('Employee', employee)
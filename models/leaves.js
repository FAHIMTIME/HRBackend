const mongo = require('mongoose');
//const Employee = require('./employee');

const leaves = new mongo.Schema({
    empnumber: String,
    leaveType: String,
    dateFrom: Date,
    dateTo: Date,
    reason: String,
    Approved: {type:Boolean,default:false},
    employee: { type: mongo.Schema.Types.ObjectId, ref: 'Employee' },
    isactive: {type: Boolean, default: true},
    isdeleted: {type: Boolean, default: false}
}); 

module.exports = mongo.model('Leaves', leaves)
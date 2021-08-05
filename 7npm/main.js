const moment = require("moment");
const unique = require('uniq');
const data = [1,2,3,4,5,6,6,7,8,8];

console.log(unique(data));

var myDate = new Date();

var cooDate = moment(myDate).format('LL');
console.log(cooDate);
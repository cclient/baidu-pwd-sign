'use strict';

var baidusign = require('../index.js');

//the first param is phoneNumber
//the second param is the str that will replace tamplate's {1}\{2}
//the third param is the key that set in the file(../lib/config.js)'s TEMPLATE
console.log(baidusign.signpwd("1","2"));

//if sms send successfully the err is bull and ret is { code: '000000' }
//else the err will exists eg: [Error: Error in send sms type: code, errCode: 101104, errMsg: 请求包头Authorization参数解码后格式有误]
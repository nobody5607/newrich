const moment = require('moment');


const SLASH_DMY = 'DD/MM/YYYY';
const SLASH_DMYHMS = 'DD/MM/YYYY HH:mm:ss';
const SLASH_YMD = 'YYYY/MM/DD';
const SLASH_YMDHMS = 'YYYY/MM/DD HH:mm:ss';
const DASH_DMY = 'DD-MM-YYYY';
const DASH_DMYHMS = 'DD-MM-YYYY HH:mm:ss';
const DASH_YMD = 'YYYY-MM-DD';
const DASH_YMDHMS = 'YYYY-MM-DD HH:mm:ss';

module.exports.currentDateYmd=()=>{
    var date = new Date();
    return moment(date).format(DASH_YMD);
}
module.exports.currentDateTimeYmd=()=>{
    var date = new Date();
    return moment(date).format(DASH_YMDHMS);
}

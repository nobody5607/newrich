module.exports.convertConditionDecodeBase64 = (_conditionObj)=>{
    _conditionObj = Buffer.from(_conditionObj, 'base64').toString(); 
    _conditionObj = JSON.parse(_conditionObj);
    return _conditionObj;
}
module.exports.convertTextToBase64 = (text)=>{
    return Buffer.from(text).toString('base64');
}
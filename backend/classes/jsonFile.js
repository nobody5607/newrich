const jsonfile = require('jsonfile');


module.exports.readJson = (filename) => {
    return new Promise((resolve, reject) => {
        jsonfile.readFile(filename, function (err, obj) {
            if (err) reject(err)
            resolve(obj)
        })
    });
}
module.exports.writeJson = (filename,obj) => {
    return new Promise((resolve, reject) => {
        jsonfile.writeFile(filename, obj)
            .then(res => {
                resolve({status:'ok',message:"Write config successfully :)"});
            })
            .catch(error => {
                console.log(error);                
                reject({status:'nok',message:"Write config unsuccessfully"});
            })
    });
}
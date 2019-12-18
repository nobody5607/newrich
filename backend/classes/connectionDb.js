const knex = require('knex'); 
const configFile = __dirname + '../../assets/config.json';
const jsonFile = require('../classes/jsonFile.js');
const knbase64 = require('../classes/knbase64');

const config = require('../config');

module.exports.connect = async () => {
    let config = await jsonFile.readJson(configFile);
     
    let conn = knex({
        client: config.get('dbtype'),
        connection: {
            host:config.get('servername'),
            user:config.get('user'),
            password:config.get('password'),
            database:config.get('dbname'),
            port: config.get('port'),
        },
        pool: { min: 0, max: 7 } 
    });
    return conn; 
}

module.exports.query = async (sql) => {
    return new Promise( async (resolve, reject)=>{
        try{
            let conn = await this.connect();
            let data = await conn.raw(sql);
            var resultArray = Object.values(JSON.parse(JSON.stringify(data))) 
            if(resultArray[0].length > 0){
                resolve(resultArray[0]);
            }
        }catch(err){ 
            reject(err+' (:555+');
           
        }
     });
}


module.exports.findAll = async (_table,_conditionObj) => {
    return new Promise( async (resolve, reject)=>{ 
        try{
            let data = null; 
            let conn = await this.connect();
            let query = conn(_table).select('*');
            data = await query.orderBy('id','desc');
            if(_conditionObj !== undefined){ 
               if(_conditionObj.length > 0){ 
                    _conditionObj = knbase64.convertConditionDecodeBase64(_conditionObj); 
                    data = await query.where(_conditionObj); 
               }
            }  
            var resultArray = Object.values(JSON.parse(JSON.stringify(data))) 
            resolve(resultArray);
        }catch(error){
            reject(error+" :) 555+");
        }
    });
}
module.exports.findAllSearch = async (_table,_columnName, _value) => {
    //.where('columnName', 'like', '%rowlikeme%')
        try{
            let data = null; 
            let conn = await this.connect();
            let query = conn(_table).select('*');
            data = await query;
            if(_columnName !== undefined && _value !== undefined){
                data = await query.where(_columnName, 'LIKE', "%"+_value+"%"); 
            } 
            var resultArray = Object.values(JSON.parse(JSON.stringify(data))) 
            return Promise.resolve(resultArray);
        }catch(error){
            return Promise.reject(error+" :) 555+");
        }
    
}
module.exports.insert = async (_table, _columns) => { 
    return new Promise( async (resolve, reject)=>{ 
        try {
            let conn = await this.connect();   
            let dataInsert = await conn.insert(_columns).into(_table);
            resolve(dataInsert);
        } catch (error) {
            reject(error+" :) 555+");
        }
    }); 
}
module.exports.update = async (_table, _columns,_condition) => { 
    return new Promise( async (resolve, reject)=>{ 
        try {
            let conn = await this.connect(); 
            _condition = knbase64.convertConditionDecodeBase64(_condition);   
            let dateUpdate = await conn(_table).update(_columns).where(_condition);
            resolve(dateUpdate);
        } catch (error) {
            reject(error+" :) 555+");
        }
    }); 
}
module.exports.delete = async (_table,_condition) => { 
    return new Promise( async (resolve, reject)=>{ 
        try {
            let conn = await this.connect(); 
            _condition = knbase64.convertConditionDecodeBase64(_condition);   
            let dateDelete = await conn(_table).del().where(_condition);
            resolve(dateDelete);
        } catch (error) {
            reject(error+" :) 555+");
        }
    }); 
} 
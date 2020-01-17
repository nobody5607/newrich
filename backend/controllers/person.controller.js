const db = require("../classes/connectionDb");
const kndate = require('../classes/kndate');
const knbase64 = require('../classes/knbase64');
// exports.querySql = async (req, res) => {   
//     const fields = req.fields;  
//     if (typeof fields.sql !== 'undefined') {  
//         try {
//             let sql = fields.sql;  
//             let dataPerson = await db.query(sql);  
//             res.status(200).json({ result: "ok",count:dataPerson.length, data:dataPerson});
//         } catch (error) { 
//             res.status(200).json({ result: "nok", data: error , message:'not found table '});
//         }
//     }
// }
exports.findAll = async (req, res) => {

    let _table = req.query._table;
    let _condition = req.query._condition;
    if (typeof _table !== 'undefined') {  
        try {  
            let dataPerson = await db.findAll(_table,_condition);
            res.status(200).json({ result: "ok",count:dataPerson.length, data:dataPerson});
        } catch (error) { 
            res.status(200).json({ result: "nok", data: error , message:'not found table (:'});
        }
    }else{
        res.status(200).json({ result: "nok", data: '' , message:'not found table (:'});
    }   
}
exports.insert = async (req, res) => {

    const fields = req.fields;  
    if (typeof fields._table !== 'undefined') {  
        try {
            let _table = fields._table;
            delete fields._table;
            let _columns = fields;
            let _condition = JSON.stringify({"id":_columns['id']});
            _condition = knbase64.convertTextToBase64(_condition);
            _columns['create_date'] = kndate.currentDateTimeYmd();
            await db.insert(_table,_columns); 
            let dataPerson = await db.findAll(_table,_condition);
            res.status(200).json({ result: "ok",count:dataPerson.length, data:dataPerson});
        } catch (error) { 
            res.status(200).json({ result: "nok", data: error , message:'not found table '});
        }
    }
}
exports.update = async (req, res) => {
    console.log('update');
    const fields = req.fields;  
    if (typeof fields._table !== 'undefined') {  
        try {
            let _table = fields._table;
            let _condition = fields._condition;
            delete fields._table;
            delete fields._condition;
            let _columns = fields;     
            await db.update(_table,_columns,_condition); 
            let dataPerson = await db.findAll(_table,_condition);
            res.status(200).json({ result: "ok",count:dataPerson.length,data:dataPerson});
        } catch (error) { 
            res.status(200).json({ result: "nok", data: error , message:'not found table '});
        }
    }
}
exports.delete = async (req, res) => {

    const fields = req.fields;
    if (typeof fields._table !== 'undefined') {
        try {
            let _table = fields._table;
            let _condition = fields._condition; 
            let dataPersonDelete = await db.delete(_table,_condition);
            res.status(200).json({ result: "ok",count:dataPersonDelete.length,data:dataPersonDelete});
        }catch (error) { 
            res.status(200).json({ result: "nok", data: error , message:'not found table '});
        }
        
    }
}

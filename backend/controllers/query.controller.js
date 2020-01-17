const db = require("../classes/connectionDb");
const kndate = require('../classes/kndate');
const knbase64 = require('../classes/knbase64');
exports.querySql = async (req, res) => {   
    const fields = req.fields;  
    if (typeof fields.sql !== 'undefined') {  
        try {
            let sql = fields.sql;  
            let dataQuery = await db.query(sql);  
            res.status(200).json({ result: "ok",count:dataQuery.length, data:dataQuery});
        } catch (error) { 
            res.status(200).json({ result: "nok", data: error , message:'not found table '});
        }
    }
}

exports.findAllSearch = async (req, res) => {

    const _table = req.query._table;
    const _term = req.query._term;
    const _columnName = req.query._columnName;

    if (typeof _table !== 'undefined') {  
        try {  
            let dataQuery = await db.findAllSearch(_table,_columnName,_term);
            res.status(200).json({ result: "ok",count:dataQuery.length, data:dataQuery});
        } catch (error) { 
            res.status(200).json({ result: "nok", data: error , message:'not found table (:'});
        }
    }else{
        res.status(200).json({ result: "nok", data: '' , message:'not found table (:'});
    }   
}
exports.findAll = async (req, res) => {

    let _table = req.query._table;
    let _condition = req.query._condition;
    if (typeof _table !== 'undefined') {  
        try {  
            let dataQuery = await db.findAll(_table,_condition);
            res.status(200).json({ result: "ok",count:dataQuery.length, data:dataQuery});
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
            let dataInsert = await db.findAll(_table,_condition);
            res.status(200).json({ result: "ok",count:dataInsert.length, data:dataInsert});
        } catch (error) { 
            res.status(200).json({ result: "nok", data: error , message:'not found table '});
        }
    }
}
exports.update = async (req, res) => {

    const fields = req.fields;  
    if (typeof fields._table !== 'undefined') {  
        try {
            let _table = fields._table;
            let _condition = fields._condition;
            delete fields._table;
            delete fields._condition;
            let _columns = fields;     
            await db.update(_table,_columns,_condition); 
            let dataUpdate = await db.findAll(_table,_condition);
            res.status(200).json({ result: "ok",count:dataUpdate.length,data:dataUpdate});
        } catch (error) { 
            res.status(200).json({ result: "nok", data: error , message:'not found table '});
        }
    }
}
exports.delete = async (req, res) => {

    const fields = req.query; 
    if (typeof fields._table !== 'undefined') {
        try {
            let _table = fields._table;
            let _condition = fields._condition; 
            let dataDelete = await db.delete(_table,_condition);
            res.status(200).json({ result: "ok",count:dataDelete.length,data:dataDelete});
        }catch (error) { 
            res.status(200).json({ result: "nok", data: error , message:'not found table '});
        }
        
    }
}

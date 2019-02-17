var connection = require("./connection.js");
var orm={
    selectAll:function(col,table){
        var queryString="select ?? from ??";
        connection.query(queryString,[col,table],function(err,data){
           if(err) throw err; 
           console.log(data);
        });
    },
    insertOne:function(){

    },
    updateOne:function(){

    }
};

module.exports = orm;
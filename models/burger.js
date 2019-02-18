var orm = require("../config/orm.js");
//Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

var burger={
    selectAll:function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    insertOne:function(cols,val,cb){
        orm.insertOne("burgers",cols,val,function(res){
            cb(res);
        });
    },
    updateOne:function(id,cb){
        orm.updateOne("burgers","devoured",1,"id",id,function(res){
            cb(res);
        });
    },
    delete:function(id,cb){
        orm.delete("burgers","id",id,function(res){
            cb(res);
        });
    }
};

module.exports=burger;
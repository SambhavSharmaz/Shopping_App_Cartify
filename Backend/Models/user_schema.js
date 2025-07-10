const mongoose = require("mongoose");

const {schema,model} = mongoose;

const userSchema = new schema({
    name:{type:String,trim:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,trim:true},
    gender:{type:String,enum:["male","female"]},
    roles:{type:String,enum:["admin","user"]},
},{
    timestamps:true,
    versionKey:false
});

const userModel = model("user",userSchema);

module.exports = {userModel};
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const {Schema,model} = mongoose;

const userSchema = new Schema({
    username:{type:String,trim:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,trim:true},
    gender:{type:String,enum:["male","female","others"]},
    roles:{type:String,enum:["admin","user"]},
},{
    timestamps:true,
    versionKey:false
});

userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,12);
    }
    next();
})

const userModel = model("user",userSchema);

module.exports = {userModel};
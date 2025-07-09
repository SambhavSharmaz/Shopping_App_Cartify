const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL,{
    dbName:"Day17",
}).then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log("DB Not-Connected : ",err);
})


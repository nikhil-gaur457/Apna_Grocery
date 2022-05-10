const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Apna_Grocery",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
}).then(() => {
    console.log('connenction successful');
}).catch((e) => {
    console.log('No Connection');
})

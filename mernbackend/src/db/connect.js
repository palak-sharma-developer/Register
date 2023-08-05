const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://palaksharm2508:P3shar3P%40ps@cluster0.k7jvmmf.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connection successful")
}).catch((e)=>{
    console.log(e)
})

const mongoose = require("mongoose");
const uri = "mongodb+srv://srikanthhirola:Amzh2RcWS5LGLef3@cluster2.vhijd5e.mongodb.net/?retryWrites=true&w=majority";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };
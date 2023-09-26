const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: 'String',
    lastName : 'String',
    email: 'String',
    password: 'String',
    phoneNumber: 'Number',
    imageUrl: 'String',
    role: {
        type: String,
        enum: ["Admin", "Sales"],
    },
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
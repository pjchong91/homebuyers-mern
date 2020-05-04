const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,//what does?
        minlength: 3
    }
},
    {
        timestamps: true, //what does?
    })

const User = mongoose.model('User', userSchema);

module.exports = User;
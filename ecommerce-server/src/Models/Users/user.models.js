const moongose = require("mongoose");

//create a basic schema
const UserSchema = new moongose.Schema({
    Email: { type: String, required: true, lowercase: true, trim: true, unique: true },
    Password: { type: String, required: true, trim: true},
    Username: { type:String, required: true, trim: true, unique: true},
    DateAt: { type: Date, default: Date.now()}
}, {
    //use this property in order to catch the creation/modification collection
    timestamps: true
});


//export user model
module.exports = moongose.model('User', UserSchema);  
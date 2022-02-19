const mongoose = require('mongoose'); 
var crypto = require('crypto'); 
  
const UserSchema = mongoose.Schema({ 
    email : { 
        type : String, 
        required : true
    }, 
    hash : String, 
    salt : String,
    token : String
}); 
  
UserSchema.methods.setPassword = function(password) { 
    this.salt = crypto.randomBytes(16).toString('hex'); 
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`); 
}; 
  
UserSchema.methods.validPassword = function(password) { 
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`); 
    return this.hash === hash; 
}; 

UserSchema.methods.generateToken = function() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 26; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    this.token = token
}; 

const User = module.exports = mongoose.model('User', UserSchema); 
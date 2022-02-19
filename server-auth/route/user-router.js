const router = require('express').Router(); 
const User = require('../model/user-model');
const emailValaidator = require("email-validator");
const PasswordValidator = require('password-validator');
const passwordValidator = new PasswordValidator().is().min(8).has().uppercase().has().lowercase().has().digits(1).has().symbols(1)

router.post('/login', (req, res) => { 

    if (!emailValaidator.validate(req.body.email)) {
        return res.status(400).send({
            message : "Invalid email"
        });
    } else if (!passwordValidator.validate(req.body.password)) {
        return res.status(400).send({
            message : "Invalid password"
        });
    }

    User.findOne({ email : req.body.email }, function(err, user) {
        if (user === null) {
            return res.status(403).send({
                message : "User not found"
            });
        }
        else {
            if (!user.validPassword(req.body.password)) {
                return res.status(403).send({
                    message : "Wrong password"
                });
            } 
            else {
                user.generateToken()
                user.save((err, User) => { 
                    if (err) { 
                        return res.status(400).send({ 
                            message : "Failed to create token"
                        }); 
                    } else {
                        return res.status(200).send({
                            message : "Logged in",
                            accessToken : user.token
                        })
                    }
                });
            }
        }
    });
}); 

router.post('/register', (req, res) => { 

    if (!emailValaidator.validate(req.body.email)) {
        return res.status(400).send({
            message : "Invalid email"
        });
    } else if (!passwordValidator.validate(req.body.password)) {
        return res.status(400).send({
            message : "Invalid password"
        });
    }

    User.findOne({ email : req.body.email }, function(err, user) {
        if (user !== null) {
            return res.status(403).send({
                message : "A user with this email already exists"
            });
        } else {
            let newUser = new User();
            newUser.email = req.body.email,
            newUser.password=req.body.password 
            newUser.setPassword(req.body.password); 

            newUser.save((err, User) => { 
                if (err) { 
                    return res.status(400).send({ 
                        message : "Failed to add user."
                    }); 
                } 
                else { 
                    return res.status(201).send({ 
                        message : "User created."
                    }); 
                } 
            });
        }
    });
}); 
 
module.exports = router; 
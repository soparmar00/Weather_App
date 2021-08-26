const express = require('express')
const bcrypt = require("bcrypt");
const LoginModel = require('../Model/Login')
const jwt = require("jsonwebtoken");
const LogModel = require('../Model/Log')

const register = async (req, res) => {
    const {name, email, password} = req.body;
    try{
    const user = await LoginModel.findOne({ email });
     if (user) {
        return res.status(400).json({ 
        message: "User Already Exist" 
            });
        }
    const encryptPass = await bcrypt.hash(password, 10);
    const userReg = await LoginModel.create({name, email ,password: encryptPass});
    res.status(201).json({
        message: "User created!",
        userReg: userReg
    })
    }catch (err) {
     res.status(500).json({ error: err});
}
}; 

const login = async (req, res) => {
    const {email, password} = req.body;
    const date=new Date()
    const time=new Date()
    try{
        const user = await LoginModel.findOne({email});
        if(!user){
            return res.status(401).json({
            message: "Auth failed no such user"
            })
        }
        const correctPass = await bcrypt.compare(password, user.password);
        if (!correctPass) {
          return res.status(400).json({ 
            message: "Auth failed inccorect password"
         });
      }
        const token = jwt.sign(
            { email: oldUser.email, id: oldUser._id }, 
            "weather_secret", 
            { expiresIn: "120s" });

        const log=new LogModel({email,date,time})
        await log.save()
        res.status(200).json({
             token: token 
            });

        }catch (err) {
            res.status(500).json({ 
                error: err 
            });
    }  
}

module.exports = {register, login}
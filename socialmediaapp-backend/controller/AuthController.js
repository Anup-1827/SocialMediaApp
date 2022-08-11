const User = require('../models/Users') ;
const bcrypt = require('bcrypt');

exports.Register = async(req,res)=>{
    

    try{
        // Start:--Hasing Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        // End:--Hasing Password
        

        const newUser = new User({
            userName: req.body.userName,
            password: hashedPassword,
            email: req.body.email,
            profilePicture: req.body.profilPicture,
            coverPicture: req.body.coverPicture,
            followers: req.body.followers,
            following: req.body.following,
            isAdmin: req.body.isAdmin
        })

        const user = await newUser.save(); //Saving to DB
         res.status(200).json(user);
        // res.send("User is Registered");
    }
    catch(err){
        console.log(err)
        res.status(404);
        res.send(err);
    }
} 

exports.Login = async (req, res)=>{
    try{
        const user = await User.findOne({email: req.body.email});
        // Verfiying User
        !user && res.status(404).json("User not Found");

        // Verifying Password
        const verifyPassword = await bcrypt.compare( req.body.password ,user.password);
        !verifyPassword && res.status(200).json("Password is incorrect");

        // Success
        res.status(200).json(user)

    }
    catch(err){
        res.status(500).json(err)
    }
}
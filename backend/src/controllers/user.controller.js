import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

// Signup a new user

export const signup = async (req,res)=>{
    try{
        const {fullName,email,password} = req.body;
        
        // field validation
        if(!fullName || !email || !password)
        {
            return res.status(400).json({
                message:"All fields are required"
            })
        }

        // check if the user already exists

        const existingUser = await User.findOne({
            email,
        })
        if(existingUser)
        {
           return res.json(400).json({
               message: "User already exists"
           })
        }

        // Hash the password 

        const hashedPassword = await bcrypt.hash(password,10);

        
        // Create a new user
        const user = await User.create({
            fullName,email,password: hashedPassword
        });

        // Token generation

        const token = generateToken(user._id);

        res.status(200).json({
            _id: user.__id,
            fullName: user.fullName,
            email:user.email,
            token,
        })
    }  
    catch(error)
    {
        res.status(500).json(
            {
                message: error.message,
            }
        )
    }

}


// Login 


export const login = async (req,res)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message:"All fields are required"
            })
        }

        const user = await User.findOne({email});

        if(!user)
        {
            return res.status(401).json({
                message:"Invalid credentials"
            })
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(401).json({
                message:"Invalid credentials"
            })
        }

        const token = generateToken(user._id);

        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            token
        });
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

export const getMe = async(req,res)=>{
    res.status(200).json(req.user);
}

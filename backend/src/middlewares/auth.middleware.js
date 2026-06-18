import jwt, { decode } from "jsonwebtoken"
import User from "../models/user.model.js"

const protect = async(req,res,next) =>{
    try {
        let token;

        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
        {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token,process.env.JWT_SECRET);

            req.user = await User.findById(decoded.userId).select("-password");
        }
        else
        {
            return res.status(401).json*{
                message:"Not authorized"
            }
        }
    } catch (error) {
        return res.status(401).json({
            message:"Token Invalid"
        })
    }
};

export default protect;
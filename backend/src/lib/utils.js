import jwt from "jsonwebtoken";


export const generateToken= (userId,res) =>{
      const token=jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"});// making of the  token
      res.cookie("jwt",token,{
            maxAge:7*24*60*60*1000, // milisecond
            httpOnly:true, // prevents from xss
            sameSite:true,
            secure:process.env.NODE_ENV ==="development"?false:true,
      });
   return token;
}
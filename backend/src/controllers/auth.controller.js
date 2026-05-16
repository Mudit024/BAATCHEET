import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { sendEmail } from "../lib/mail.js";
import { welcomeEmailTemplate } from "../templates/welcomeEmailTemplate.js";

// this is the controller of sign up 
export const signup = async (req, res) => {
     const { fullName, email, password } = req.body;

     try {
          if (!fullName || !email || !password) {
               return res.status(400).json({ message: "All fields are required" });
          }
          if (password.length < 6) return res.status(400).json({ message: "enter atleast 6 character  password" });
          //  check if the email is valid using regex 
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
               return res.status(400).json({ message: "Invalid email format" });
          }
          // user already exits
          const user = await User.findOne({ email });
          if (user) return res.status(400).json({ message: "user already exists" });
          // if the user is not already present then create the password and hash it using bcypt lib 
          else {
               const salt = await bcrypt.genSalt(10);
               const hashedPassword = await bcrypt.hash(password, salt);

               const newUser = new User({
                    fullName,
                    email,
                    password: hashedPassword,
               })

               if (newUser) { // authentiacation wala kaam 

                    const savedUser = await newUser.save();
                    generateToken(savedUser._id, res);

                    await sendEmail(
                         savedUser.email,
                         "Welcome to BAATCHEET 🚀",
                         welcomeEmailTemplate(savedUser.fullName)
                    );
                        
                    res.status(201).json({
                         _id: newUser._id,
                         fullName: newUser.fullName,
                         email: newUser.email,
                         profilePic: newUser.profilePic,
                    })

               } else {
                    res.status(400).json({ message: "user not found" });
               }
          }
     } catch (error) {
          console.log("Error in signup", error);
          res.status(400).json({ message: "Internal error" });
     }
};

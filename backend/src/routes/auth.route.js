import express from "express";

const router=express.Router();

router.get("signup",(req,res) => {
      res.send("Singup endpoint");
})

router.get("login",(req,res) => {
      res.send("login endpoint");
})

router.get("logout",(req,res) => {
      res.send("logoutendpoint");
})

export default router;
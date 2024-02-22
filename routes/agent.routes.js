const express=require("express");
const { registerAgent } = require("../controller/agent.controller");
const router=express.Router();

router.post("/sign_up",registerAgent)

module.exports=router;
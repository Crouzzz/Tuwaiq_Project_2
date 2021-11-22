const express = require("express");

const userRouter = express.Router();
const {getAllUser,getAccount,addAcount,updateAccount}=require('../controllers/user')
const {accountsts}=require('../routes/db')


userRouter.get('/',getAllUser);
userRouter.get('/:id',getAccount);
userRouter.post('/user',addAcount);
userRouter.put('/user',updateAccount);


module.exports={userRouter}
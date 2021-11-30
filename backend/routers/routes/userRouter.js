const express = require("express");

const userRouter = express.Router();
const {getAllUser,getAccount,addAcount,updateAccount,userInformation}=require('../controllers/user')
const {accountsts}=require('../routes/db')


userRouter.get('/',getAllUser);
userRouter.post('/login/',getAccount);
userRouter.post('/info',userInformation);

userRouter.post('/user',addAcount);
userRouter.put('/user',updateAccount);


module.exports={userRouter}
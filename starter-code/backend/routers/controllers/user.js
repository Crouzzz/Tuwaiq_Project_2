const {accounts} = require('../routes/db')


// const getUser = (req,res)=>{
//     console.log(typeof accounts)
//     const foundUser = accounts.find((elem, i) =>{
//         return i == req.params.id 
//     })
// }
const getAllUser = (req,res)=>{
        res.send(accounts)
}
const getAccount=(req,res)=>{
    const foundUser=accounts.filter((rlem,i)=>{
        return i == req.params.id
    })
    if (foundUser.length>0){
        req.send(foundUser[0])
        return
    } 
    res.status(404).send('can not find the user!!')      
}
const addAcount=(req,res)=>{
    const newAccount={
        username:req.body.username,
        password:req.body.password
    }
    accounts.push(newAccount)
    res.send(201).send(newAccount);
}

const updateAccount=(req,res)=>{
 const idUser=req.query.id.forEach((elem,i)=>{
     if(i== id){
         elem.username=req.body.usernameelem.password=req.body.password
     }
 })
}
module.exports={getAllUser,getAccount,addAcount,updateAccount}
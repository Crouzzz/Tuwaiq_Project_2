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
    const{email,password}= req.body;
    const foundUser=accounts.find((elem)=>{
        return (elem.email==email && elem.password==password) 
          console.log(foundUser);
    })
    if (foundUser){
        res.send(foundUser)
    } 
    res.status(404).send('can not find the user!!')      
}
const addAcount=(req,res)=>{
    const newAccount={
        userName:req.body.userName,
        password:req.body.password,
        email:req.body.email,
        id:req.body.id
    }
    accounts.push(newAccount)
    res.send(201).send(newAccount);
}

const updateAccount=(req,res)=>{
 const idUser=req.query.id.forEach((elem,i)=>{
     if(i== id){
         elem.userName=req.body.userName
         elem.password=req.body.password
     }
 })
}
module.exports={getAllUser,getAccount,addAcount,updateAccount}
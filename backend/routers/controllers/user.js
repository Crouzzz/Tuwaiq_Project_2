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
// const getAccount=(req,res)=>{
//     const{email,password}= req.body;
//     console.log(req.body)
//     const foundUser=accounts.find((elem)=>{
//         return (elem.email == email && elem.password == password) 
//           console.log(foundUser);
//     })
//     console.log("founduser"+ foundUser)
//     if (foundUser){
//         res.send(foundUser)
//         return
//     } 
//     res.status(404).send('can not find the user!!')      
// }

const getAccount = (req, res) => {
    // console.log(req.body)
    // console.log(user);
    const {nationalID, password} = req.body;
    // console.log("email sent:",email)
    const foundUser = accounts.find( (elem) => {
        // console.log("email in database:", elem.email)
        return (elem.nationalID == nationalID && elem.password == password)
    } );
      //console.log(foundUser);
    if(foundUser)
      res.send(foundUser);
    else
      res.status(404).send("We couldn’t find an account matching the email and password you entered. Please check and try again.");
  };

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

function userInformation(req,res){
    console.log(req.body)
    const info= accounts.find(({id})=> id === parseInt(req.body.id));
    if(info)
    res.send(info)
    else res.status(404).send("error")
}
module.exports={getAllUser,getAccount,addAcount,updateAccount,userInformation}
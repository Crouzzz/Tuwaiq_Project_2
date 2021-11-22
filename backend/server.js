const express = require('express');
const cors = require('cors');
const { userRouter } = require('./routers/routes/userRouter');

const app = express();

//routers

//built-in middlewares
app.use(express.json());


//third-party middleware
// app.use(cors());
app.use('/user',userRouter)
//app routers
// app.get('/',function(req,res){
// 	res.send("HelloWorld")
// })

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});

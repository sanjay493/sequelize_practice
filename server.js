const express= require("express");
const cors=require("cors");
const { application } = require("express");


const app=express()
var corsOptions={
    origin:'https://localhost:4000'
}
//routers

const router=require("./routes/productRoutes")
app.use('/api/products',router)

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}))


//testing api

app.get("/",(req,res)=>{
    res.json({message:"hello api"})
})
//port
const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});
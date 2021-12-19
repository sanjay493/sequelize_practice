const db=require("../models")

//create main model
const Product=db.products
const Review=db.reviews

//main work


//1. create product
const addProduct= async(req, res)=>{
    let info={
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published ? req.body.published:false
    }
    const product= await Product.create(info)
    res.status(200).send(product)
}

//2. get all products
const getAllProducts=async (req,res)=>{
     let product=await Product.findAll({} )
     res.status(200).send(product) 
}

//3. get single products
const getOneProducts=async (req,res)=>{
    let id=req.prams.id
    let product=await Product.findOne({while:{id:id}} )
    res.status(200).send(product) 
}

//4. update products
const updateProducts=async (req,res)=>{
    let id=req.prams.id 
    const products=await Product.update(req.body,{where:{id:id}})
    res.status(200).send(products) 
}

//5. delete products by id
const deleteProducts=async (req,res)=>{
    let id=req.prams.id
    await Product.destroy({where:{id:id}})
    res.status(200).send('Product is deleted') 
}

//6. get published product
const getPublishedProducts=async (req,res)=>{
    const products=await Product.findAll({where:{published:true}})
    res.status(200).send(products) 
}

module.exports={
   addProduct,
   getAllProducts,
   getOneProducts,
   updateProducts,
   deleteProducts,
   getPublishedProducts
}
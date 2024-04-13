import productModel from "../schema/productModel.js";



// Create New Product
export const createProduct = async (req,res)=>{
    try {

        const {name, price, category_id, description} = req.body;
        if(!name || !description || !price){
            return res.status(400).json({message: "Please Enter Name Along with Description and price"})
         }
         if(!category_id){
            return res.status(400).json({ error: "Category ID is required for creating a product." });
         }

         const newProduct = await productModel.create({
            name,
            price, 
            category_id, 
            description
         })
         return res.status(200).json(newProduct);
    } catch(e){
        res.json({message:e.message})
    }

}

// Get All Product under Category
export const getproductbyId = async (req,res)=>{
    try {
        const categoryId = req.params.categoryId;
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10; 

    
    const skip = (page - 1) * limit;

    
    const products = await productModel.find({ category_id: categoryId })
      .skip(skip)
      .limit(limit);

   
     return res.json(products);


    } catch(e){
        res.json({message:e.message})
    }

}
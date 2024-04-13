import categoryModel from "../schema/categoryModel.js";



// Create New Category
export const createCategoryController = async (req,res) =>{
  try {
    const {name, description} = req.body;

    if(!name || !description){
       return res.status(400).json({message: "Please Enter Name Along with Description"})
    }

    const createCateogory = await categoryModel.create({
        name,
        description
    })

    return res.status(200).json(createCateogory);

  } catch(e){
    res.json({message:e.message})
}
}

// Get all Category
export const getAllCategories = async (req,res)=>{
    const { page = 1, limit = 10 } = req.query;
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    try {
        const totalCategories = await categoryModel.countDocuments();
        const totalPages = Math.ceil(totalCategories / limit);

        const categories = await categoryModel.find()
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    res.json({
      categories,
      totalPages,
      currentPage: pageNumber
    });
        
    } 
        catch(e){
            res.json({message:e.message})
        }       


}
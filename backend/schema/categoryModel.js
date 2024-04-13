import mongoose from "mongoose"

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required:true,
    }
})

const categoryModel = mongoose.model("Category", categorySchema);

export default categoryModel;
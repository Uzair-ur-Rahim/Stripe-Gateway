import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const productModel = mongoose.model('Product', productSchema);
export default productModel;

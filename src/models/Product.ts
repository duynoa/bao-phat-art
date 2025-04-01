import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortDesc: { type: String },
  originalPrice: { type: Number, required: true },
  salePrice: { type: Number },
  discountPercent: { type: Number },
  specifications: { type: String },
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Product || mongoose.model('Product', productSchema); 
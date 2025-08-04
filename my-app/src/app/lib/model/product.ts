import { Schema, model, models, Types } from 'mongoose'

export interface IProduct {
  title: string
  description?: string
  price: number
  seller: Types.ObjectId 
}

const productSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
})

export const Product = models.Product || model<IProduct>('Product', productSchema)

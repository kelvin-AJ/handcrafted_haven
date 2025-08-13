import { Schema, model, models, Types } from 'mongoose'

export interface IUser {
  _id : Types.ObjectId | string
  name: string
  email: string
  password: string
  role: 'user' | 'seller'
  dateJoined: Date
  profileImage: string
  bio: string
  rating: number
  title: string
}

const userSchema = new Schema<IUser>({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'seller'], required: true },
  dateJoined: { type: Date, default: Date.now },
  profileImage: { type: String, default: '' },
  bio: { type: String, default: '' },
  rating: { type: Number, default: 0 },
  title: { type: String, default: '' },
})

export const User = models.User || model<IUser>('User', userSchema)

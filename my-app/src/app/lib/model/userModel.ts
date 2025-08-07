import { Schema, model, models } from 'mongoose'

export interface IUser {
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

import { Schema, model, models } from 'mongoose'

export interface IUser {
  name: string
  email: string
  password: string
  role: 'user' | 'seller'
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'seller'], required: true },
})

export const User = models.User || model<IUser>('User', userSchema)

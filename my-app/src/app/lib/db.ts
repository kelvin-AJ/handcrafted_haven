import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URL = process.env.MONGODB_URL as string

export default async function connectTodb() {
  try {
    await mongoose.connect(MONGODB_URL)
    console.log('MongoDB connected ✅')
  } catch (error) {
    console.error('MongoDB connection error ❌:', error)
  }
}

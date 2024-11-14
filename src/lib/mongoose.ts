'use server'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || ''

if (!MONGODB_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local')
}

let mongooseInstance: typeof mongoose | null = null

const connectToDatabase = async () => {
  if (mongooseInstance) {
    return mongooseInstance
  }

  try {
    mongooseInstance = await mongoose.connect(MONGODB_URI, {
      dbName: process.env.DB_NAME,
    })
    console.log('Successfully connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }

  return mongooseInstance
}

export default connectToDatabase

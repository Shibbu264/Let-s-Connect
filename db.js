// utils/db.js
import mongoose from 'mongoose';

let cachedDb = null;

export default async function connectDB() {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
    cachedDb = db;
    return db;
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    throw error;
  }
}

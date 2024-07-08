// routes/register.js
import connectDB from '../../db';
import User from '../../models/User';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  try {
    const db = await connectDB();

    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();


    const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET);

    res.status(201).json({ token });
  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

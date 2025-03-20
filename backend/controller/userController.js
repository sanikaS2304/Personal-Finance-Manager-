import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
  
      user = new User({ username, email, password });
      await user.save();
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, { expiresIn: '1h' });
      res.status(201).json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
};
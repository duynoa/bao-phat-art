import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcryptjs';

interface User extends Document {
  username: string;
  password: string;
  fullName?: string;
  role: 'admin' | 'user';
  isActive: boolean;
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'admin'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password trước khi lưu
userSchema.pre('save', async function(this: User, next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method để so sánh password
userSchema.methods.comparePassword = async function(this: User, candidatePassword: string) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch {
    return false;
  }
};

const User = mongoose.model<User>('User', userSchema);
export default User;
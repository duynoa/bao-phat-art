import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

// Kết nối đến MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Đã kết nối đến MongoDB');
    
    // Import model User
    const userSchema = new mongoose.Schema({
      username: String,
      password: String,
      fullName: String,
      role: String,
      isActive: Boolean,
      createdAt: Date
    });
    
    // Thêm method hash password
    userSchema.pre('save', async function(next) {
      if (!this.isModified('password')) return next();
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    });
    
    const User = mongoose.model('User', userSchema);
    
    // Kiểm tra xem đã có admin chưa
    const existingAdmin = await User.findOne({ role: 'admin' });
    
    if (existingAdmin) {
      console.log('Đã tồn tại tài khoản admin:', existingAdmin.username);
    } else {
      // Tạo admin mới
      const newAdmin = new User({
        username: 'admin',
        password: 'admin123', // Nhớ đổi mật khẩu này sau khi đăng nhập
        fullName: 'Administrator',
        role: 'admin',
        isActive: true,
        createdAt: new Date()
      });
      
      await newAdmin.save();
      console.log('Đã tạo tài khoản admin thành công!');
    }
    
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Lỗi kết nối MongoDB:', err);
    process.exit(1);
  });
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';
// import mongoose from 'mongoose';

export async function POST(req: Request) {
  try {
    console.log('Starting registration process...');
    
    // Kiểm tra MONGODB_URI
    console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
    
    await connectDB();
    console.log('Database connected');

    const body = await req.json();
    console.log('Request body:', body);

    const { username, password, fullName } = body;

    // Kiểm tra các trường bắt buộc
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ thông tin tài khoản và mật khẩu' },
        { status: 400 }
      );
    }

    // Kiểm tra kết nối mongoose

    const existingUser = await User.findOne({ username: username.toLowerCase() });
    console.log('Existing user check result:', existingUser);

    if (existingUser) {
      return NextResponse.json(
        { error: 'Tên tài khoản đã tồn tại' },
        { status: 400 }
      );
    }

    const newUser = new User({
      username: username.toLowerCase(),
      password,
      fullName: fullName || username,
      role: 'user',
      isActive: true
    });

    const savedUser = await newUser.save();
    console.log('New user saved:', savedUser);

    return NextResponse.json({
      success: true,
      user: {
        username: savedUser.username,
        fullName: savedUser.fullName,
        role: savedUser.role
      }
    });

  } catch (error) {
    // Log chi tiết lỗi
    console.error('Registration error:', {
      name: (error as Error).name,
      message: (error as Error).message,
      stack: (error as Error).stack,
      // Nếu là lỗi MongoDB
      code: (error as any).code,
      codeName: (error as any).codeName,
    });
    
    return NextResponse.json(
      { 
        error: 'Có lỗi xảy ra, vui lòng thử lại',
        details: (error as Error).message // Thêm chi tiết lỗi để debug
      },
      { status: 500 }
    );
  }
} 
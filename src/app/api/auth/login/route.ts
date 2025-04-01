import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/db';
import User from '@/models/User';

export async function POST(req: Request) {
  try {
    
    await connectDB();
    
    const { username, password } = await req.json();

    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json(
        { error: 'Tên tài khoản không tồn tại' },
        { status: 401 }
      );
    }

    const isValidPassword = await user.comparePassword(password);

    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Mật khẩu không đúng' },
        { status: 401 }
      );
    }

    // Tạo JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' }
    );

    // Tạo response với cookie
    const response = NextResponse.json({
      success: true,
      user: {
        username: user.username,
        role: user.role
      }
    });

    // Set cookie
    response.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 // 1 day
    });

    return response;

  } catch (error) {
    // Log chi tiết lỗi
    console.error('Chi tiết lỗi đăng nhập:', {
      name: (error as Error).name,
      message: (error as Error).message,
      stack: (error as Error).stack
    });
    
    return NextResponse.json(
      { error: 'Có lỗi xảy ra, vui lòng thử lại' },
      { status: 500 }
    );
  }
}
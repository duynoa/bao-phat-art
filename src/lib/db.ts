import mongoose from 'mongoose';

let isConnected = false;

const connectDB = async () => {
  try {
    // Nếu đã kết nối, không cần kết nối lại
    if (isConnected) {
      console.log('👌 Đã có kết nối MongoDB, sử dụng kết nối hiện tại');
      return;
    }

    const mongoUri = process.env.MONGODB_URI;
    
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000, // Timeout sau 5 giây nếu không thể kết nối
    });
    
    isConnected = true;
    console.log('✅ Kết nối MongoDB thành công!');
  } catch (error) {
    console.error('❌ Lỗi kết nối MongoDB:', error);
    // Không gọi process.exit() ở đây để tránh đóng ứng dụng đột ngột
    // Thay vào đó, ném lỗi để nơi gọi hàm có thể xử lý
    throw new Error(`Không thể kết nối đến cơ sở dữ liệu: ${error instanceof Error ? error.message : String(error)}`);
  }
};

// Thêm hàm đóng kết nối an toàn
const disconnectDB = async () => {
  if (!isConnected) {
    return;
  }
  
  try {
    await mongoose.disconnect();
    isConnected = false;
    console.log('📡 Đã đóng kết nối MongoDB');
  } catch (error) {
    console.error('❌ Lỗi khi đóng kết nối MongoDB:', error);
    throw error;
  }
};

export { disconnectDB };
export default connectDB;
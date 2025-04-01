import { IMAGES } from "@/constants/images";
import Image from "next/image";
import React from "react";

const ProductDetail = () => {
  return (
    <div className="container mx-auto p-4 flex gap-8 min-h-screen">
      {/* Phần hình ảnh bên trái */}
      <div className="flex gap-4 w-1/2 h-fit sticky top-24">
        <div className="flex flex-col gap-4 w-20">
          {[IMAGES.aoPhao1, IMAGES.aoPhao2, IMAGES.aoPhao3, IMAGES.aoPhao4].map(
            (image, index) => (
              <div
                key={index}
                className="w-full aspect-square border rounded-lg overflow-hidden cursor-pointer hover:border-blue-500"
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
            )
          )}
        </div>

        <div className="w-[calc(100%-96px)] aspect-square flex-shrink-0 bg-gray-100 rounded-lg border border-gray-200 ">
          <Image
            src={IMAGES.aoPhao1}
            alt="Main product"
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* Thông tin sản phẩm bên phải */}
      <div className="w-1/2 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Áo Phao Bơi An Toàn
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Áo phao bơi chất liệu cao cấp, thiết kế an toàn, độ nổi cao, phù
              hợp cho hoạt động bơi lội và các môn thể thao dưới nước
            </p>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">290.000₫</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 line-through">350.000₫</span>
              <span className="text-sm px-2 py-1 bg-red-100 text-red-700 rounded">
                Giảm 17%
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 ml-auto">
            <span>⭐</span>
            <span className="text-gray-900">4.8</span>
            <span className="text-gray-500">(156 đánh giá)</span>
          </div>
        </div>

        {/* Thông số kỹ thuật */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Thông số kỹ thuật</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• Chất liệu: Vải Oxford cao cấp, chống thấm nước</p>
            <p>• Độ nổi: 7.5kg - 15kg</p>
            <p>• Phù hợp cân nặng: 30kg - 60kg</p>
            <p>• Tiêu chuẩn an toàn: ISO 12402-5</p>
            <p>• Có còi báo động khẩn cấp</p>
            <p>• Dây đai điều chỉnh: 3 vị trí</p>
          </div>
        </div>

        {/* Thay thế phần giỏ hàng bằng thông tin liên hệ */}
        <div className="space-y-4">
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Liên hệ mua hàng
            </button>

            <div className="space-y-2 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">
                Thông tin liên hệ:
              </h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Hotline: 0123.456.789</span>
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>Email: contact@example.com</span>
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

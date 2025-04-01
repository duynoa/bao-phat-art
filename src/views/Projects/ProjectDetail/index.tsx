import React from "react";
import { IMAGES } from "@/constants/images";
import Image from "next/image";

const ProjectDetail = () => {
  return (
    <div className="container mx-auto px-4 max-w-7xl flex flex-col gap-4">
      <div className="text-title1 font-bold uppercase mt-4 text-gray-900">
        Dự án Nhà phố Quảng Ngãi
      </div>
      <div className="w-full h-[500px] overflow-hidden rounded-lg mb-6">
        <Image
          src={IMAGES.nhapho1}
          alt="Dự án Đồng Văn Đoan"
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-600 uppercase">
            Địa chỉ:
          </span>
          <span className="text-base text-gray-800">
            Thành phố Quảng Ngãi - Tỉnh Quảng Ngãi
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-600 uppercase">
            NĂM HOÀN THÀNH:
          </span>
          <span className="text-base text-gray-800">2020</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-600 uppercase">
            Loại hình:
          </span>
          <span className="text-base text-gray-800">Nhà phố</span>
        </div>
      </div>
      <div>
        <div className="text-title1 font-bold uppercase my-4 text-gray-900">
          Tóm tắt dự án
        </div>
        <div className="text-body1 text-gray-600">
          Dự án Nhà phố Quảng Ngãi là một công trình nhà ở hiện đại, 
          được thiết kế với phong cách đương đại sang trọng. Với diện tích 
          xây dựng 100m², công trình gồm 4 tầng với đầy đủ công năng: phòng 
          khách, bếp, phòng ngủ và sân thượng. Thiết kế phù hợp với khí hậu 
          miền Trung, tối ưu ánh sáng tự nhiên cùng với không gian xanh tạo 
          nên một không gian sống lý tưởng cho gia đình.
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

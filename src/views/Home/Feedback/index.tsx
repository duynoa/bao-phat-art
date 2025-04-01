"use client";
import React, { useState } from "react";

const feedbackData = [
  {
    id: 1,
    name: "Anh Quang Minh",
    project: "BIỆT THỰ VINHOMES",
    content: "Tôi rất hài lòng với dịch vụ thiết kế và thi công hồ bơi của công ty. Đội ngũ kỹ sư chuyên nghiệp, tư vấn tận tình và có trách nhiệm. Hồ bơi được hoàn thiện đúng tiến độ, chất lượng vượt mong đợi. Không gian sống của gia đình tôi đã trở nên đẳng cấp và tiện nghi hơn rất nhiều."
  },
  {
    id: 2,
    name: "Chị Thu Hương",
    project: "VILLA ĐÀ LẠT",
    content: "Dịch vụ thiết kế sông hơi của công ty thực sự xuất sắc. Từ khâu tư vấn đến thi công đều rất chuyên nghiệp. Đặc biệt ấn tượng với việc đội ngũ kỹ thuật đã tối ưu được không gian và tạo nên một khu sông hơi độc đáo, phù hợp với khí hậu Đà Lạt."
  },
  {
    id: 3,
    name: "Anh Đức Thắng",
    project: "NHÀ PHỐ QUẬN 7",
    content: "Cảm ơn công ty đã giúp tôi hiện thực hóa ước mơ về một căn nhà phố hiện đại và tiện nghi. Thiết kế thông minh tối ưu công năng, thi công nhanh chóng và chất lượng. Đặc biệt ấn tượng với hệ thống hồ bơi mini được tích hợp hoàn hảo trên sân thượng."
  },
  {
    id: 4,
    name: "Chị Minh Anh",
    project: "BIỆT THỰ NGHỈ DƯỠNG PHÚ QUỐC",
    content: "Thiết kế và thi công hồ bơi vô cực của công ty thật sự xuất sắc. View nhìn ra biển tuyệt đẹp, chất lượng thi công đạt chuẩn quốc tế. Đội ngũ kỹ sư đã tư vấn rất tận tâm để chọn được giải pháp tối ưu nhất cho địa hình đặc thù của dự án."
  },
  {
    id: 5,
    name: "Anh Hoàng Nam",
    project: "PENTHOUSE LANDMARK 81",
    content: "Ấn tượng với thiết kế sông hơi độc đáo và sang trọng. Công ty đã xử lý xuất sắc các thách thức kỹ thuật khi thi công ở tầng cao. Chất lượng hoàn thiện rất tốt, đảm bảo an toàn tuyệt đối và tạo không gian thư giãn tuyệt vời."
  },
  {
    id: 6,
    name: "Chị Thanh Thảo",
    project: "BIỆT THỰ COMPOUND Q9",
    content: "Tôi đánh giá cao sự sáng tạo trong thiết kế và sự tỉ mỉ trong thi công của công ty. Khu vực hồ bơi và sông hơi được tích hợp hài hòa trong tổng thể sân vườn. Chất lượng nước luôn trong xanh nhờ hệ thống lọc hiện đại."
  }
];

const Feedback = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(feedbackData[0]);

  return (
    <div className="flex flex-col gap-10 md:gap-20 bg-bg-partner bg-gray-100 bg-repeat py-6 md:py-10">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
          <div className="text-gray-900 text-2xl md:text-4xl font-bold">
            Đánh giá từ những <br className="hidden md:block" /> khách hàng tin tưởng
            <h3 className="text-primary">,,,,,,,,</h3>
          </div>
          <label className="w-full md:w-[488px] text-base md:text-lg font-medium text-gray-600">
            Khách hàng chia sẻ về trải nghiệm và sự hài lòng khi sử dụng dịch vụ thiết kế, thi công của chúng tôi.
          </label>
        </div>
        <div className="flex gap-4 md:gap-10">
          <h2 className="text-6xl md:text-9xl text-primary">&quot;</h2>
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-base md:text-lg text-gray-900">
              {selectedFeedback.content}
            </h3>
            <h2 className="text-sm md:text-base uppercase font-semibold text-gray-900">
              {selectedFeedback.name} - {selectedFeedback.project}
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-6">
          {feedbackData.map((feedback) => (
            <button
              key={feedback.id}
              onClick={() => setSelectedFeedback(feedback)}
              className={`text-gray-800 p-2 text-sm md:text-base rounded-full border font-medium transition-all ${
                selectedFeedback.id === feedback.id
                  ? "bg-primary text-white"
                  : "bg-[#fff8f8] hover:bg-gray-100"
              }`}
            >
              {feedback.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;

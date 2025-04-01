import React from 'react'
import Image from 'next/image'
import { IMAGES } from '@/constants/images'
// import { FaRegLightbulb, FaRegClock, FaRegCheckCircle, FaChevronRight } from 'react-icons/fa'

const ServiceDetail = () => {
  const features = [
    {
    //   icon: <FaRegLightbulb className="w-8 h-8" />,
      title: "Thiết kế sáng tạo",
      description: "Đội ngũ thiết kế giàu kinh nghiệm, mang đến những ý tưởng độc đáo và phù hợp"
    },
    {
    //   icon: <FaRegClock className="w-8 h-8" />,
      title: "Tiến độ cam kết",
      description: "Đảm bảo hoàn thành dự án đúng thời hạn với chất lượng tốt nhất"
    },
    {
    //   icon: <FaRegCheckCircle className="w-8 h-8" />,
      title: "Chất lượng hàng đầu",
      description: "Sử dụng vật liệu cao cấp và đội ngũ thi công chuyên nghiệp"
    }
  ]

  const projects = [
    {
      image: "/images/project1.jpg",
      title: "Hồ bơi biệt thự Palm",
      location: "Quận 2, TP.HCM"
    },
    {
      image: "/images/project2.jpg",
      title: "Hồ bơi Resort Sunshine",
      location: "Nha Trang"
    },
    {
      image: "/images/project3.jpg",
      title: "Hồ bơi Villa Sea View",
      location: "Vũng Tàu"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section với Video Background */}
      <div className="relative h-[calc(100vh-72px)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hoboi1}
            alt="Hồ bơi sang trọng"
            width={1920}
            height={1080}
            className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="p-6 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/10">
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">Thiết Kế & Thi Công Hồ Bơi Chuyên Nghiệp</h1>
              <p className="text-xl text-gray-200 mb-8">Kiến tạo không gian thư giãn đẳng cấp với công nghệ hiện đại và đội ngũ chuyên gia hàng đầu</p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                Liên hệ ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                {/* <div className="text-blue-600 mb-6">{feature.icon}</div> */}
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Quy Trình Thực Hiện</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
            <div className="space-y-20">
              {[1, 2, 3, 4].map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-12">
                    <div className={`bg-white p-8 rounded-2xl shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-blue-600 text-5xl font-bold mb-4">0{step}</div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Bước {step}</h3>
                      <p className="text-gray-600">Mô tả chi tiết về bước thực hiện này...</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Dự Án Tiêu Biểu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-3xl p-16 text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Bắt đầu dự án của bạn</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Hãy để chúng tôi giúp bạn hiện thực hóa ý tưởng về không gian hồ bơi trong mơ
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
              Liên hệ tư vấn
              {/* <FaChevronRight className="ml-2" /> */}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail

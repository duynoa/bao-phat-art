import React from 'react'
import Card from '@/components/Card'
import { IMAGES } from '@/constants/images'
const Services = () => {
  const services = [
    { 
      image: IMAGES.hoboi1,
      title: 'Thiết kế và thi công hồ bơi',
      description: 'Chúng tôi cung cấp dịch vụ thiết kế và thi công hồ bơi chuyên nghiệp, đảm bảo chất lượng và thẩm mỹ cao.',
      lineClamp: 4
    },
    { 
      image: IMAGES.banner1,
      title: 'Thiết kế và thi công phòng xông hơi',
      description: 'Dịch vụ thiết kế và thi công phòng xông hơi với công nghệ hiện đại, mang đến không gian thư giãn tuyệt vời.',
      lineClamp: 4
    },
    { 
      image: IMAGES.nhapho1,
      title: 'Thiết kế và thi công nhà phố',
      description: 'Chúng tôi chuyên thiết kế và thi công nhà phố với kiến trúc đẹp, phù hợp với nhu cầu và phong cách của khách hàng.',
      lineClamp: 4
    }
  ]

  return (
    <div className='container py-10 px-4 xl:px-0'>
      <h2 className='text-title1 font-bold uppercase text-center mb-4 text-gray-900'>Dịch vụ chúng tôi cung cấp</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {services.map((service, index) => (
          <div key={index} className='grid-cols-3 grid-rows-3'>
            <Card 
              href={`/dich-vu/${service.title}`}
              image={service.image}
              title={service.title}
              description={service.description}
              lineClamp={service.lineClamp}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services

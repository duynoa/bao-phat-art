import Card from "@/components/Card";
import React from "react";
import { IMAGES } from "@/constants/images";

const productsData = [
  {
    id: 1,
    title: "Máy Lọc Hồ Bơi Cao Cấp",
    description: "Máy lọc công suất lớn, công nghệ Đức, phù hợp cho hồ bơi từ 50-200m³. Tích hợp hệ thống điều khiển thông minh, tiết kiệm điện năng.",
    image: IMAGES.mayloc,
    href: "/san-pham/may-loc-ho-boi-cao-cap"
  },
  {
    id: 2,
    title: "Đèn LED Hồ Bơi",
    description: "Bộ đèn LED RGB đổi màu cao cấp, chống nước IP68, điều khiển từ xa. Tạo không gian bơi lội lung linh trong đêm.",
    image: IMAGES.denled,
    href: "/san-pham/den-led-ho-boi"
  },
  {
    id: 3,
    title: "Vòi Phun Massage",
    description: "Hệ thống vòi phun massage cao cấp cho sông hơi. Thiết kế hiện đại, áp lực nước mạnh mẽ, dễ dàng điều chỉnh cường độ.",
    image: IMAGES.voiphun,
    href: "/san-pham/voi-phun-massage"
  },
  {
    id: 4,
    title: "Gạch Hồ Bơi Chống Trượt",
    description: "Gạch mosaic cao cấp chuyên dụng cho hồ bơi, chống trượt cấp độ cao, đa dạng màu sắc và họa tiết.",
    image: IMAGES.gach,
    href: "/san-pham/gach-ho-boi-chong-truot"
  },
  {
    id: 5,
    title: "Máy Bơm Nhiệt",
    description: "Thiết bị gia nhiệt nước thông minh, tiết kiệm năng lượng. Tự động duy trì nhiệt độ nước lý tưởng cho bơi lội.",
    image: IMAGES.maybom,
    href: "/san-pham/may-bom-nhiet"
  },
  {
    id: 6,
    title: "Cầu Thang Hồ Bơi",
    description: "Cầu thang inox 304 cao cấp, thiết kế chắc chắn, chống gỉ sét, dễ dàng lắp đặt và vệ sinh.",
    image: IMAGES.cauThang,
    href: "/san-pham/cau-thang-ho-boi"
  },
  {
    id: 7,
    title: "Hệ Thống Tạo Sóng",
    description: "Thiết bị tạo sóng chuyên nghiệp, tạo cảm giác bơi thực tế như ngoài biển. Điều chỉnh được cường độ sóng.",
    image: IMAGES.taosong,
    href: "/san-pham/he-thong-tao-song"
  },
  {
    id: 8,
    title: "Hóa Chất Xử Lý Nước",
    description: "Bộ sản phẩm hóa chất xử lý nước cao cấp, đảm bảo nước hồ bơi luôn trong xanh, an toàn cho người sử dụng.",
    image: IMAGES.hoachat,
    href: "/san-pham/hoa-chat-xu-ly-nuoc"
  }
];

const Products = () => {
  return (
    <div className="px-4 xl:px-0 container mx-auto max-w-screen-xl flex flex-col gap-8 justify-center items-center py-16">
      <div className="text-4xl font-bold text-gray-900">Sản Phẩm</div>
      <div className="text-lg text-gray-600 text-center max-w-2xl">
        Cung cấp đầy đủ các thiết bị và phụ kiện cao cấp cho hồ bơi và sông hơi, 
        đảm bảo chất lượng và độ bền cao
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            href={product.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

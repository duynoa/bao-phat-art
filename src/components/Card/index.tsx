import { IMAGES } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
  className,
  lineClamp,
  title,
  description,
  href,
  image,
}: {
  className?: string;
  lineClamp?: number;
  title?: string;
  description?: string;
  href?: string;
  image?: string;
}) => {
  return (
    <Link
      href={href || "#"}
      className={`h-full flex flex-col flex-1 bg-white border rounded-3xl shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      <div className="p-4">
        <Image
          src={image || IMAGES.gray}
          alt="carousel1"
          width={384}
          height={296}
          className="w-full h-full object-cover rounded-2xl aspect-[3/2]"
        />
      </div>

      <div className="px-5 pb-5 flex flex-col gap-4">
        <h2 className="font-title1 font-bold text-gray-600 line-clamp-2">{title}</h2>
        <p
          className={`font-body2 text-gray-600 ${
            lineClamp ? `line-clamp-${lineClamp}` : "line-clamp-3"
          }`}
        >
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Card;

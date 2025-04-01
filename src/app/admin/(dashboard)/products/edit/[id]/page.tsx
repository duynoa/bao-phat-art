"use client";
import ProductForm from '@/viewsAdmin/Products/ProductForm';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EditProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error('Lỗi khi lấy thông tin sản phẩm:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <ProductForm initialValues={product} isEditing={true} />
    </div>
  );
};

export default EditProductPage;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import LoadingSkeleton from './LoadingSkeleton';

const Product_List = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('https://dummyjson.com/products?limit=100');
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  
  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
      
    </div>
  );
};

export default Product_List;

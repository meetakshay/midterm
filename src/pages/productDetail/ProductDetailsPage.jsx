import React, { useEffect, useState } from "react";

import "./ProductDetailsPage.css";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";



const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/" + id);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("An error Occurred on Fetching Data", error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          // className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
      {product && (
        <div className="product-detail-wrapper" key={product.id}>
          <div className="product-image-wrapper">
            <img
              className="product-image"
              src={product.image}
              alt="Product Image"
            />
          </div>
          <div className="product-info-details">
            <div className="product-info-wrapper">
              <h1>{product.title}</h1>
              <p className="product-description">{product.description}</p>
              <h4 className="product-price">${product.price}</h4>
            </div>

          
          </div>
        </div>
      )}
</motion.div>
    </>
  );
};

export default ProductDetailsPage;

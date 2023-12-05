// Products.js
import React, { useEffect } from 'react';
import { add } from '../Store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../Store/productSlice';
import { STATUSES } from '../Store/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h3 className="py-5 text-2xl font-semibold text-center">Loading....</h3>;
  }
  if (status === STATUSES.ERROR) {
    return <h3 className="py-5 text-2xl font-semibold text-center">Something Went Wrong....</h3>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-whitesmoke">
      {products.map((product) => (
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col" key={product.id}>
          <img src={product.image} alt="" className="h-40 w-auto mx-auto mb-2" />
          <h4 className="text-lg font-semibold">{product.title}</h4>
          <h5 className="text-gray-700">${product.price}</h5>
          <button onClick={() => handleAdd(product)} className="mt-auto hover:bg-purple-700 hover:text-white font-semibold py-1 px-2 pr-2 w-full rounded-lg bg-blue-500 text-white">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;

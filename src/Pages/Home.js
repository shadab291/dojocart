import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, STATUSES } from '../Store/productSlice'; // Updated import
import EnquiryForm from "../Common/EnquiryForm"
import RunningName from "../Pages/RunningName"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  const status = useSelector((state) => state.product.status);

  const [hoveredDescription, setHoveredDescription] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(loadProducts()); // Using 'loadProducts' instead of 'fetchproducts'
  }, [dispatch]);

  return (
    <div className="bg-gray-100">
      <Container className="py-8">
        <Typography variant="h2" component="h1" gutterBottom>
          <span className="sm:inline-flex animate-jump h-20 pt-2 font-serif ">
          <marquee >Welcome to DojoCart</marquee>
          </span>
        </Typography>
        <Typography variant="h5" gutterBottom>
          Grab Best deals from best brands!!!
        </Typography>
          <EnquiryForm/>
          <RunningName/>
      </Container>
      <div className="mx-auto max-w-screen-lg px-4">
        {status === STATUSES.LOADING && <p>Loading...</p>}
        {status === STATUSES.ERROR && <p>Error occurred while fetching data</p>}
        {status === STATUSES.IDLE && (
          <Carousel
            responsive={responsive}
            infinite={true}
            itemClass="carousel-item-padding-10-px"
            dotListClass="custom-dot-list-style"
            autoPlaySpeed={3000}
            centerMode={true}
            autoPlay={true}
          >
            {products.map((item) => (
              <div
                className="description-row p-4 md:p-2 lg:p-4"
                key={item.id}
                onMouseEnter={() => setHoveredDescription(item.description)}
                onMouseLeave={() => setHoveredDescription(null)}
              >
                <img
                  className="container mx-auto product-image"
                  src={item.image}
                  alt={item.title}
                />
                {hoveredDescription && hoveredDescription === item.description && (
                  <p className="text-black text-md">{item.description}</p>
                )}
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}

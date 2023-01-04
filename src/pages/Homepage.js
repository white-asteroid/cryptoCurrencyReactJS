import React from "react";
import Banner from '../components/home/Banner';
import Pagination from '../components/home/Pagination';
import Coinstable from '../components/CoinsTable';


const Homepage = () => {
  return (
    <>
      <Banner />
      <Coinstable />
      <Pagination/>
    </>
  );
};

export default Homepage;

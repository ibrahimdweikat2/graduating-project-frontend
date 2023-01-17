import React from 'react'
import HomeSection from './HomeSection/HomeSection';
import HomeDetailsSection from './HomeSection/HomeDetailsSection';
import BestSeller from '../BestSellier/BestSeller'
import Rated from '../TopRated/Rated'
const Home = () => {
  return (
    <div>
      <HomeSection />
      <HomeDetailsSection />
      <BestSeller/>
      <Rated/>
    </div>
  )
}

export default Home
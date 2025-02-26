import { Link } from 'react-router';

import SkiHouse from '../skihouse/SkiHouse';          
import Coach from '../coach/Coach';                   
import Order from '../order/Order';   

import BackToTopButton from '../../components/BackToTopButton';
import BannerSection from './homeComps/BannerSection';
import ServicesSection from './homeComps/ServicesSection';
// 不知道為什麼用 SwiperSection一直因為大寫開頭就會莫名其妙的報錯###
import SwiperSection from './homeComps/swiperSection';
import SkiHouseSection from './homeComps/SkiHouseSection';
import ArticleSection from './homeComps/ArticleSection';



import './Home.scss';

function Home() {

  return (
    <>
    <main className="bg-gray-05">
      <BackToTopButton />
    {/* banner */}
      <BannerSection />
    {/* 提供的服務 */}
      <ServicesSection />
    {/* 教練 */}          
      <SwiperSection />
    {/* 雪場 */}  
      <SkiHouseSection />
    {/* 文章 */}
      <ArticleSection />
    </main>
    </>
  )
}

export default Home

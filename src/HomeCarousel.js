import React from 'react'
import { Container } from 'react-bootstrap';
// import IMAGES from './Imagefile'
import {Row,Col} from 'react-bootstrap';
import Image1 from './images/opencar.jpg'
import Image2 from './images/opencar1.jpg'
import Image3 from './images/opencar2.jpg'
import Image4 from './images/SNKRZ.jpg'
import Image5 from './images/WWWLands.jpg'
import Image6 from './images/ghir.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation,Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Navbrands from './Navbrands';

const HomeCarousel = () => {
  return (
    <>
     <Container fluid className='carousel-background container_padding'>
    <Row>
      <Col md={12} className="align-carousel">
     <h1> Explore, collect, and sell NFTs</h1>
     
      </Col>
    </Row>
   <Row>
   <Col md={12} className="carousal-padding">
    {/* <Carousel cols={3} rows={1} gap={10} loop>
      <Carousel.Item>

        <img src={imag} className=" ms-2"  alt='/'/> 
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> 
      </Carousel.Item>
      {/* <Carousel.Item>

        <img src={imag} className=" ms-2"  alt='/'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      
      {/* </Carousel> */}
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        // loop={true}
        // loopFillGroupWithBlank={true}
        autoplay={{
          delay: 3500,
           disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper "
      >
      {/* <img src={IMAGES.Image1} alt=""/> */}
        <SwiperSlide>
        {/* <img src={IMAGES.Image1} alt=""/> */}
        <img src={Image4} className="   zoom img-fluid"  alt='/'/> 
        <span className="bottom-left"><b>THE SANKRZ NFT</b><p>Floor:1800 KLAY</p></span>
        </SwiperSlide>
       
        <SwiperSlide><img src={Image1} className=" img-fluid"  alt='/'/> </SwiperSlide>
        <SwiperSlide><img src={Image2} className=" img-fluid"  alt='/'/> </SwiperSlide>
        <SwiperSlide><img src={Image3} className=" img-fluid"  alt='/'/></SwiperSlide>
        <SwiperSlide><img src={Image4} className=" img-fluid"  alt='/'/></SwiperSlide>
        <SwiperSlide><img src={Image5} className=" img-fluid"  alt='/'/></SwiperSlide>
        <SwiperSlide><img src={Image6} className=" img-fluid"  alt='/'/></SwiperSlide>
        
      </Swiper>
    </Col> 
    </Row> 
     </Container>
   <Navbrands/>
  </>
  )
}
export default HomeCarousel;
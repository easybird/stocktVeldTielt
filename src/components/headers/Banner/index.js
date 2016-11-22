import React from "react"

import Carousel from '../../Carousel';

const Banner = () => (
  <Carousel autoplayInteval={4500} indicator={true} switcher={true}>
    <div>
      <img src="/assets/img/banner/test_foto_1.jpg" />
    </div>
    <div>
      <img src="/assets/img/banner/test_foto_2.jpg" />
    </div>
    <div>
      <img src="/assets/img/banner/test_foto_3.jpg" />
    </div>
  </Carousel>
);

export default Banner

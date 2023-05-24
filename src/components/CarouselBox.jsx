import React from 'react';

import image1 from '../image/image1.jpg';
import image2 from '../image/image2.jpg';
import image3 from '../image/image3.jpg';

const CarouselBox = () => {
  return (
    <div class="slider">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        {/* <!-- Wrapper for slides --> */}
        <div class="carousel-inner">
          <div class="item active">
            <img src={image1} alt="Pudge" />
          </div>

          <div class="item">
            <img src={image2} alt="El_Padjino" />
          </div>

          <div class="item">
            <img src={image3} alt="Pidjak" />
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default CarouselBox;

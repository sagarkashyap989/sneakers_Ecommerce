import React from 'react'

import img1 from './../../images/image-product-1.jpg'
import img2 from './../../images/image-product-2.jpg'
import img3 from './../../images/image-product-3.jpg'
import img4 from './../../images/image-product-4.jpg'


const Slide = () => {
  return (
    <section class="slide">
    <div>

      <div class="slide__col1 slide__grid ">
        <div class="slide__container slide__grid__col1 ">
          <div class="slide__grid__col1 slide__mySlides  ">
            <img src={img1} alt="" />
          </div>
          <div class="slide__grid__col1 slide__mySlides ">
            <img src={img2} alt="" />
          </div>
          <div class="slide__grid__col1 slide__mySlides ">
            <img src={img3} alt="" />
          </div>
          <div class="slide__grid__col1 slide__mySlides ">
            <img src={img4} alt="" />
          </div>


          <a class="slide__grid__prev" onclick="plusSlides1(-1)"><svg width="12" height="18"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
            </svg></a>
          <a class="slide__grid__next" onclick="plusSlides1(1)"><svg width="13" height="18"
              xmlns="http://www.w3.org/2000/svg">
              <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
            </svg></a>


        </div>
        <div class="slide__grid__col2 dots" onclick="currentSlide1(1)"></div>
        <div class="slide__grid__col3 dots" onclick="currentSlide1(2)"></div>
        <div class="slide__grid__col4 dots" onclick="currentSlide1(3)"></div>
        <div class="slide__grid__col5 dots" onclick="currentSlide1(4)"></div>
      </div>


    </div>
  </section>
  )
}

export default Slide
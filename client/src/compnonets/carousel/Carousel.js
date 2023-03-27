import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";



import img1 from "../../images/introImage-1.webp"
import img2 from "../../images/image-product-1.jpg"
import img3 from "../../images/introImage-1.webp"
import img4 from "../../images/introImage-1.webp"



const Carousel = ({slideDuration, autoPlay, showBullets ,showNavs }) => {
  
  const images =[img1, img2, img3, img4]
   

  return (
    <section class={`carousel m-w-[801px]  carousel hide-for-desktop md:hidden `}>
    {console.log(autoPlay)}
<div>
      <SimpleImageSlider
        height={317}
        images={images}
        showBullets={showBullets}
        showNavs={showNavs}
        slideDuration={slideDuration}
        autoPlay={autoPlay}

      />
    </div>
   
  </section>
  )
}

export default Carousel
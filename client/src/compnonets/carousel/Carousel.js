import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";



const Carousel = ({slideDuration, autoPlay, showBullets ,showNavs, images }) => {
  
  // const images =[img1, img2, img3, img4]
   

  return (
    <section class={`carousel m-w-[801px]  carousel hide-for-desktop md:hidden `}>
    {console.log(images, 'imagesds')}
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
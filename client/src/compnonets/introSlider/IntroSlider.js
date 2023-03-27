import SimpleImageSlider from "react-simple-image-slider";




import img1 from "../../images/image-product-1.jpg"
import img2 from "../../images/image-product-2.jpg"
import img3 from "../../images/image-product-3.jpg"
import img4 from "../../images/image-product-4.jpg"

const images =[img1, img2, img3, img4]


const IntroSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        
        height={317}
        images={images}
        showNavs={true}
        slideDuration={0.5}
        autoPlay={true}
        showBullets={true}

      />
    </div>
  );
}

export default IntroSlider
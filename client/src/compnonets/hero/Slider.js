import React from 'react'

const Slider = ({img}) => {
  console.log(img[0])
  return (
    <div className="hide-for-mobile">

      <div class="hero__col1 hero__grid "    id="showSlideBtn">
        {/* <div class="hero__grid__col1"></div> */}
      <div  style={{ backgroundImage:  `url(${img[0]})`}} class={`hero__grid__col1 `}></div>

        <div style={{ backgroundImage:  `url(${img[1]})`}}   class="hero__grid__col2"></div>
        <div style={{ backgroundImage:  `url(${img[2]})`}}  class="hero__grid__col3"></div>
        <div style={{ backgroundImage:  `url(${img[3]})`}}  class="hero__grid__col4"></div>
        <div style={{ backgroundImage:  `url(${img[3]})`}}  class="hero__grid__col5"></div>
      </div>


    </div>
  )
}

export default Slider
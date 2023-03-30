import React from 'react'

const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button>
        
        <div class="carousel__prev" onclick="plusSlides(-1)"><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"></path>
  </svg></div>
    </button>;
  };

export default CustomLeftArrow
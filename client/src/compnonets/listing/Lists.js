import React, {useRef,useState, useLayoutEffect} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};


const Lists = ({products, drag }) => {


    const ref = useRef(null);

    const [width, setWidth] = useState(0);
  
    useLayoutEffect(() => {
      setWidth(ref.current.offsetWidth);
    }, []);

  const  swipeable = width > 464? true: false;
  console.log(swipeable)
    return (
        <section ref={ref} className=' h-[400px] my-6'>

            <div className=' md:max-w-[909px] mx-auto'>

        <div className="">

                <h2 className='text-[24px] font-semibold m-[15px] md:m-0 lg:m-0 '> New Arrivals</h2>
        </div>

                <div className='bg-white my-[20px] '>
 
                    <Carousel  swipeable = {swipeable}  responsive={responsive} removeArrowOnDeviceType={[ "mobile"]} className="">





                        


        {
            products.map((product, index)=>{
                const {brand, disc, discount, images, likes, name, price, reviews, size, stock,_id } = product;
                return (
<Link to={`/product/${_id}`}>
<div className='space-y-2 px-4'>

<div className="max-w-[220px] max-h-[220px]">
    <img  draggable="false" src={images[0]} alt="" srcset="" />
</div>

<div className=""><p className='text-[12px]vendor text-[#aba6a6]'>{brand}</p>

    <div className="item_name ">{name}</div>
</div>

<div className="price">₹ {price}</div>
</div>
</Link>
                )
            })
        }




                        



                    </Carousel>

                </div>



            </div>





        </section>
    )
}

export default Lists

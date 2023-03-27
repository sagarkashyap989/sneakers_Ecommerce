import React,{useEffect, useState} from 'react'
import Slider from './Slider'
import Iteminfo from './Iteminfo'
import Price from './Price'
import Size from './Size'
import { connect } from 'react-redux'
import { load_products } from './../../state/action-creators/product';
import axios from 'axios'
import { addCart } from '../../state/action-creators/cart'

import { useParams, Link } from 'react-router-dom'
const Hero = ({ products, liked_id, isAuthenticate, loading, addCart }) => {
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [totalItem, setTotalItem] = useState(0);
  const [currentSize, setCurrentSize] = useState(0);

  const { id } = useParams()
  if(loading ){
    return <h1>loading...</h1>
  }

  

  let isLiked = false;
   
    
  console.log(products)
  const product = products.find(element => element._id === id)
  console.log(product)
  const { brand, disc, discount, images, likes, name, price, reviews, size, stock, _id } = product ?? {};

  
  console.log(images)
  console.log(isAuthenticate, liked_id, "ldskfjdklfsj;")
  if (isAuthenticate && likes) {
    console.log(likes)
    const liked = likes.find(item => item.user === liked_id._id);
    if (liked) {
      isLiked = true;
    }
    console.log(liked)
    console.log(isLiked)
  }
 

  
  const handleSize = (e) =>{
    setCurrentSize(e);
  }
  
  const handleQuantity =(e) =>{
    setCurrentQuantity(e);
  }

  const handleSubmit = () =>{
    addCart({id:_id, name, image:images[0], currentSize, currentQuantity, price, totalPrice: price* currentQuantity  })
  }
  return (
    <main class="hero container__x relative">

     <div className=" justify-center w-[100%] flex gap-6">

<Slider img={images} />


<div class="hero__col2">


  <Iteminfo brand={brand} id={_id} name={name} price={price} discount={discount} liked={isLiked} />


  <Size currentSize={currentSize} handleQuantity={handleQuantity} handleSize={handleSize} />


  <Price quantity={currentQuantity} handleQuantity={handleQuantity}  handleSubmit={handleSubmit}/>



</div>

</div>

    </main>
  )
}



const mapStateToProps = state => ({
  products: state.product.products,
  liked_id: state.register.user,
  isAuthenticate: state.register.isAuthenticate,
  loading: state.product.loading
})

export default connect(mapStateToProps, {addCart})(Hero)
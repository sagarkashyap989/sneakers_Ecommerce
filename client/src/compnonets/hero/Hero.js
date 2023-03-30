import React,{useEffect, useState} from 'react'
import Slider from './Slider'
import Iteminfo from './Iteminfo'
import Price from './Price'
import Size from './Size'
import { connect } from 'react-redux'
import { load_products } from './../../state/action-creators/product';
import axios from 'axios'
import { addCart } from '../../state/action-creators/cart'
import { setPathProduct } from '../../state/action-creators/path'
import { useParams, Link } from 'react-router-dom'
import Spinner from '../layout/spinner'
import Carousel from '../carousel/Carousel'
const Hero = ({ products, liked_id, isAuthenticate, loading, addCart, setPathProduct }) => {
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [totalItem, setTotalItem] = useState(0);
  const [currentSize, setCurrentSize] = useState(0);

  const { id } = useParams()
  const product = products && products.find(element => element._id === id)
  const { brand, disc, discount, images, likes, name, price, reviews, size, stock, _id } = product ?? {};

  useEffect(() => {
    setPathProduct({con:name, path:`/product/{u_id}`})
  }, [products])
  

  if(loading ){
    return <Spinner />
  }

  

  let isLiked = false;
   
    
  console.log(products)
  console.log(product)
  
  
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
  return (loading && products !==null) ?(<Spinner/>):( 
    <>
      <Carousel showBullets={true} slideDuration={0.5} autoPlay={false} showNavs={true} images={images}/>
      
    </>
  ) }




const mapStateToProps = state => ({
  products: state.product.products,
  liked_id: state.register.user,
  isAuthenticate: state.register.isAuthenticate,
  loading: state.product.loading
})

export default connect(mapStateToProps, {addCart, setPathProduct})(Hero)
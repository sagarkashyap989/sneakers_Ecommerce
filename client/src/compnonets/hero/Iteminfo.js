import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { toggle_like } from '../../state/action-creators/product';
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import {connect} from 'react-redux'
import {useNavigate} from 'react-router-dom'
const Iteminfo = ({brand, id, name, price, discount, liked, toggle_like, isAuthenticate}) => {

  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

 useEffect(() => {
   setIsLiked(liked)
   
 }, [])
 
 const handleClick = () =>{
  setIsLiked(!isLiked);
  console.log(isAuthenticate, "isAuthenticate")
  if(!isAuthenticate){
    navigate('/login')
    console.log("navigate rN")
  }else{
    
  toggle_like(id);
  console.log('handleClick ran  ')
  }
  
 }
  return (
    <>
         <div className="flex justify-between items-center">
          <h4>{brand}</h4>

          {
            isLiked? <AiFillHeart className="text-[24px] transition ease-in-out " onClick={()=> handleClick()}/> :     <AiOutlineHeart className= 'text-[24px] transition ease-in-out'  onClick={()=> handleClick()}/>
          }
        </div>

        <h2 className='py-2'>

          {name}
        </h2>


        <div class="hero__col2__price_section">

          <h3 className='text-[18px]'> ${price} <sup class="span text-[12px]">{discount}%</sup></h3>


        </div>
    </>
  )
}

const mapStateToProps = state=> ({
  
  isAuthenticate : state.register.isAuthenticate
})

export default connect(mapStateToProps, {toggle_like})(Iteminfo)
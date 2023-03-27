import React from 'react'
import {BsDiscord, BsTwitter} from 'react-icons/bs'
import {GiCoffeePot} from 'react-icons/gi'
import { AiFillHeart } from "react-icons/ai";
const Footer = () => {

  const links = [{'title':"info", 'content':['Contact Us','Releases','Stores','Brands','Blogs','Track Your Order']},{'title':"policies", 'content':['Privacy Policy','Refund Policy','Terms & Conditions','Order & Shipping','Terms of Service']},{'title':"our socials", 'content':[ <BsDiscord/> , <BsTwitter/>]}   ]
  return (
<footer className= ' footer bg-black text-white divide-y  py-4' >
    <div className=" max-width flex flex-row justify-between flex-wrap my-6 container">

        
        {links.map((link, index)=>{
          const {title, content} = link;
          console.log(content)
          return(
           
     <div className={`flex flex-col  ${index===2? "max-w-[100%] ":" w-1/2 md:max-w-max "}space-y-5 mb-6`} > 
            <a key={index} className="   font-semibold text-[20px] uppercase"> {title}</a>

                <div  className={`flex    ${index===2? "flex-row justify-evenly items-center":"flex-col space-y-5"}`} > 
            {content.map((item) =>{
              return  (         
              <a className='font-light text-[#bbbbbbf7] hover:text-white text-[16px] capitalize'>{item}</a>
              )

            })}
              </div>
         
        



            </div> 

            
          )

        })}






{/*         
        <div className='flex flex-col w-1/2 md:w-auto space-y-3 mb-6'> 
        <a className="font-600 textfont-semibold text-[24px]'"> POLICIES</a>

        </div>
      
        <div className='flex flex-col w-1/2 md:w-auto space-y-3 mb-6 '> 
        <a className="font-600  font-semibold text-[24px]'"> SOCIALS</a>

        </div> */}


    </div>



        <hr className=''
        />

        <div className='flex flex-row p-6 justify-center  space-x-1 text-[11px]'>
          <p> Developed with </p> 
          <span> <AiFillHeart className='text-red-400'/>   </span>
           <span> + </span> 
           <GiCoffeePot className='text-[#c69d9d]'/> 
          <p> by Sagar Kashyap, © 2023. </p>
        </div>


</footer>
  )
}

export default Footer
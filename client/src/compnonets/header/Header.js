import React from 'react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { toggle_cart } from '../../state/action-creators/toggle';
import { toggle_overlay } from '../../state/action-creators/toggle';

import Badge from '@mui/material/Badge';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import {AiOutlineShoppingCart} from 'react-icons/ai'
const Header = ({cart, authenticate, toggle_cart ,toggleCart, toggle_overlay, toggleOverlay}) => {
  const theme = createTheme({
    components: {
      MuiBadge: {
        styleOverrides: {
          root: {
            fontSize: '3px',
          },
        },
      },
    },
  });



  return (
    <header class="header shadow-lg">

      <nav class="header__navbar container max-width">



        <div id="humbtn" class="header__humburger hide-for-desktop">
          <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd" />
          </svg>
        </div>

       <Link to='/'>
       <div class="header__logo">
          <a href="#"><svg width="138" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
              fill="#1D2026" fill-rule="nonzero" />
          </svg></a>
        </div>
       </Link>


        <div class="header__menu hide-for-mobile">

          <a href="#">Collections</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>

        <div id="searchBtn" class="header__searchlogo">
          <svg width="22px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" fill="#323232" />
            <path d="M15 15L21 21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#323232" stroke-width="2" />
          </svg>

        </div>  

        <div onClick={() => {toggle_cart(!toggleCart); toggle_overlay(!toggleOverlay)}} id="cartbtn" class="header__cartlogo">

        
    
    <ThemeProvider theme={theme}>
        <Badge badgeContent={cart && authenticate? cart.length: 0} color="primary"   
          sx={{
            fontSize:5
          }}
        >
        <AiOutlineShoppingCart className="w-[22px] h-[20px]" />
    </Badge>
    </ThemeProvider>
        </div>

        

        <Link to={`${authenticate? '/dashboard':'/login'}`}><div class="header__profile">
        </div></Link>




      </nav>


      


      <div class="sidebar">
        <div>

          <div id="closebtn" class="sidebar__closebtn">
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D" fill-rule="evenodd" />
            </svg>
          </div>

          <a href="">Collections</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>

      </div>



    </header>
  )
}

const mapStateToProps = state =>({
  
  cart: state.register.cart,
  authenticate: state.register.isAuthenticate,   
  toggleCart: state.toggle.toggleCart,
  toggleOverlay: state.toggle.toggleOverlay,
})

export default connect(mapStateToProps,{toggle_cart, toggle_overlay})(Header)
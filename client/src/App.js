


//  ./images/image-product-1.jpg
// src\compnonets\carousel\Carousel.js

import img1 from './images/listing_item_1.avif'

import img2 from './images/listing_item_2.avif'

import Header from "./compnonets/header/Header";
import Hero from "./compnonets/hero/Hero";
// import Slide from "./compnonets/slide/Slide";
import Carousel from "./compnonets/carousel/Carousel";
import Path from "./compnonets/path/Path";
import Footer from './compnonets/footer/Footer.js'
// import IntroSlider from './compnonets/introSlider/IntroSlider.js'
import Listing from './compnonets/listing/Listing'
import Cart from './compnonets/cart/Cart'
import Sidebar from './compnonets/sidebar/Sidebar'
import Register from './compnonets/auth/Register'
import Login from './compnonets/auth/Login'
import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Alert from './compnonets/layout/Alert';
import Dashboard from './compnonets/auth/Dashboard'
//Redux 
import {Provider} from 'react-redux'
import store from './state/store.js'
import setAuthToken from './state/utils/setAuthToken'
import { useEffect } from 'react';
import { load_user_cart } from './state/action-creators/regester';
import { load_products } from './state/action-creators/product';
if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {


useEffect(() => {
  store.dispatch(load_products())
 store.dispatch(load_user_cart())
})


  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      
  <div id="overlay"></div>
  {/* //header */}
  <Header />
<Path/>
<Alert />

<Cart />
<Routes>
<Route path='/register' element={<Register /> }/>
<Route path='/login' element={<>  <Login/></>}/>

<Route path='/dashboard' element={<Dashboard /> }/>
<Route path='/' element={<>  




    <Sidebar />


    <Carousel showBullets={false} slideDuration={0.5} autoPlay={true} showNavs={false}/> 

    <Listing/>
</>}/>




<Route path="/product/:id" element={<><Carousel showBullets={true} slideDuration={0.5} autoPlay={false} showNavs={true}/>
<Hero /></>} />



</Routes>

    <Footer />

    </div>
    </Router>
    </Provider>
  );
}

export default App;

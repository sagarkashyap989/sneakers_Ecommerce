import React from 'react'
import {connect} from 'react-redux'
import { toggle_cart, toggle_overlay} from '../../state/action-creators/toggle'
const Overlay = ({toggle_cart, toggle_overlay, toggleCart, toggleOverlay }) => {
  return (
    <div onClick={() =>{
        toggle_cart(!toggleCart);
        toggle_overlay(!toggleOverlay);
    }} id="overlay" className={`${toggleOverlay ?  'overlay':''} fixed`}></div>
  )
}

const mapStateToProps = state =>({
    toggleCart: state.toggle.toggleCart,
    toggleOverlay: state.toggle.toggleOverlay
})

export default connect(mapStateToProps, {toggle_cart, toggle_overlay})(Overlay)
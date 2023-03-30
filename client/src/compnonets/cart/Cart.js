import React from 'react'
import { connect } from 'react-redux'
import { cartDelete } from '../../state/action-creators/cart'
import { Link } from 'react-router-dom'
import Cart_container from './Cart_container'
import { toggle_cart } from '../../state/action-creators/toggle';
import { toggle_overlay } from '../../state/action-creators/toggle';
import Spinner from './../layout/spinner'
const Cart = ({ toggleCart, cart, loading, cartDelete, toggle_cart, toggle_overlay, }) => {

    return loading && cart === null ? ( <Spinner />) : (<section id="cart" class={`cart space-y-4 ${toggleCart ? "" : 'hidden'} fixed`}>



        <h3 class="cart__title space-y-2">Cart</h3>
        <hr />

        <Cart_container loading={loading} cart={cart} cartDelete={cartDelete} />
        <button class="btn p-[11px] disabled:opacity-50" disabled={cart === null || cart.length === 0 ? true: false}>
            <Link to={`${cart === null || cart.length === 0 ? '/#': '/checkout'}`}> <h3 onClick={() => {
                toggle_cart(false);
                toggle_overlay(false)
            }}  >Checkout</h3></Link>
        </button>

    </section>)
}
const mapStateToProps = state => ({
    toggleCart: state.toggle.toggleCart,
    cart: state.register.cart,
    loading: state.register.loading
})
export default connect(mapStateToProps, { cartDelete, toggle_cart, toggle_overlay, })(Cart)
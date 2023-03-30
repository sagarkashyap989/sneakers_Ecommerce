import React, {useEffect} from 'react'
import Address from './../dashComponents/address/Address'
import { connect } from 'react-redux'
import Cart_container from '../cart/Cart_container'

import { cartDelete } from '../../state/action-creators/cart'
import Form from './../dashComponents/address/Form'
import { setPath } from '../../state/action-creators/path'
const Checkout = ({ address, cart, loading, cartDelete, setPath }) => {
    let subtotal = 0;
    const shippingCharge = 340;

    
  useEffect(() => {
    setPath({con:'Checkout', path:'/checkout'})
     }, [])
    return (
        <div className='max-width py-5 checkout'>
            <h2 class="text-[32px] font-semibold my-[15px] md:m-0 lg:m-0 py-4 "> Checkout</h2>

            <div className="flex flex-wrap justify-between">
                <div className="flex flex-col">
                    <h2 class="text-[23px]  my-[15px] "> Address Details</h2>
                    <div className='flex my-6'>



                        <fieldset className='space-y-4' >



                            {address && address.map((add, index) => {

                                const { f_name, l_name, address, city, state, zip } = add;
                                return (
                                    <div className='flex items-center  py-2 text-[20px] min-w-[250px]   border-dashed border-2 border-black-500 p-2 '>
                                        <input className='mr-2' type="radio" id={index} name="drone"
                                            checked />
                                        <label for={index}><div class="py-4 text-[20px] min-w-[250px] "><p class="text-[#292a2d]"><span className='font-semibold'>
                                            {f_name} {l_name},
                                        </span><br /> {address}, <br />{city}, {state},<br />{zip}.</p></div></label>
                                    </div>
                                )
                            })}


                        </fieldset>


                    </div>

                    <Form />
                </div>
                {cart && cart.map((item) => {
                             subtotal = subtotal+ item.totalPrice

                        })}
                <div className="flex flex-col">
                    <h2 class="text-[23px] my-[15px]"> Order Details</h2>

                    <div className='flex my-6'>

                        <Cart_container loading={loading} cart={cart} cartDelete={cartDelete} />
                    </div>

                    <hr className='mt-7'/>


                    <div className="flex justify-between text-[23px] my-[10px] ">
                        <p>Subtotal</p>
                        <p>₹{subtotal}</p>
                    </div>

                    <div className="flex justify-between text-[23px] my-[10px] ">
                        <p>Shipping</p>
                        <p>₹ {cart && shippingCharge}</p>
                    </div>

                    <hr />

                    <div className="flex justify-between text-[26px] my-[15px]  ">
                        <p className='font-semibold'>Total</p>
                        <p className='text-[28px] font-semibold'>₹ {cart && subtotal + shippingCharge}</p>
                    </div>
                    <div className='flex justify-center mt-6'>
            <button  disabled={(address && address.length !== 0) && (cart && cart.length !== 0) ? false: true} type='submit' className='bg-black text-white px-[9px] py-[14px] disabled:opacity-70'>Go to Payment</button>
          </div>

                </div>
            </div>

           

        </div>
    )
}

const mapStateToProps = state => ({
    address: state.register.address,
    cart: state.register.cart,
    loading: state.register.loading
})

export default connect(mapStateToProps, { cartDelete, setPath })(Checkout)
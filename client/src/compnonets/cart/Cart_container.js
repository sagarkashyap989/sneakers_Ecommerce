import React from 'react'

const Cart_container = ({loading, cart, cartDelete}) => {
  return (
    cart === null || cart.length === 0 ? (<h1 className='text-red-500 '>No items in Cart, please do some shoping :)</h1>):
    (<div className="item_container">
                {(!loading && cart) && cart.map((item, index) => {
                    {/* console.log(item.name, index) */}
                    const { name, product_id, image, size, quantity, totalPrice, _id, price , u_id} = item;
                    return(
                        <div  key={index}>
                    <img class="img" src={image} alt="" />
                    <h3 class="desc">{name.slice(0, 23)}....</h3>

                    <svg onClick={() => cartDelete(u_id)} class="del" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <path
                                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                                id="a" />
                        </defs>
                        <use fill="#C3CAD9" fill-rule="nonzero" xlinkHref="#a" />
                    </svg>
                    <p class="price"><span className='border-solid border border-black px-[5px] mr-[10px]  '>{size}</span>${price}
                   <span> x </span><span class="quantity">{quantity}</span></p>
                    <h3 class="tol">${price * quantity}</h3>

                </div>
                    )


                })}
            </div>)
  )
}

export default Cart_container
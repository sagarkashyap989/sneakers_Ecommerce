import React from 'react'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import Lists from './Lists'

const Listing = ({products}) => {
 let listing1=[];
 let listing2 =[]
   if(products)
   {  listing1 = products.slice(0, products.length /2 )
   console.log(listing1);
    listing2 =  products.slice( products.length /2,  products.length )

   console.log(listing2)
   } 
    return (
    <>
        <Lists products={listing1}  />
        <Lists  products={listing2} />
    </>

 
    )
}

const mapStateToProps = state =>({
    products : state.product.products
})
export default connect(mapStateToProps, {}) (Listing)

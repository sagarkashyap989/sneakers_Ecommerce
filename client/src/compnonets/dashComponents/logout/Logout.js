import React from 'react'
import {connect} from 'react-redux'
import { logout } from '../../../state/action-creators/regester'
import {Link} from 'react-router-dom'
const Logout = ({logout}) => {
    return (
        <div className='mt-[24px] w-[100%] cursor-pointer'>
            <div  className="flex  items-center justify-between">
                <div className=''>
<Link to='/login' onClick={logout}><h2  className='text-[28px]  my-[15px] font-semibold md:m-0 lg:m-0 '> Logout</h2></Link>
                </div>
            </div>
        </div>
    )
}

export default connect(null, {logout})(Logout)
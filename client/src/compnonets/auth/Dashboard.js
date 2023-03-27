import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { setAlert } from '../../state/action-creators/alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { login } from '../../state/action-creators/regester'
import Address from '../dashComponents/Address'
const Login = ({ setAlert, login, isAuthenticate }) => {

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticate) {
      navigate('/login')
    }
  })

  const list = ['Orders', 'Addresses', 'Account Details', 'Log Out']

  return (



    <section className='path  bg-[#f4f7fa] py-[22px] shadow-md '>
      <div className='max-width'>

        <h2 className='text-[32px] font-semibold my-[15px] md:m-0 lg:m-0 '> My Accounts</h2>

        <div className="mt-[40px]">


        <Address/>

        </div>

      </div>
    </section>


  )
}


Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  isAuthenticate: state.register.isAuthenticate
})

export default connect(mapStateToProps, { setAlert, login })(Login)
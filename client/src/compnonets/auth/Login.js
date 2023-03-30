import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { setAlert } from '../../state/action-creators/alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {login} from '../../state/action-creators/regester'
import { setPath } from '../../state/action-creators/path';
const Login = ({setAlert, login, isAuthenticate , setPath}) => {

  const navigate =  useNavigate();
  useEffect(() => {
    if(isAuthenticate){
      navigate('/')
    }
  })

  useEffect(() => {
 setPath({con:'Login', path:'/login'})
  }, [])
  

  console.log("isAuthenticate", isAuthenticate)
  const [formData, setFromData] = useState({
    email:'',
    password:'',
  })
 
  const {email, password} =formData;
const onChange= (e) =>{
  setFromData({...formData, [e.target.name] :e.target.value})


}


const handleSubmit = (e) =>{
  // e.preventDefault();
  e.preventDefault();
  login({email, password})
  console.log("handleusjdf")
  


}


  return (
   <section className='flex justify-center p-8'>
    <div class="w-full max-w-md ">
  <form onSubmit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

  <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email 
      </label>
      <input name='email' value={email} onChange={e=> onChange(e)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"/>
    </div>
  
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input name='password' value={password} onChange={e=> onChange(e)}  class={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  `} id="password" placeholder="******************" />
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
        Log In
      </button>
   
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    don't have an Account? 
        <Link to='/register'><span className='font-bold'>Sign up</span></Link>
    
    
  </p>
</div>
</section>
  )
}


Login.propTypes={
  setAlert: PropTypes.func.isRequired,
}
const mapStateToProps = state =>({
  isAuthenticate : state.register.isAuthenticate
})

export default connect(mapStateToProps, {setAlert, login, setPath})(Login)
import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { setAlert } from '../../state/action-creators/alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { register } from '../../state/action-creators/regester';
import { setPath } from '../../state/action-creators/path';
const Register = ({setAlert, isAuthenticate,register, setPath} ) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if(isAuthenticate){
      navigate('/')
    }
  })
  
 
  useEffect(() => {
    setPath({con:'Register', path:'/register'})
     }, [])
 
  const [formData, setFromData] = useState({
    username:'',
    email:'',
    password:'',
    password2:''
  }) 
 
  const {username, email, password, password2} =formData;
  const [passwordErr, setPasswordErr] = useState(false);
const onChange= (e) =>{
  setFromData({...formData, [e.target.name] :e.target.value})

  if(e.target.name === 'password' || e.target.name === 'password2'){
    setPasswordErr(false);
  }

}


const handleSubmit = (e) =>{
  // e.preventDefault();
  
  if(password !== password2){
    console.log(password, ",", password2)
    setAlert("password do not match", "danger")

    setPasswordErr(true);
  }else{

    register({username, email, password})
  }


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
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input  name='username' value={username} onChange={e=> onChange(e)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input name='password' value={password} onChange={e=> onChange(e)}  class={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  ${passwordErr? "border-red-600": ""}`} id="password" placeholder="******************" />
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div class="mb-6">
      <label  class="block text-gray-700 text-sm font-bold mb-2" for="password">
       Confirm Password
      </label>
      <input   name='password2' value={password2} onChange={e=> onChange(e)}  class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  ${passwordErr? "border-red-600": ""}`} id="password2" placeholder="******************" />
      { passwordErr? <p class="text-red-500 text-xs italic">Please choose a password.</p> : ""}
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    Already have an Account? 
        <Link to='/login'><span className='font-bold'>Log in</span></Link>
    
    
  </p>
</div>
</section>
  )
}


Register.propTypes={
  setAlert: PropTypes.func.isRequired,
  isAuthenticate: PropTypes.bool
}

const mapStateToProps = state =>({
  isAuthenticate : state.register.isAuthenticate
})

export default connect(mapStateToProps, {setAlert, register,setPath})(Register)
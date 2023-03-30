import React, { useState } from 'react'
import { connect } from 'react-redux'
import {updateAddress} from './../../../state/action-creators/regester'
import {deleteAddress} from './../../../state/action-creators/regester'

const Address = ({address, updateAddress,deleteAddress}) => {

    const [toggleForm, setToggleForm] = useState(false)
    const [formData, setFormData] = useState({
        f_name: "",
        l_name: "",
        address: "",
        city: "",
        state: "",
        zip: ""
      })
    const handleSubmit = (e)=>{
        e.preventDefault();

        updateAddress(formData)
        setToggleForm(false);
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    
      }

    // console.log(address)
  return (
   <div className='py-4'>
    <h2 className='text-[23px] text-[#292a2d]'>Shipping Address</h2>
    
    <div className="flex  flex-wrap ">
 
 {address  && address.map((item) =>{
    const {f_name, l_name, address, city, state, zip , u_id}  = item;

    return    <div className="py-4 text-[20px] min-w-[250px]  mr-12 ">
        <p className="text-[#292a2d]">
            {f_name} {l_name},<br /> {address}, <br />{city}, {state},<br />{zip}.
        </p>

        <div className="flex mt-4 justify-between">
            <button  onClick={() => {setFormData(item);setToggleForm(!toggleForm);u_id === formData.u_id && setToggleForm(!toggleForm); }}
             className='border border-black py-2 px-2'>Edit</button>
            <button onClick={() => deleteAddress(u_id)} className='border border-black py-2 px-2'>Delete</button>
        </div>

    </div>
 })}

    </div>
    <form onSubmit={handleSubmit} class={` ${toggleForm ? '' : 'hidden'} w-full max-w-lg my-[15px]`}>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input name='f_name' value={formData.f_name} onChange={(e) => onChange(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input name='l_name' value={formData.l_name} onChange={(e) => onChange(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Address
              </label>
              <input name='address' value={formData.address} onChange={(e) => onChange(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="block 23, rajnagar, vasai" />

            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                City
              </label>
              <input name='state' value={formData.state} onChange={(e) => onChange(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                State
              </label>
              <div class="relative">
                <select name='city' value={formData.city} onChange={(e) => onChange(e)} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Zip
              </label>
              <input name='zip' value={formData.zip} onChange={(e) => onChange(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
            </div>
          </div>

          <div>
            <button type='submit' className='bg-black text-white px-[9px] py-[14px]'> Edit address</button>
          </div>

        </form>
   </div>
  )
}

const mapStateToProps = state=>({
address: state.register.address
})

export default connect(mapStateToProps, {updateAddress, deleteAddress}) (Address)
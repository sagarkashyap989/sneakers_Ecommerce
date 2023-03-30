import React, { useEffect, useState } from 'react'
import { addAddress } from '../../../state/action-creators/regester'
import { connect } from 'react-redux'
const Form = ({ addAddress, min_data, addresses }) => {
  const [showMore, toggleShowMore] = useState(false)
  const [showForm, toggleShowForm] = useState(false)

  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  })

  

  const { f_name, l_name, address, city, state, zip } = setFormData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

  }

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log("form submitted")
    toggleShowForm(false)
    addAddress(formData)

    setFormData({
      f_name: "",
      l_name: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    })
  
  }


  return (

    <div className='mt-[18px] w-[100%]'>
    
   {(addresses && addresses.length===0 )&&  <h1 className="text-red-500 my-4"> No address found, Please considering adding one</h1>
}

        <div>
          <button onClick={() => toggleShowForm(!showForm)} className='bg-black text-white px-[9px] py-[14px]'> Add a new address</button>
        </div>

        {/* loop through the address if exist */}


        <form autocomplete="off" onSubmit={handleSubmit}  class={` ${showForm ? '' : 'hidden'} w-full max-w-lg my-[15px]`}>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input autocomplete='off' name='f_name' value={f_name} onChange={(e) => onChange(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input autocomplete='off' name='l_name' value={l_name} onChange={(e) => onChange(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Address
              </label>
              <input autocomplete='off' name='address' value={address} onChange={(e) => onChange(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="block 23, rajnagar, vasai" />

            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                City
              </label>
              <input autocomplete='off' name='state' value={state} onChange={(e) => onChange(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                State
              </label>
              <div class="relative">
                <select name='city' value={city} onChange={(e) => onChange(e)} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
              <input name='zip' value={zip} onChange={(e) => onChange(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
            </div>
          </div>

          <div>
            <button type='submit' className='bg-black text-white px-[9px] py-[14px]'> Add address</button>
          </div>

        </form>


    </div>


  )
}

const mapStateToProps = state =>({
  
  addresses: state.register.address
})
export default connect(mapStateToProps, { addAddress })(Form)
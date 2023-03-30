import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const Path = ({path}) => {

  useEffect(() => {
    console.log(window.location.pathname); //yields: "/js" (where snippets run)
    console.log(window.location.href); 
  }, [window.location.href])
  

  return (
    <section  className='path  bg-[#f4f7fa] py-[22px] shadow-md '>
      <div className='max-width'>
        {path.map((item) =>{
          return (<> <Link to={item.path}> <span className='text-sm font-semibold hover:underline'>{item.con}</span></Link><span>/</span></>)
        })}   </div>
    </section>
    
  )
}

const mapStateToProps = state =>({
  path: state.path.path
})
export default connect(mapStateToProps, {}) (Path)
import React,{useState, useEffect} from 'react'

const Size = ({currentSize, handleSize}) => {
    // const [currentSize, handleSize] = useState(0);
    const sizes = [4,5,6,7];

  useEffect(() => {
    handleSize(sizes[0])
  }, [])
  

  return (
    <>
      
      <div className="my-6">
      <div className="size_unit flex justify-between mb-5">
            <h3 className='text-[#95a0ab] text-[18px]'>Shoe Size <span>(UK)</span></h3>
            <a href="/" className='underline  text-[15px] '>Si ze chart</a>
        </div>

        <div className="flex gap-[0.7rem] my-3">


         {sizes.map((size, index)=>{
            return(
                <div key={index} id={index} onClick={(e)=>{handleSize(sizes[index]); 
    console.log(currentSize, index);}} className={` cursor-pointer size_1 w-[56px] h-[36px] border border-black  text-[1.5rem] flex justify-center items-center ${currentSize === sizes[index]? "size_active":""}`}>{size}</div>
            )
         })}


        
        

        </div>
      </div>
    </>
  )
}

export default Size
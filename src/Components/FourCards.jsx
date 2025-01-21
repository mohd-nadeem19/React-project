import React from 'react'

const FourCards = (props) => {
  return (
    <div>

      <div className='bg-[] max-w-[750px]'>
        <p className=' bg-[#D84727] text-white  w-[90px] relative left-36 bottom-2'>{props.offer}</p>

        <div className='m-8 text-left'>
          {/* <span className='absolute left-[-2px] top-[-10px] bg-[#D84727] w-[90px] ml-32 mt-[-2px] text-white'>20% OFF</span> */}

          <img src={props.img} alt="" />
          <h1 className='text-xl text-[#333333] font-semibold font-Taviraj leading-[32px] mt-[10px] '>{props.heading1}</h1>
          <p className='font-Taviraj font-medium text-sm leading-[24px] text-[#777777] line-through decoration-[#D93F3F] mt-2 '>{props.para}</p>
          <h1 className='text-xl text-[#333333] leading-[32px] font-medium pb-4'>{props.heading2}</h1>

        </div>
      </div>




      {/* <div className=' relative bg-[#FFFFFF] max-w-[250px]'>
        
          <span className='absolute left-[-2px] top-[-10px] bg-[#D84727] w-[90px] ml-32 mt-[-2px] text-white'>20% OFF</span>
        
        <div>
          <img src="Mask group.jpg" alt="" className='p-11' />

          <div className='text-left pl-10 pb-6'>
            <h1 className='text-xl text-[#333333] font-semibold font-Taviraj leading-[32px] mt-[-16px] '>Singo Maple</h1>
            <p className='font-Taviraj font-medium text-sm leading-[24px] text-[#777777] line-through decoration-[#D93F3F] mt-2 '>Rp 1.500.000</p>
            <h1 className='text-xl text-[#333333] leading-[32px] font-medium mt-2'>Rp 1.264.000</h1>

          </div>
        </div>
      </div> */}

    </div>
  )
}

export default FourCards
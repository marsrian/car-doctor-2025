import React from 'react'

const Title = ({title, subTitle, description}) => {
  return (
    <>
      <h6 className='text-xl font-bold text-[#FF3811] text-center'>{title}</h6>
      <h1 className='text-[45px] text-[#151515] font-bold mt-5 text-center'>{subTitle}</h1>
      <p className='text-[#737373] capitalize text-center w-[717px] mx-auto'>{description}</p>
    </>
  )
}

export default Title

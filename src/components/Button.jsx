import React from 'react'

const Button = ({label,iconURL,background,borderColor,textcolor}) => {
  return (
    <button className={`
    flex justify-center hover:bg-orange-700 items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      background
        ? `${background} ${textcolor} ${borderColor} hover:bg-black hover:text-white`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full`}>
      {label}
      {iconURL && <img src={iconURL} alt="arrow right icon" className='ml-2 rounded-full w-5 h-5' />}
    </button>
    
    
  )
}

export default Button

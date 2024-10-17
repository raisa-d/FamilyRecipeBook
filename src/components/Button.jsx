import React from 'react'

const Button = ({ text }) => {
  return (
    <button className='border-2 border-gray-400 shadow-xl rounded-3xl p-1 my-2 text-lg hover:bg-lime-800 hover:text-white'>{text}</button>
  )
}

export default Button
import React from 'react'

const Button = ({styles}) => (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none hover:bg-cyan-900 shadow-lg shadow-cyan-500/50 hover:scale-110 duration-100 ease-in rounded-[10px] ${styles}`}>Get Started</button>
  )

export default Button

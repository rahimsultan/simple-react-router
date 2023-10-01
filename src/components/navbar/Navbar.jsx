import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='shadow-md'>
      <div className='flex justify-between max-w-6xl mx-auto py-3'>
      <div>
        <h2 className='text-2xl font-bold '>LOGO</h2>
      </div>
      <div className='font-bold flex gap-5'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/blog'>Blogs</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/users'>Users</NavLink>
      </div>
    </div>
    </div>
  )
}

export default Navbar
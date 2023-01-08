import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <NavLink 
          to='/'
          className={({isActive})=> isActive ? 'link active' : 'link'}
        >
          Home
        </NavLink>
        <NavLink 
         to='/about'
         className={({isActive})=> isActive ? 'link active' : 'link'}
        >
          About
        </NavLink>
        <NavLink 
          to='/products'
          className={({isActive})=> isActive ? 'link active' : 'link'}
        >
          Products
        </NavLink>
        <NavLink 
          to='/login'
          className={({isActive})=> isActive ? 'link active' : 'link'}
        >
          Login
        </NavLink>
    </nav>
  )
}

/*
Navlink
"to='path name'"" gideilecek yeri belirler
Navigator de genellikle bu tag kullanılır. link ile arasında temel fark ismi ile açıklanmış şekilde.
*/

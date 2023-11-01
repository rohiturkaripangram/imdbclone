import React from 'react'
import NavbarItem from './NavbarItem'
const Navbar = () => {
  return (
    <>
     <div className='flex justify-center text-black bg-amber-200 align-center gap:2 p-4 '>
         <NavbarItem title={'Top Rated'} param='fetchTopRated' />
        <NavbarItem title={'Trending'} param='fetchTrending' />
       
    </div>
    </>
   
  )
}

export default Navbar
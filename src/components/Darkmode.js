'use client'
import React from 'react'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useTheme } from 'next-themes'

const Darkmode = () => {
    const {systemTheme,theme,setTheme}=useTheme();
    const currenttheme=theme==='system'?systemTheme:theme

  return (
    <>
    {currenttheme==='dark'?<MdOutlineLightMode onClick={()=>setTheme('light')} size={24}/>:<MdDarkMode size={24} onClick={()=>setTheme('dark')}/>}
    </>
  )
}

export default Darkmode
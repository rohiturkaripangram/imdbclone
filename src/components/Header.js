import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";

import Darkmode
 from "./Darkmode";


 import { MdDarkMode } from 'react-icons/md';
const Header = () => {
  return(
    <>
   
    
    <div className='flex py-4 px-4 align-center justify-between max-2 max-w-6xl sm:mx-auto'>
        <div >
        <Link href="/" >
           <h2 className='text-2xl'>
            <span className='font-bold bg-amber-400 py-2 px-2 mx-1 rounded-lg'>IMDB</span>
            <span>Clone</span>
           </h2>
        </Link>
       
    </div>
    <div className='flex justify-center align-center '>
    <MenuItem title={'Home'} address={"/"}/>
     <MenuItem title={'About'} address={"/about"}/>
     <MenuItem title={'Contact'} address={"/contact"}/>
     <Darkmode/>
    </div>
    
    
    </div>
   
    </>
  );
};

export default Header;

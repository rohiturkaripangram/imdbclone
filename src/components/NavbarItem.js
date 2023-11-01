'use client'
import React from 'react'
import Link from "next/link"
import { useSearchParams } from 'next/navigation'


const NavbarItem = ({title,param}) => {
    const searchParams=useSearchParams()
    const genre=searchParams.get('genre')
  return (
    <div>
        <Link className={`m-4 hover:text-amber-500 font-semibold ${genre && genre===param && 'underline underline-offset-10 decoration-4 decoartion-amber-500 rounded-lg'}`} href={`/?genre=${param} ` }>
           {title}
        </Link>
    </div>
  )
}

export default NavbarItem
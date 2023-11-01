'use client'
import React from "react";
import Link from "next/link";

const MenuItem = ({ title, address }) => {
  return (
    <>
      <Link  className='mx-4 lg:mx-6 hover:text-amber-600'href={address}>
        {title}
      </Link>
    </>
  );
};

export default MenuItem;

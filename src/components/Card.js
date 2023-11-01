import React from 'react'
import Link from "next/link"
import {AiOutlineHeart} from 'react-icons/ai'
const Card = ({result}) => {
  return (
    <div className="cursor-pointer sm:p-3
    sm:hover:shadow-slate-400
    sm:shadow-md rounded-lg sm:border sm:border-slate-400 group sm:m-2 transition-shadow duration-200
    ">
       <Link href={`/movie/${result.id}`}>
            <img src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} className='rounded-lg' />
   <div className='p-2'>
     <p>{result.overview.substring(0,40)}</p>
     <h2 className='text-lg font-bold'>{result.title||result.name}</h2>
     <p>{result.first_air_date || result.release_date}</p>
     <AiOutlineHeart/>
     <p>{result.vote_count}</p>
    </div>
       </Link>
    </div>
  )
}

export default Card
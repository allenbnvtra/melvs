import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='justify-center items-center flex gap-8 my-1'>
        <button className='border-2 border-solid border-black py-1 w-40 rounded-md bg-slate-300'><Link href='/'>Programmer</Link></button>
        <button className='border-2 border-solid border-black py-1 w-40 rounded-md bg-slate-300' ><Link href="/standard">Standard</Link></button>
    </div>
  )
}

export default Navbar
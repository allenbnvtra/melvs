import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='justify-center items-center flex gap-10 my-6'>
        <button className='border-2 border-solid border-black py-3 w-40 rounded-md bg-slate-300'><Link href='/'>Programmer</Link></button>
        <button className='border-2 border-solid border-black py-3 w-40 rounded-md bg-slate-300' ><Link href="/standard">Standard</Link></button>
    </div>
  )
}

export default Navbar
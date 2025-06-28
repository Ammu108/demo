import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-center h-12 bg-black text-white px-5'>
        <div className='flex w-full justify-between items-center'>
          {/* -- left navbar -- */}
          <div>
            <h1 className='text-xl font-bold'>Logo</h1>
          </div>

          <div>
            <ul className='flex gap-4'>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link> {/* this about is the name of folder which is in app folder*/}
              <Link href="/contact">Contact</Link> {/* this contact is the name of folder which is in app folder*/}
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar

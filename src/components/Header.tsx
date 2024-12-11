import React from 'react'
import ProductIcon from './icons/ProductIcon.tsx'

export default function Header() {
  return (
    <div>
      <header className='bg-white flex items-center justify-between px-8 py-4 border-b border-neutral-200'>
        <h1 className='text-2xl text-cyan-600 font-semibold'>PRODUCTOS</h1>
        <ProductIcon/>
      </header>
    </div>
  )
}

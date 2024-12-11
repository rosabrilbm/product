import React from 'react'
import ProductIcon from './icons/ProductIcon.tsx'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header className='flex items-center justify-between px-10 py-4 border-neutral-100 border-b-2'>
        <NavLink to="/">
          <h1 className='font-semibold text-cyan-950 text-lg'>Gestión de productos</h1>
        </NavLink>
        <ProductIcon/>
      </header>
    </div>
  )
}

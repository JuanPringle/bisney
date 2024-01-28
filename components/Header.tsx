import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggler } from "@/components/ThemeToggler";
import SearchInput from './SearchInput';
import GenreDropdown from './GenreDropdown';

function Header() {
  return (
    <header className=' flex w-full justify-between items-center fixed p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 z-30'>
      <Link href="/" className=' mr-10'>
        <Image 
        src="https://links.papareact.com/a943ae" alt="Bisney Logo"
        width={120}
        height={100}
        className=' cursor-pointer invert'
        />
      </Link>
      <div className='flex space-x-2'>
        <GenreDropdown/>
        <SearchInput/>
        <ThemeToggler/>
      </div>
    </header>
  )
}

export default Header

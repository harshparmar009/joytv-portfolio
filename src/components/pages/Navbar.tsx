"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link as ScrollLink, Element } from "react-scroll";
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Element 
      name="top"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur-lg shadow-lg' : ''}`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-3 border-b border-white/50 shadow-lg' : 'py-6'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="">
              <Image
              src={"/logo/joytv.png"}
              alt='logo'
              className='w-[40px] h-[40px]'
              width={1000}
              height={1000}
              priority
              /> 
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <NavLinks />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}>
          <div className="absolute top-16 left-0 w-full bg-black p-6 shadow-md text-white space-y-4">
            <NavLinks toggleMenu={toggleMenu} />
          </div>
        </div>
      )}
    </Element>
  )
}

// Navigation Links Component
function NavLinks({ toggleMenu }: { toggleMenu?: () => void }) {
  return (
    <>
      <Link   href={"/"} className="block text-white text-opacity-90 hover:text-opacity-100 px-3 py-2 rounded-md text-xl font-medium" onClick={toggleMenu}>
        Home
      </Link>
      
      <div className="relative group">
        <button className="flex items-center text-white text-opacity-90 hover:text-opacity-100 px-3 py-2 rounded-md text-xl font-medium">
          About <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        <div className="absolute left-0 hidden group-hover:block w-48 rounded-md shadow-lg bg-white text-gray-900">
          <Link href="/about" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={toggleMenu}>About Us</Link>
          <Link href="/mission" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={toggleMenu}>Our Mission</Link>
        </div>
      </div>

      <Link href={"/services"} className="block text-white text-opacity-90 hover:text-opacity-100 px-3 py-2 rounded-md text-xl font-medium" onClick={toggleMenu}>
        Services
      </Link>

      {/* <Link href={"/"} className="block text-white text-opacity-90 hover:text-opacity-100 px-3 py-2 rounded-md text-xl font-medium" onClick={toggleMenu}>
        Journey
      </Link> */}

      <Link href="/" className="block text-white text-opacity-90 hover:text-opacity-100 px-3 py-2 rounded-md text-xl font-medium" onClick={toggleMenu}>
        Contact
      </Link>
    </>
  );
}

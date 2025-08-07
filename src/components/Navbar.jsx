import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'
import Logo from "../assets/logo.jpg";
function Navbar() {

    const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Contact", path: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen((prev)=>!prev );
  }


  return (
    <header className="bg-white shadow sticky top-0 z-50">
   <div className='container mx-auto flex justify-between items-center py-4 px-6'>
    <div className='flex items-center space-x-2'>
        <img src={Logo} alt='logo' className='h-10 w-10 rounded-full ' />
        <Link to="/" className='text-2xl font-heading text-primary'>LCCDF</Link>
    </div>

    {/* Desktop Navigation */}
    <nav className='hidden md:flex space-x-6' >
        {navItems.map((item) => (
        <NavLink key={item.path} to={item.path} className={({ isActive }) =>
                `font-medium ${
                  isActive ? "text-primary" : "text-gray-700"
                } hover:text-primary transition cursor-pointer`
              }>{item.name} </NavLink>
        ) )}
    </nav>

    {/* Mobile menu toggle */}

    <button  className='md:hidden text-primary focus:outline-none' onClick={toggleMenu}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>

   </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <nav className="md:hidden border-t-2 border-gray-100 px-2 pt-2 pb-4 space-y-1 sm:px-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "text-primary bg-gray-100" : "text-gray-700"
              } hover:text-primary transition cursor-pointer`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    )}
    </header>
  )
}

export default Navbar

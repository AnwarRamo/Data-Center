import ali from '../asset/logo.png';
import { FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=' py-4' style={{backgroundImage:{ali}}}>
      <div className='container mx-auto flex justify-between items-center px-4 md:px-0'>
        <div className='flex items-center space-x-2'>
          <img src={ali} alt="Logo" className="h-8" />
        </div>

        <div className='md:hidden'> 
          <button onClick={toggleMenu} className='text-gray-800 text-2xl'>
            <GiHamburgerMenu />
          </button>
        </div>

        <ul className='hidden md:flex space-x-8'>
          <li><Link to="/" className="text-[#1F4B43] hover:text-gray-600">Home</Link></li>
          <li><Link to="/buy" className="text-[#1F4B43] hover:text-gray-600">Buy</Link></li>
          <li><Link to="/sell" className="text-[#1F4B43] hover:text-gray-600">Sell</Link></li>
          <li><Link to="/rent" className="text-[#1F4B43] hover:text-gray-600">Rent</Link></li>
          <li><Link to="/about" className="text-[#1F4B43] hover:text-gray-600">About Us</Link></li>
          <li><Link to="/Contact" className="text-[#1F4B43] hover:text-gray-600">Contact</Link></li>
        </ul>

        <div className='hidden md:flex items-center space-x-4'>
          <FaUserCircle className='text-gray-800 text-2xl' />
          <button className=" px-border border-gray-800 text-gray-8004 py-2 rounded hover:bg-[#1F4B43] hover:text-white">Add Property</button>
        </div>
      </div>

      {menuOpen && (
        <div className='md:hidden fixed top-0 right-0 h-full w-2/3 bg-gray-100 shadow-lg px-4 py-6'>
          <button onClick={toggleMenu} className='absolute top-4 left-4 text-gray-800 text-2xl'>
            &times;
          </button>
          <ul className='flex flex-col space-y-4 mt-8'>
            <li><Link to="/" className="text-[#1F4B43] hover:text-gray-600" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/buy" className="text-[#1F4B43] hover:text-gray-600" onClick={toggleMenu}>Buy</Link></li>
            <li><Link to="/sell" className="text-[#1F4B43] hover:text-gray-600" onClick={toggleMenu}>Sell</Link></li>
            <li><Link to="/rent" className="text-[#1F4B43] hover:text-gray-600" onClick={toggleMenu}>Rent</Link></li>
            <li><Link to="/about" className="text-[#1F4B43]-900 hover:text-gray-600" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/contact" className="text-[#1F4B43] hover:text-gray-600" onClick={toggleMenu}>Contact</Link></li>
          </ul>
          <div className='mt-6 flex items-center space-x-4'>
            <FaUserCircle className='text-gray-800 text-2xl' />
            <button className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-[#1F4B43] hover:text-white w-full">Add Property</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

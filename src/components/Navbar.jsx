import { Link } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useState } from "react";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full px-8 py-5">
      <div className="relative max-w-8xl mx-auto flex flex-row items-center justify-between bg-red-300 ">
        
        <Link to="/" className="text-2xl font-bold">
          Cafe FM
        </Link>

        <div className="flex flex-row items-center gap-8 max-[720px]:hidden">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>


       <button 
       onClick={()=>setIsOpen(!isOpen)}
        className="text-4xl hidden max-[720px]:block">
              <MdOutlineMenuOpen />
       </button>
           
      {isOpen && (
  <div className="fixed inset-0 w-full h-screen bg-red-300 z-50 flex flex-col items-center justify-center gap-8 min-[721px]:hidden">

    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-6 right-8 text-4xl"
    >
      ✕
    </button>

    <Link
      to="/"
      onClick={() => setIsOpen(false)}
      className="text-2xl font-semibold"
    >
      Home
    </Link>

    <Link
      to="/menu"
      onClick={() => setIsOpen(false)}
      className="text-2xl font-semibold"
    >
      Menu
    </Link>

    <Link
      to="/about"
      onClick={() => setIsOpen(false)}
      className="text-2xl font-semibold"
    >
      About
    </Link>

    <Link
      to="/contact"
      onClick={() => setIsOpen(false)}
      className="text-2xl font-semibold"
    >
      Contact
    </Link>

  </div>
)}
      </div>
    </nav>
  );
}

export default Navbar
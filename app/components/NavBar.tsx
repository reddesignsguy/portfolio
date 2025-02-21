import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for open/close

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <nav className="bg-transparent sticky w-full top-0 start-0 z-50">
      <div className="max-w-7xl flex items-center justify-between mx-auto px-8 py-6">
        {/* Name / Logo */}
        <Link href="/" className="text-white text-3xl font-bold">
          Albany Patriawan
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <></> : <FiMenu />}
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex md:space-x-8 text-white text-2xl">
          <Link href="https://github.com/reddesignsguy">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/albanyp/">
            <FaLinkedinIn />
          </Link>
          <Link href="mailto:albanypatriawan@gmail.com">
            <HiOutlineMail />
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center text-white text-xl space-y-6 z-50">
          <button
            className="absolute top-5 right-5 text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>

          <Link
            href="https://github.com/reddesignsguy"
            className="flex flex-row gap-5 items-center underline"
          >
            <FaGithub /> GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/albanyp/"
            className="flex flex-row gap-5 items-center underline"
          >
            <FaLinkedinIn /> LinkedIn
          </Link>
          <Link
            href="mailto:albanypatriawan@gmail.com"
            className="flex flex-row gap-5 items-center underline"
          >
            <HiOutlineMail /> albanypatriawan@gmail.com
          </Link>
        </div>
      )}
    </nav>
  );
}

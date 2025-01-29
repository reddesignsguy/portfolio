import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function NavBar() {
  return (
    <nav className="bg-transparent sticky w-full z-21 top-0 start-0 border-b border-gray-200 border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-8 py-11 scroll-smooth">
        <Link href="/#work-section" className="md:order-0">
          <span className=" md:flex md:w-auto md:order-1 hidden self-center text-2xl font-semibold whitespace-nowrap text-white md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            Work
          </span>
        </Link>
        <div
          className=" w-full md:flex md:w-auto md:order-1  p-4 md:p-0 mt-4 text-3xl font-bold border  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 border-0"
          id="navbar-sticky"
        >
          <Link
            href="/"
            className="flex justify-center block  px-3 text-white rounded md:bg-transparent md:text-#ffffff-700 md:p-0 md:text-white"
            aria-current="page"
          >
            Albany Patriawan
          </Link>
        </div>
        <div
          className="items-ri justify-between hidden w-full md:flex md:w-auto md:order-2"
          id="navbar-sticky"
        >
          <ul className=" text-white flex flex-col p-4 md:p-0 mt-4 text-3xl font-bold border   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link href="https://github.com/reddesignsguy">
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/albanyp/">
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link href="mailto:albanypatriawan@gmail.com">
                <HiOutlineMail />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

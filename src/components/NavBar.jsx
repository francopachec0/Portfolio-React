import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaWhatsappSquare} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';

export const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a1128] text-gray-50'>
            <div className=''>
                <img src={Logo} alt="Logo Image" style={{width: '160px'}}/>
            </div>
            {/* menu */}
                <ul className='hidden md:flex'>
                <li>
                    <Link to='home' className='hover:text-[#a31621] duration-200' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' className='hover:text-[#a31621] duration-200' smooth={true} duration={500}>
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to='skills' className='hover:text-[#a31621] duration-200' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='projects' className='hover:text-[#a31621] duration-200' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='contact' className='hover:text-[#a31621] duration-200' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
                </ul>
            {/* menu 3 rayitas mobile */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {
                    !nav ? <FaBars size={25}/> : <FaTimes size={25}/>
                }
            </div>
            {/* mobile menu */} 
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a1128] flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl'>
                    <Link to='home' onClick={handleClick} className='hover:text-[#a31621] duration-200' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-3xl'>
                    <Link to='about' onClick={handleClick} className='hover:text-[#a31621] duration-200' smooth={true} duration={500}>
                        About Me
                    </Link>
                </li>
                <li className='py-6 text-3xl'>
                    <Link to='skills' onClick={handleClick} className='hover:text-[#a31621] duration-200' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-3xl'>
                    <Link to='projects' onClick={handleClick} className='hover:text-[#a31621] duration-200' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-3xl'>
                    <Link to='contact' onClick={handleClick} className='hover:text-[#a31621] duration-200' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
                </ul>
            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-50' href="https://www.linkedin.com/in/francopachec0/" target='_blank'>
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#343a40]'>
                        <a className='flex justify-between items-center w-full text-gray-50' href="https://github.com/francopachec0" target='_blank'>
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#7f4f24]'>
                        <a className='flex justify-between items-center w-full text-gray-50' href="https://www.canva.com/design/DAE2vqz32FQ/5HR9WYjtQEXlmjY-kK9fww/view?utm_content=DAE2vqz32FQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target='_blank'>
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#058c42]'>
                        <a className='flex justify-between items-center w-full text-gray-50' href="https://wa.me/+543855374571" target='_blank'>
                            WhatsApp <FaWhatsappSquare size={30}/>
                        </a>
                    </li>
                </ul>
            </div>    
        </div>
    )
}

// []

export default NavBar;
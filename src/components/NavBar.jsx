import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaWhatsappSquare} from 'react-icons/fa'
import {BsFileEarmarkText} from 'react-icons/bs'
import { Link } from 'react-scroll';

export const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a1128] text-[#ebf2fa]'>
            <div className=''>
                <img src={Logo} alt="Mi Logo" style={{width: '160px'}}/>
            </div>
            {/* menu */}
                <ul className='hidden md:flex'>
                <li>
                    <Link to='home' className='hover:text-[#0466c8] duration-200' smooth={true} duration={500}>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to='about' className='hover:text-[#0466c8] duration-200' smooth={true} duration={500}>
                        Sobre Mí
                    </Link>
                </li>
                <li>
                    <Link to='skills' className='hover:text-[#0466c8] duration-200' smooth={true} duration={500}>
                        Habilidades
                    </Link>
                </li>
                <li>
                    <Link to='projects' className='hover:text-[#0466c8] duration-200' smooth={true} duration={500}>
                        Proyectos
                    </Link>
                </li>
                <li>
                    <Link to='contact' className='hover:text-[#0466c8] duration-200' smooth={true} duration={500}>
                        Contacto
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
                    <Link to='home' onClick={handleClick} className='hover:text-[#0466c8] duration-200' smooth={true} duration={500}>
                        Inicio
                    </Link>
                </li>
                <li className='py-6 text-3xl'>
                    <Link to='about' onClick={handleClick} className='hover:text-[#0466c8] duration-200' smooth={true} duration={500}>
                        Sobre Mí
                    </Link>
                </li>
                <li className='py-6 text-3xl'>
                    <Link to='skills' onClick={handleClick} className='hover:text-[#0466c8] duration-200' smooth={true} duration={500}>
                        Habilidades
                    </Link>
                </li>
                <li className='py-6 text-3xl'>
                    <Link to='projects' onClick={handleClick} className='hover:text-[#0466c8] duration-200' smooth={true} duration={500}>
                        Proyectos
                    </Link>
                </li>
                <li className='py-6 text-3xl'>
                    <Link to='contact' onClick={handleClick} className='hover:text-[#0466c8] duration-200' smooth={true} duration={500}>
                        Contacto
                    </Link>
                </li>
                </ul>
            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-[#ebf2fa] ml-3' href="https://www.linkedin.com/in/francopachec0/" target='_blank' rel='noreferrer'>
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#212529]'>
                        <a className='flex justify-between items-center w-full text-[#ebf2fa] ml-3' href="https://github.com/francopachec0" target='_blank' rel='noreferrer'>
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#583101]'>
                        <a className='flex justify-between items-center w-full text-[#ebf2fa] ml-3' href="https://drive.google.com/file/d/1A02uRhP0v3G23U1rH0Vi23P-FehyZHwh/view?usp=sharing" target='_blank' rel='noreferrer'>
                            CV <BsFileEarmarkText size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#058c42]'>
                        <a className='flex justify-between items-center w-full text-[#ebf2fa] ml-3' href="https://wa.me/+543855374571" target='_blank' rel='noreferrer'>
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
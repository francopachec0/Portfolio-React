import React from 'react'
import {FaGithub, FaLinkedin, FaWhatsappSquare} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

export const SocialMedia = () => {
    return (
        <div>
            <div className="md:hidden fixed top-[14%] left-0">
                <ul>
                    <li className='w-[140px] h-[30px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-50' href="https://www.linkedin.com/in/francopachec0/" target='_blank'>
                            LinkedIn <FaLinkedin size={22}/>
                        </a>
                    </li>
                    <li className='w-[140px] h-[30px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#343a40]'>
                        <a className='flex justify-between items-center w-full text-gray-50' href="https://github.com/francopachec0" target='_blank'>
                            GitHub <FaGithub size={22}/>
                        </a>
                    </li>
                    <li className='w-[140px] h-[30px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#7f4f24]'>
                        <a className='flex justify-between items-center w-full text-gray-50' href="https://www.canva.com/design/DAE2vqz32FQ/5HR9WYjtQEXlmjY-kK9fww/view?utm_content=DAE2vqz32FQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target='_blank'>
                            Resume <BsFillPersonLinesFill size={22}/>
                        </a>
                    </li>
                    <li className='w-[140px] h-[30px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#058c42]'>
                        <a className='flex justify-between items-center w-full text-gray-50' href="https://wa.me/+543855374571" target='_blank'>
                            WhatsApp <FaWhatsappSquare size={22}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

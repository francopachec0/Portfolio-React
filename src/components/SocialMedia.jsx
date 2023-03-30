import React from 'react'
import {FaGithub, FaLinkedin, FaWhatsappSquare} from 'react-icons/fa'
import {BsFileEarmarkText} from 'react-icons/bs'

export const SocialMedia = () => {
    return (
        <div>
            <div className="md:hidden fixed top-[12%] right-0 flex-col">
                <ul>
                    <li className='w-[140px] h-[30px] flex justify-between items-center mr-[-88px]  bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-[#ebf2fa]' href="https://www.linkedin.com/in/francopachec0/" target='_blank' rel='noreferrer'>
                            <FaLinkedin size={22} />
                        </a>
                    </li>
                    <li className='w-[140px] h-[30px] flex justify-between items-center mr-[-100px] bg-[#212529]'>
                        <a className='flex justify-between items-center w-full text-[#ebf2fa]' href="https://github.com/francopachec0" target='_blank' rel='noreferrer'>
                            <FaGithub size={22}/>
                        </a>
                    </li>
                    <li className='w-[140px] h-[30px] flex justify-between items-center mr-[-100px] bg-[#583101]'>
                        <a className='flex justify-between items-center w-full text-[#ebf2fa]' href="https://drive.google.com/file/d/1P_HjHXsx_xBb4SvbOpCifPmoh91jiM1W/view?usp=share_link" target='_blank' rel='noreferrer'>
                            <BsFileEarmarkText size={22}/>
                        </a>
                    </li>
                    <li className='w-[140px] h-[30px] flex justify-between items-center mr-[-100px] bg-[#058c42]'>
                        <a className='flex justify-between items-center w-full text-[#ebf2fa]' href="https://wa.me/+543855170336" target='_blank' rel='noreferrer'>
                            <FaWhatsappSquare size={22}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';

export const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a1128]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-2xl text-gray-50'>Hola, mi nombre es</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#a31621]'>Franco Pacheco</h1>
                <h2 className='text-2xl sm:text-7xl text-gray-400'>Frontend Developer</h2>
                <p className='text-gray-50 py-4 max-w-[450px]'>Me encanta la tecnología y las experiencias digitales, enfocado en diseños modernos de 
                aplicaciones Full-Responsive.
                </p>
                <div>
                    <button className='text-gray-50 group border-2 px-6 py-3 my-2 rounded-lg flex items-center hover:bg-[#a31621] duration-300 hover:border-[#a31621]'>
                        <Link to='projects' smooth={true} duration={500}>Mis Proyectos</Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight size={20} className='ml-4'/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

// []

export default Home;


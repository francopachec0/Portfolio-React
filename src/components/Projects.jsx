import React from 'react';
import Pokemon from '../assets/pokemon.png';
import Countries from '../assets/countries.png';
import Portfolio from '../assets/Captura.PNG'

const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-50 bg-[#0a1128]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-50 border-[#a31621]'>
                Proyectos
            </p>
            <p className='py-6'>Algunos de mis trabajos recientes.</p>
            </div>

    {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
            <div
                style={{ backgroundImage: `url(${Pokemon})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    Pokemon App
                </span>
                <div className='pt-8 text-center'>
                    {/*<a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Demo
                    </button>
    </a>*/}
                    <a href='https://github.com/francopachec0/POKEMON-APP' target='_blank'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Repositorio
                    </button>
                    </a>
                </div>
                </div>
            </div>
            <div
                style={{ backgroundImage: `url(${Countries})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    Countries App
                </span>
                <div className='pt-8 text-center'>
                    <a href='https://github.com/francopachec0/COUNTRIES-APP' target='_blank'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Repositorio
                    </button>
                    </a>
                </div>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${Portfolio})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    Portfolio App
                </span>
                <div className='pt-8 text-center'>
                    {/*<a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Demo
                    </button>
    </a>*/}
                    <a href='https://github.com/francopachec0/Portfolio-React' target='_blank'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Repositorio
                    </button>
                    </a>
                </div>
                </div>
            </div>
                
            </div>
            </div>
        </div>
    );
};

export default Projects;
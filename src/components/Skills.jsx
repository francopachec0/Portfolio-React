import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Redux from '../assets/redux.png';
import GitHub from '../assets/github.png';
import Git from '../assets/git.png';

const Skills = () => {
    return (
    <div name='skills' className='w-full h-screen bg-[#0a1128] text-gray-50'>
      {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#a31621] '>Hard Skills</p>
                <p className='py-4'>Estas son las tecnologías en la que estoy trabajando/capacitandome.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Redux} alt="HTML icon" />
                    <p className='my-4'>REDUX</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Git} alt="HTML icon" />
                    <p className='my-4'>GIT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
            </div>
            {/*<div>
                <p className='text-4xl font-bold inline border-b-4 border-[#a31621] '>Soft Skills</p>
                <p className='py-4'>Aprendizaje Rapido, Adaptación, Comunicación, Trabajo en Equipo, Creatividad, Gestión del Tiempo.</p>
            </div>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#a31621] '>Otros Datos</p>
                <p className='py-4'>Scrum, Trello, Slack, Inglés Básico.</p>
    </div>*/}
        </div>
        </div>
    );
};

export default Skills;
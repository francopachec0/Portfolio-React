import React from 'react'

export const SoftSkills = () => {
    return (
        <div className='w-full h-screen bg-[#0a1128] text-gray-50'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#a31621] '>Soft Skills</p>
                    <p className='py-4'>Aprendizaje Rapido, Adaptación, Autonomía, Comunicación, Trabajo en Equipo, Creatividad, Gestión del Tiempo.</p>
                </div>
                <br /> <br /> <br /> <br /> <br />
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#a31621] '>Otros Datos</p>
                    <p className='py-4'>Scrum, Trello, Slack, Inglés B1.</p>
                </div>
                </div>
            </div>
    )
}

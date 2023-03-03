import React from 'react'

export const SoftSkills = () => {
    return (
        <div className='w-full h-screen bg-[#0a1128] text-[#ebf2fa]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#0466c8]'>Soft Skills</p>
                    <p className='py-4'>Aprendizaje Rapido, Adaptación, Autonomía, Comunicación, Trabajo en Equipo, Creatividad, Gestión del Tiempo, Curiosidad.</p>
                </div>
                <br /> <br /> <br /> <br />
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#0466c8]'>Otros Datos</p>
                    <p className='py-4'>Scrum, Trello, Slack, Inglés B1.</p>
                </div>
                </div>
            </div>
    )
}

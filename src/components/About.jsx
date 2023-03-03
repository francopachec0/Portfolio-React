import React from 'react'

export const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a1128] text-[#ebf2fa]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-3xl font-bold inline border-b-4 border-[#0466c8]'>Sobre Mí</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 px-8'>
                    <div className='md:text-center md:text-xl text-md font-bold'>
                        <p className='text-[#979DAC]'>🎓 Graduado del Bootcamp de HENRY como Web Developer 💻💛</p>
                        <p className='text-[#ebf2fa]'>🌎 Resido en Santiago del Estero, Argentina y busco empleo remoto</p>
                        <p className='text-[#979DAC]'>💼 Estoy abierto a ofertas laborales y con muchas ganas de seguir capacitandome en este mundo IT</p>
                        <p className='m-4 text-center'>⭐⭐⭐</p>
                    </div>
                    <div className='md:text-center md:text-xl text-md font-bold'>
                        <p className='text-[#979DAC]'>👨‍💻 Me encuentro conociendo otras tecnologias y realizando mini proyectos de manera auto didacta</p>
                        <p className='text-[#ebf2fa]'>👋🏼 Tengo 22 años, me gusta la programacion y me encanta aprender cosas nuevas!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// []
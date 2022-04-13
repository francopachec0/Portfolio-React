import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a1128] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/645ffd8c-9789-463e-a185-96bf1f503a87" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#a31621] text-gray-50'>Contáctame</p>
                    <p className='text-gray-50 py-4'>Completa el formulario o envíame un correo - francopacheco.dev@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required/>
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required />
                <textarea className='bg-[#ccd6f6] p-2' type='text' name="message" rows="10" placeholder='Message' required></textarea>
                <button className='text-white border-2 hover:bg-[#a31621] hover:border-[#a31621] duration-300 rounded-lg px-4 py-3 my-8 mx-auto flex items-center'>Trabajemos Juntos</button>
            </form>
        </div>
    )
}

export default Contact
import React from 'react'

const Contact = () => {
    return (
        <div className='flex justify-center'>
            <div className='max md:flex md:justify-between w-full  bg-zinc-200 p-16 my-12'>
                <div className='font-bricolage w-[43%] max-md:w-full'>
                    <h1 className='text-5xl'>
                        Satisfaction sans pression chez Ths-Group
                    </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur doloremque ea praesentium odio alias dolor adipisci animi ratione quibusdam fugit dicta quae provident impedit, repellendus iure dolorem eaque veritatis reiciendis!</p>
                </div>
                <div className='w-full md:max-w-[43%]'>
                    <div className='w-full flex flex-col md:grid md:grid-cols-2 gap-3'>
                        <input type="text" name="" placeholder='Nom complet' id="" className='px-1 w-full py-3 border-b-[1px] border-zinc-500 bg-transparent' />
                        <input type="number" name="" placeholder='Téléphone' id="" className='px-1 w-full py-3 border-b-[1px] border-zinc-500 bg-transparent' />
                        <textarea name="" placeholder='Votre message' id="" className='md:col-span-2 px-1 w-full py-3 border-b-[1px] border-zinc-500 bg-transparent' />
                    </div>
                    <button className='bg-orange-600 text-white font-semibold px-8 py-4 my-4'>Envoyer</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
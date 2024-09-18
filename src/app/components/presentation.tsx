import React from 'react'
import AppBar from './app_bar'

const Presentation = () => {
    return (
        <div className="flex justify-center bg-blue-950 bg-[url('/bg-blue.png')] bg-cover">
            <div className='w-full flex justify-center bg-black/20'>
                <div className='max w-full text-white'>
                    <AppBar></AppBar>

                    <div className='my-14'>
                        <div className="max my-10 space-y-3">
                            <h1 className="text-5xl font-extralight font-bricolage">THS-Group est </h1>
                            <h1 className="text-6xl font-extrabold font-bricolage">Une Innovation</h1>
                            <h1 className="text-6xl font-play font-light italic">En Formation Digitale</h1>
                        </div>
                        <div className=" max flex  justify-between max-sm:flex-wrap">
                            <p className="w-[400px]">
                                Transformez vos ambitions en compétences digitales grâce à nos formations, pour réussir dans un monde en pleine transformation.
                            </p>
                            <button className="bg-black text-white px-10 py-4 uppercase font-semibold my-3">nos services</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation
import React from 'react'
import AppBar from './app_bar'

const Presentation = () => {
    return (
        <div className="flex justify-center bg-blue-950 bg-[url('/bg-blue.png')] bg-cover">
            <div className='w-full flex justify-center bg-black/20'>

                <div className='w-full flex flex-col items-center text-white'>
                    <AppBar></AppBar>

                    <div className='max w-full p-6 space-y-5 md:space-y-10'>
                        <div className="max space-y-3">
                            <h1 className="text-3xl md:text-5xl font-extralight font-bricolage">THS-Group est </h1>
                            <h1 className="text-4xl md:text-6xl  font-extrabold font-bricolage">Une Innovation</h1>
                            <h1 className="text-4xl md:text-6xl  font-play font-light italic">En Formation Digitale</h1>
                        </div>
                        <div className=" max flex  justify-between max-sm:flex-wrap">
                            <p className="w-[400px]">
                                Transformez vos ambitions en compétences digitales grâce à nos formations, pour réussir dans un monde en pleine transformation.
                            </p>
                            <button className="bg-white text-black px-10 py-4 uppercase font-semibold my-3">nos services</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation
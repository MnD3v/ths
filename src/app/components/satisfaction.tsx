import React from 'react'

const Satisfaction = () => {

    const chiffres = [
        { titre: "750", subtitre: "Jeunes", description: " ont bénéficié de programmes de formation et d'accompagnement professionnel" },
        { titre: "6", subtitre: "ans", description: " d'impact et de croissance continue dans l'accompagnement des jeunes" },
        { titre: "98", subtitre: "%", description: "de satisfaction de nos clients devient 98% de nos clients se déclarent pleinement satisfaits des services et des résultats obtenus" },
    ]
    return (
        <div className='flex  justify-center bg-slate-100 py-10 my-10 '>
            <div className=' max w-full flex flex-wrap justify-between max-md:justify-center font-bricolage text-center  capitalize p-4'>

                {
                    chiffres.map((element) => (
                        <div key={element.titre} className='w-72 flex flex-col items-center'>
                            <h1 className='text-6xl'>{element.titre} <span className='text-2xl font-syne'>{element.subtitre}</span></h1>
                            <p className='font-syne text-lg font-semibold text-zinc-700'>{element.description}</p>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Satisfaction
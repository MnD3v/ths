import React from 'react'

const APropos = () => {
    return (
        <div className='flex  justify-center p-3'>
            <div className='flex flex-wrap max-w-[900px] space-x-3'>
                <img src="/entreprise.jpg" alt="" className='h-[260px] w-full object-cover sm:h-[360px] md:h-[460px] lg:w-[400px] lg:h-auto' />
                <div className='w-full md:w-[600px] lg:w-[400px]'>
                    <div className='flex items-center'>
                        <p className='text-orange-600 uppercase font-poppins font-bold'>A propos de nous</p>
                        <div className='h-px bg-orange-600 w-20 ml-2'></div>

                    </div>
                    <h1 className='text-3xl md:text-5xl text-blue-900 leading-tight'>
                        Nous sommes une Entreprise de formation des jeunes dans les metiers digitaux
                    </h1>
                    <h3 className='text-orange-600'>
                        Avantages</h3>
                    {
                        ["Accompagnement personnalisé: Chaque apprenant bénéficie d’un suivi individuel pour maximiser son potentiel.", "Formateurs experts: Nos formateurs sont des professionnels du secteur, prêts à partager leur expérience et savoir-faire.", "Méthodes d'apprentissage innovantes: Utilisation des dernières technologies et outils pour un apprentissage pratique et efficace.", "Partenariats avec des entreprises: Nous collaborons avec des entreprises locales et internationales pour faciliter l'insertion professionnelle de nos apprenants.", "Certifications reconnues: Nos formations sont certifiées et reconnues dans le secteur numérique."].map((element) => (
                            <div key={element} className='flex my-3'>
                                <img src="/icons/check.png" alt="" className='h-7' />
                                <p><span className='font-semibold underline'>{element.split(':')[0]}</span> :{element.split(':')[1]}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default APropos
import Link from 'next/link'
import React from 'react'

const Services = () => {

    const services = [
        {
            icon: "topographie.png",
            title: "TOPOGRAPHIE",
            description: "Apprenez les techniques modernes de relevé et d'analyse de terrains, en utilisant des outils de géomatique et de cartographie numérique. Cette formation vous prépare aux métiers de la topographie avec une maîtrise complète des équipements de pointe",
            link: "topographie"
        }
        ,
        {
            icon: "reseau.png",
            title: "MAINTENANCE ET RÉSEAU INFORMATIQUE",
            description: "Devenez un expert en maintenance informatique et en gestion de réseaux. Vous apprendrez à diagnostiquer et réparer des systèmes, ainsi qu’à installer, configurer et gérer des réseaux informatiques pour des entreprises de toutes tailles.",
            link: "maintenance-et-reseau-informatique"
        },
        {
            icon: "vente.png",
            title: "VENTE ET GESTION DE CAISSE",
            description: "Acquérez les compétences nécessaires pour travailler dans la vente au détail et la gestion des opérations de caisse. Cette formation vous prépare à la gestion des transactions commerciales, des inventaires et des relations clients.",
            link: "vente-et-gestion-de-caisse"
        },
        {
            icon: "transi.png",
            title: "TRANSI DOUANE & MAGASINAGE",
            description: "Cette formation vous prépare à gérer les processus de transit douanier et de magasinage. Apprenez à assurer le suivi des marchandises, à maîtriser les procédures douanières et à organiser les flux logistiques de manière optimale.",
            link: "transi-douane-magasinage"
        },
        {
            icon: "langue.png",
            title: "LANGUES",
            description: "Améliorez vos compétences linguistiques dans des langues clés pour le commerce international et les affaires. Nous proposons des formations adaptées aux besoins professionnels, avec des cours intensifs en anglais, espagnole, français et autres langues.",
            link: "langues"
        }
    ]
    return (
        <div className='my-10 flex flex-col items-center'>
            <h1 className='my-9 uppercase  font-semibold text-2xl md:text-4xl'>Nos formations</h1>
            <div className=' max flex flex-wrap justify-center gap-6'>
                {
                    services.map((element) => (
                        <Link key={element.icon} href={"/formations/" + element.link}> <div
                            style={
                                { boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)" }
                            }
                            className='w-full sm:w-72 space-y-4 p-6 m-2'>
                            <img src={"/icons/" + element.icon} alt="" className='h-14' />
                            <h3 className='font-semibold font-bricolage'>{element.title}</h3>
                            <div className='h-px bg-zinc-200 w-30'></div>
                            <p>{element.description}</p>
                            <button className='font-bold text-orange-600 '>
                                <div className='flex items-center'>
                                    <p>Voir plus</p>
                                    <img src="/icons/arrow-go.png" alt="" className='h-6' />
                                </div>
                            </button>
                        </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Services
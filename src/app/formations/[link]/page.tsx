"use client"
import { formations } from '@/app/constants';
const Formation = ({ params }: { params: { link: string } }) => {


    const formation = formations.find((e) => {
        console.log(params);
        console.log(e.link);

        return e.link === params.link
    });
    console.log(formation)
    // if (!formation) {
    //     notFound()
    // }


    return (
        <div className='max leading-relaxed'>
            <div className='m-6'>
                <img src={"/formations/" + formation?.icon.split('.')[0] + ".jpg"} alt="" className='h-[500px] w-full object-cover' />
                <h1 className='font-bricolage text-orange-600 mt-6'>{formation?.title}</h1>
                <p>{formation?.full_description}</p>
                <h2 className='text-orange-600 font-bricolage mt-6'>Débouchés</h2>
                {
                    formation?.debouches?.split("*").map((element) => (
                        <div key={element}><p> <span className='font-bricolage font-bold text-lg'>-{element.split(':')[0]} </span>:{element.split(':')[1]}</p></div>
                    ))
                }
                <h2 className='font-bricolage text-orange-600 mt-6'>Unités d'enseignement</h2>
                {
                    formation?.ues?.split("*").map((element) => (
                        <div key={element}><p className='font-semibold'>- {element}</p></div>
                    ))
                }
            </div>
        </div>
    )
}

export default Formation
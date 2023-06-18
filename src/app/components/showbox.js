import Image from 'next/image'
import chart from '/public/chart.png'
import code from '/public/code.png'
import shakespear from '/public/shakespear.png'
import writing from '/public/writing.jpg'

export default function ShowBox (props) {

    // title, description, img
    let img = {
        "chart": chart,
        "code": code,
        "shakespear": shakespear,
        "writing": writing,
    }

    return (
        <div className="flex flex-col md:flex-row items-center w-full md:w-4/5 mx-auto h-72 p-5 ">
            <Image src={img[props.img]} className="md:w-1/3 w-1/2 h-full object-cover rounded-xl" alt='...' />
            <div className='text-center w-1/2 mx-auto'>
                <h3 className="sm:text-3xl text-2xl font-bold pb-4 md:pt-0 pt-4">{props.title}</h3>
                <p className='hidden md:block'>{props.description}</p>
            </div>
        </div>
    )
}
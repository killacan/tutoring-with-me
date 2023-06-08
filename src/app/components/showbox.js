import Image from 'next/image'
import chart from '/public/chart.png'
import code from '/public/code.png'
import shakespear from '/public/shakespear.png'
import writing from '/public/writing.jpg'

export default function ShowBox (props) {

    // title, description, img
    console.log(props)

    let img = {
        "chart": chart,
        "code": code,
        "shakespear": shakespear,
        "writing": writing,
    }

    return (
        <div className="flex flex-col justify-center items-center bg-sky-300 w-full h-60 border border-black rounded-lg hover:scale-110 duration-300">
            <Image src={img[props.img]} className="w-32 h-32" alt='...' />
            <h3 className="text-xl font-bold">{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
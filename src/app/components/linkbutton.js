import Link from 'next/link'

export default function navButton (text, link) {
    return (
        <Link href={link}>
            <div className='p-2 font-burtons text-white '>
                <p className="md:text-2xl ">{text}</p>
            </div>
        </Link>
    )
}
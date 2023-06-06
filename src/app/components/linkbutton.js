import Link from 'next/link'

export default function navButton (text, link) {
    return (
        <Link href={link}>
            <div className='p-2 text-black '>
                <p className="text-2xl ">{text}</p>
            </div>
        </Link>
    )
}
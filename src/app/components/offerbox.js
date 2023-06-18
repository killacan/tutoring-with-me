

export default function OfferBox (props) {

    return (
        <>
            <div className="w-1/2 md:w-2/5 p-10">
                <h3 className="text-2xl font-bold text-center pb-5">{props.title}</h3>
                <p className="text-center">{props.text}</p>
                <p className="text-center pt-5">{props.price}</p>
            </div>
        </>
    )
}


export default function OfferBox (props) {

    return (
        <div className="p-10 m-5 border border-black rounded-xl drop-shadow-lg">
            <h3 className="text-2xl font-bold text-center pb-5">{props.title}</h3>
            <p className="text-center">{props.text}</p>
            <p className="text-center pt-5">{props.price}</p>
        </div>
    )
}


export default function OfferBox (props) {

    return (
        <>
            <div className="w-2/5">
                <h3 className="text-2xl font-bold text-center">{props.title}</h3>
                <p className="text-center">{props.text}</p>
            </div>
        </>
    )
}
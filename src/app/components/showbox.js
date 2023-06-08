export default function ShowBox (props) {

    // title, description,

    return (
        <div className="flex flex-col justify-center items-center bg-sky-300 w-60 h-60 border border-black rounded-lg hover:scale-110 duration-300 ">
            <h3 className="text-xl font-bold">{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
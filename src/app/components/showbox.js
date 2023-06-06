export default function ShowBox (props) {

    // title, description,

    return (
        <div className="flex flex-col justify-center items-center w-full h-full border-black">
            {props.title}
            {props.description}
        </div>
    )
}
import navButton from "./linkbutton"

export default function Navbar () {

    return (
        
        <div className="flex justify-between items-center w-full bg-sky-600">
            <h2 className="w-full text-black">Tutoring With Cameron</h2>
            <div className="flex">
                {navButton("Home", "/")}
                {navButton("About", "/about")}
                {navButton("Services", "/services")}
                {navButton("Contact", "/contact")}
            </div>
        </div>
        
    )
}
import navButton from "./linkbutton"

export default function Navbar () {

    return (
        
        <div className="flex justify-between items-center w-full px-10 bg-slate-700 sticky top-0">
            <h2 className="w-full font-burtons text-white">Tutoring With Cameron</h2>
            <div className="flex">
                {navButton("Home", "/")}
                {navButton("About", "/about")}
                {navButton("Services", "/services")}
                {navButton("Contact", "/contact")}
            </div>
        </div>
        
    )
}
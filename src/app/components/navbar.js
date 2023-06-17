import navButton from "./linkbutton"
import InPageLink from "./inpagelink"

export default function Navbar () {

    // return (
        
    //     <div className="flex justify-between items-center w-full xlg:p-10 md:p-7 sm:p-5 bg-slate-700 sticky top-0 z-10">
    //         {/* <h2 className="w-full font-burtons text-white">Tutoring With Cameron</h2> */}
    //         {navButton("Tutoring With Cameron", "/")}
    //         <div className="flex">
    //             {navButton("Home", "/")}
    //             {navButton("About", "/about")}
    //             {/* {navButton("Services", "/services")} */}
    //             {navButton("Contact", "/contact")}
    //         </div>
    //     </div>
        
    // )

    return (
        <div className="flex justify-between items-center w-full xlg:p-10 md:p-7 sm:p-5 bg-slate-700 sticky top-0 z-10">
            {InPageLink("Tutoring With Cameron", "top")}
            <div className="flex">
                {InPageLink("Home", "#top")}
                {InPageLink("Subjects", "#subjects")}
                {InPageLink("Offers", "#offers")}
                {InPageLink("Contact", "#contact")}
            </div>
        </div>
    )

}
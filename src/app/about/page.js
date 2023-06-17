import ContactForm from "../components/contactform"
import ContactMe from "../components/contactme"
import Welcome from "../components/welcome"

export default function About () {
    return (
        <div className="flex flex-col items-center">

            <div className="flex flex-col w-[640px] content-center justify-items-center">
                <h1 className="text-3xl py-5">About me</h1>

                <p>I am a dedicated and passionate tutor with a strong background in coding, education, and robotics. Here is a glimpse into my journey.</p>

                <h2 className="text-2xl py-5">Coding Bootcamp Experience </h2>

                <p className="pb-2">I honed my technical skills through a rigorous coding bootcamp at App Academy. Highlights of my bootcamp experience include:</p>
                
                <ul className="list-disc pl-5">
                    <li>Graduated from App Academy, a renowned coding bootcamp known for its intensive curriculum.</li>

                    <li>My expertise in JavaScript, Ruby, HTML, and CSS3, gaining a solid foundation in web development. </li>

                    <li>Self taught in Python to expand my programming knowledge, leading to the creation of my own AI Chatbot.</li>
                    
                </ul>

                <h2 className="text-2xl py-5">Academic Background</h2>

                <p>I hold a degree in Political Science from San Jose State University where I graduated with a BA in Political Science</p>

                <h2 className="text-2xl py-5">Teaching and Robotics</h2>

                <p className="pb-2">
                    For the past two years, I have been actively involved in teaching robotics at Kids Robotics Academy. This experience has been
                    incredibly fulfilling and has inspired me to embark on a new journey. Some Highlights include:
                </p>

                <ul className="list-disc pl-5">
                    <li>
                        Developed a passion for teaching and mentoring young minds, helping them to develop a love for learning.
                    </li>

                    <li>
                        Served as a robotics instructor, guiding young minds in the fascinating world of robotics. 
                    </li>

                    <li>
                        Recognizing the potential to create a unique and tailored learning experience, I have decided to launch my own independent tutoring program. 
                    </li>

                </ul>


            </div>
            <div className="flex flex-col items-center justify-center w-full">
                {/* <ContactForm /> */}
                <ContactMe />
            </div>
        </div>
    )
}
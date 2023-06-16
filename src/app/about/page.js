import ContactForm from "../components/contactform"

export default function About () {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col w-1/3 content-center justify-items-center">
                <h1 className="text-4xl py-5 ">About me</h1>

                <p>I am a dedicated and passionate tutor with a strong background in coding, education, and robotics. Here is a glimpse into my journey</p>

                <h2 className="text-2xl py-5">Coding Bootcamp Experience </h2>

                <p>I honed my technical skills through a rigorous coding bootcamp at App Academy. Highlights of my bootcamp experience include:</p>
                
                <ul className="list-disc pl-5">
                    <li>Graduated from App Academy, a renowned coding bootcamp known for its intensive curriculum.</li>

                    <li>Acquired expertise in JavaScript, Ruby, HTML, and CSS3, gaining a solid foundation in web development. </li>

                    <li>Pursued self-study in Python to expand my programming knowledge and repertoire, culminating in creating my own AI Chatbot.</li>
                    
                </ul>

                <h2 className="text-2xl py-5">Academic Background</h2>

                <p>I hold a degree in Political Science from San Jose State University where I graduated with a BA in Political Science</p>

                <h2 className="text-2xl py-5">Teaching and Robotics</h2>

                <p>
                    For the past two years, I have been actively involved in teaching robotics at Kids Robotics Academy. This experience has been
                    incredibly fulfilling and has inspired me to embark on a new journey. Some Highlights include:
                </p>

                <p>
                    Served as a robotics instructor, guiding young minds in the fascinating world of robotics. 
                </p>

                <p>
                    Recognizing the potential to create a unique and tailored learning experience, I have decided to launch my own independent tutoring program. 
                </p>


            </div>
            <div className="flex flex-col items-center justify-center w-full">
                {/* <ContactForm /> */}
            </div>
        </div>
    )
}
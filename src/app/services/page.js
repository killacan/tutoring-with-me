import ContactMe from "../components/contactme"
import ShowBox from "../components/showbox"

export default function Services () {
    
    let showboxes = [
        {
          id: 1,
          title: "Programming",
          description: "Are you looking to enhance your programming skills or learn a new programming language? I offer personalized programming tutoring sessions tailored to your needs. Whether you're a beginner or looking to tackle advanced topics, I can assist you in areas such as Python, JavaScript, web development, algorithms, and more.",
          img: "code",
        },
        {
          id: 2,
          title: "Math",
          description: "Need help with math concepts and problem-solving? I provide comprehensive math tutoring to students of all levels. From elementary arithmetic to pre-calculus and Trigonometry, I can guide you in understanding mathematical principles, improving problem-solving techniques, and boosting your confidence in math.",
          img: "chart",
        },
        {
          id: 3,
          title: "Reading",
          description: "Enhancing reading comprehension and fluency is essential for academic success. With my reading tutoring services, I help students develop critical reading skills, improve vocabulary, and enhance their ability to analyze and interpret texts. Whether it's literature, informational texts, or standardized test preparation, I'm here to support your reading journey.",
          img: "shakespear",
        },
        {
          id: 4,
          title: "Writing",
          description: "Strong writing skills are crucial for effective communication in any field. As a writing tutor, I assist students in developing their writing abilities, including essay writing, creative writing, grammar, and structuring coherent arguments. From brainstorming ideas to polishing the final draft, I can help you become a confident and proficient writer.",
          img: "writing",
        },
      ]
    
      const showboxBuilder = () => {
        return showboxes.map((showbox) => {
          return (
            <ShowBox
              key={showbox.id}
              title={showbox.title}
              description={showbox.description}
              img={showbox.img}
            />
          )
        })
      }
    
    return (
        <div className="flex flex-col">

            <div className="w-2/5 p-10 mx-auto">
                <h3 className="text-2xl font-bold text-center pb-5">Online</h3>
                <p className="text-center">I offer online tutoring sessions via zoom (or your preferred conference software). I can share my screen with you and we can work through problems together. I can also provide a link for a google doc so we can work collaboratively with live comments and edits. For programming related tutoring I can provide a link to a repl.it session so we can work on code together.</p>
            </div>

            <div className="w-2/5 p-10 mx-auto">
                <h3 className="text-2xl font-bold text-center pb-5">In Person</h3>
                <p className="text-center">I offer in person tutoring sessions in the Galveston area. I can meet you at your home for a one on one session covering the topics you need help with. For programming related tutoring I can provide an extra laptop for the session if needed.</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-sky-100 lg:p-10 md:p-7 sm:p-5 ">
        <h2 className="text-4xl font-bold text-center">Subjects</h2>
        <div className="flex flex-col h-auto w-full divide-y-2 divide-black" >
          {showboxBuilder()}
        </div>
      </div>

            <ContactMe />
        </div>
    )
}
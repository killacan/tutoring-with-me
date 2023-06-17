import ShowBox from "./components/showbox"
// import Slides from "./components/slides"
import OfferBox from "./components/offerbox";
import ContactMe from "./components/contactme";

import "tw-elements/dist/css/tw-elements.min.css";

export default function Home() {

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

  let offerBoxes = [
    {
      id: 1,
      title: "In Person",
      text: "I offer in person tutoring sessions in the Galveston area. I can meet you at your home for a one on one session covering the topics you need help with. For programming related tutoring I can provide an extra laptop for the session if needed."
    },
    {
      id: 2,
      title: "Online",
      text: "I offer online tutoring sessions via zoom. I can share my screen with you and we can work through problems together. I can also provide a link for a google doc so we can work collaboratively with live comments and edits. For programming related tutoring I can provide a link to a repl.it session so we can work on code together."
    }

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

  const offerBoxBuilder = () => {
    return offerBoxes.map((offerBox) => {
      return (
        <OfferBox
          key={offerBox.id}
          title={offerBox.title}
          text={offerBox.text}
        />
      )
    })
  }
  

  return (

    <main className="flex-col text-black" >

      <div className="flex flex-col items-center p-32 bg-blue-700" >

        <div className="flex flex-col p-10 bg-black/30">
          <h1 className="flex items-center justify-center text-yellow-500 my-auto h-32">
            Looking for a tutor?
          </h1>
          
          <h2 className="text-6xl oldbg-[#6c22a5] text-center max-w-xl h-32 text-white">
            Tutoring with Cameron
          </h2>
        </div>
        
      </div>

      <div className="flex flex-col items-center justify-center bg-sky-100 xlg:p-10 md:p-7 sm:p-5 ">
        <h2 className="text-4xl font-bold text-center">Subjects</h2>
        <div className="flex flex-col h-auto w-full divide-y-2 divide-black" >
          {showboxBuilder()}
        </div>
      </div>
      {/* <div className="flex justify-center w-full p-10 ">
        <Slides />
      </div> */}

      <div className="flex flex-col p-10">
        <h2 className="text-4xl font-bold text-center py-10">What I Offer</h2>
        <div className="flex flex-row justify-center divide-x-2 divide-black">
          {offerBoxBuilder()}
        </div>
      </div>

      <ContactMe />
        
      </main>
  )
}

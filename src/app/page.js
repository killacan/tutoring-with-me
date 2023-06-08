import ShowBox from "./components/showbox"
import Slides from "./components/slides"

export default function Home() {

  let showboxes = [
    {
      id: 1,
      title: "Programming",
      description: "placeholder",
      img: "chart",
    },
    {
      id: 2,
      title: "Math",
      description: "placeholder",
      img: "code",
    },
    {
      id: 3,
      title: "Reading",
      description: "placeholder",
      img: "shakespear",
    },
    {
      id: 4,
      title: "Writing",
      description: "placeholder",
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

    <main className="flex-col text-black" >

      <div className="flex flex-col items-center p-32 bg-blue-700" >

        <div className="flex flex-col p-10 bg-black/20">
          <h1 className="flex items-center justify-center text-yellow-500 my-auto h-32">
            Looking for a tutor?
          </h1>
          
          <h2 className="text-6xl oldbg-[#6c22a5] text-center max-w-xl h-32">
            Tutoring with Cameron
          </h2>
        </div>
        
      </div>

      <div className="flex items-center justify-center bg-sky-100 p-10">
        <div className="grid xl:gap-8 gap-6 xl:grid-cols-4 grid-cols-2 h-auto w-full" >
          {showboxBuilder()}
        </div>
      </div>
      <div className="flex justify-center w-full p-10">
        <Slides />
      </div>
        
      </main>
  )
}

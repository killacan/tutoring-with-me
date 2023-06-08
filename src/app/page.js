import ShowBox from "./components/showbox"
import Slides from "./components/slides"

export default function Home() {

  let showboxes = [
    {
      id: 1,
      title: "Programming",
      description: "placeholder",
    },
    {
      id: 2,
      title: "Math",
      description: "placeholder",
    },
    {
      id: 3,
      title: "Reading",
      description: "placeholder",
    },
    {
      id: 4,
      title: "Writing",
      description: "placeholder",
    },
  ]

  const showboxBuilder = () => {
    return showboxes.map((showbox) => {
      return (
        <ShowBox
          title={showbox.title}
          description={showbox.description}
        />
      )
    })
  }

  

  return (

    <main className="flex-col text-black" >

      <div className="flex flex-col items-center p-32 bg-blue-700" >

        <div className="bg-black/20">
          <h1 className="flex justify-center text-3xl text-yellow-500 my-auto mt-12">
            Looking for a tutor?
          </h1>
          
          <h2 className="text-6xl oldbg-[#6c22a5] text-center max-w-xl mt-10">
            Tutoring with Cameron
          </h2>
        </div>
        
      </div>

      <div className="flex items-center justify-center bg-sky-100 h-96 px-10">
        <div className="grid gap-4 grid-cols-4 h-60 w-full" >
        {showboxBuilder()}
        </div>
      </div>

      <Slides />
        
      </main>
  )
}

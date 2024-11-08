import { useState } from "react"

const ShowMyName = () => {
  const [name,setName] = useState<string>("")
  const handleHein = () => {
    setName(name+"Hein")
  }
  const handleHtet = () => {
    setName(name+"Htet")
  }
  const handleZan = () => {
    setName(name+"Zan")
  }
  const handleClean = () => {
    setName("")
  }
  return (
    <div>
      <h1 className="text-4xl ">My Name is "{name}"</h1>
      <button onClick={handleHein} className="px-3 py-1 bg-black text-white m-3">Hein</button>
      <button onClick={handleHtet} className="px-3 py-1 bg-black text-white m-3">Htet</button>
      <button onClick={handleZan} className="px-3 py-1 bg-black text-white m-3">Zan</button>
      <button onClick={handleClean} className="px-3 py-1 bg-black text-white m-3">Clean</button>
    </div>
  )
}

export default ShowMyName
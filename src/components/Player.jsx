import {useState, useRef} from "react"

export default function Player() {
  const playerName = useRef()
  const [name, setName] = useState(null)

  return (
    <section id="player">
      <h2>Welcome {name ?? 'unknown entity'}</h2>
      <p>
        <input maxLength="20" type="text" ref={playerName} />
        <button onClick={() => {setName(playerName.current.value)}}>Set Name</button>
      </p>
    </section>
  );
}

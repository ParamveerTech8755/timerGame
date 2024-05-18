import Player from './components/Player.jsx';
import TimerChallenge from "./components/TimerChallenge.jsx"

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" time={1} />
        <TimerChallenge title="Not Easy" time={5} />
        <TimerChallenge title="Getting Tough" time={10} />
        <TimerChallenge title="Pros Only" time={15} />
      </div>
    </>
  );
}

export default App;

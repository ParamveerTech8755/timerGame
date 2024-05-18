import {useState, useRef} from "react"
import ResultModal from "./ResultModal.jsx"

export default function TimerChallenge({time, title}){

	const [timeRemaining, setTimeRemaining] = useState(time*1000)

	const timer = useRef()
	const dialog = useRef()

	const timerActive = timeRemaining > 0 && timeRemaining < time*1000

	if(timeRemaining <= 0){
		clearInterval(timer.current)
		dialog.current.open()
	}

	function handleStart(){
		timer.current = setInterval(() => {
			setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
		}, 10)
	}
	function handleStop(){
		clearInterval(timer.current)
		dialog.current.open()
	}

	function resetTimer(){
		setTimeRemaining(time*1000)
	}

	return (
		<>
			<ResultModal resetTimer={resetTimer} remainingTime={timeRemaining} time={time} ref={dialog} />
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
				{time} second{time > 1 ? 's' : ''}
				</p>
				<p>
					<button onClick={timerActive ? handleStop : handleStart}>{timerActive ? "Stop Timer" : "Start Timer"}</button>
				</p>
				<p className={timerActive ? "active" : undefined}>{timerActive ? "Timer running" : "Timer inactive"}</p>
			</section>
		</>
	)
}
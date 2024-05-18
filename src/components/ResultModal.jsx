import {forwardRef, useRef, useImperativeHandle} from "react"
import {createPortal} from "react-dom"

const ResultModal = forwardRef(function ResultModal({remainingTime, time, resetTimer}, someRef){
	const formattedRemainingTime = (remainingTime/1000).toFixed(2)
	const score = Math.round((1- remainingTime/(time*1000))*100)
	const userLost = remainingTime <= 0
	const dialog = useRef()
	useImperativeHandle(someRef, () => {
		return {
			open: () => {
				dialog.current.showModal()
			}
		}
	})

	return createPortal(
		<dialog ref={dialog} className="result-modal" onClose={resetTimer} >
		<h2>{userLost ? "You Lost" : `Your Score: ${score}`}</h2>
		<p>The target time was <strong>{time} seconds</strong></p>
		{!userLost && <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong></p>}
		<form method="dialog">
			<button>Close</button>
		</form>
			{/*this will make a dialog and close it when the close button is clicked*/}
		</dialog>,

		document.getElementById('modal')
	)
}
)
export default ResultModal
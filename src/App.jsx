import React, {useState} from 'react';

export default function App() {
	let time = new Date().toLocaleTimeString();

	const [currentTime, setCurrentTime] = useState(time);

	function update() {
		let time = new Date().toLocaleTimeString();
		setCurrentTime(time);
	}

	setInterval(update, 1000);

	return (
		<>
			<h1>{currentTime}</h1>
		</>
	);
}

import { useState } from "react";
import { useEffect } from "react";

const backendUrl = "http://localhost:4588";

function App() {
	const [frameworks, setFrameworks] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(`${backendUrl}/frameworks`);
			const _frameworks = await response.json();
			setFrameworks(_frameworks);
		})();
	}, []);

	return (
		<>
			<h1>Full Stack Site</h1>
			<p>Here are {frameworks.length} frameworks:</p>
			<ul>
				{frameworks.map((framework, index) => {
					return <li key={index}>{framework.title}</li>;
				})}
			</ul>
		</>
	);
}

export default App;

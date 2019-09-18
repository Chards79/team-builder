import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import TeamMember from "./components/TeamMember";

function App() {
	const [team, setTeam] = useState([]);

	const addMember = info => {
		setTeam([...team, info]);
	};
	return (
		<div className="App">
			<h1>Team Member Form</h1>
			<Form addMember={addMember} />
			<TeamMember membersList={team} />
		</div>
	);
}

export default App;

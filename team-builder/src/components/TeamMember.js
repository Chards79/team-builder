import React from "react";

const TeamMember = props => {
	console.log(props);
	return (
		<div className="member-list">
			{props.membersList.map(info => {
				return (
					<div className="info" key={info.id}>
						<h3>{info.name}</h3>
						<p>{info.email}</p>
						<p>{info.role}</p>
					</div>
				);
			})}
		</div>
	);
};

export default TeamMember;

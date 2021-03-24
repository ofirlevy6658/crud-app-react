import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

import Card from "./Card";

class Users extends Component {
	state = { data: [] };
	async componentDidMount() {
		const response = await axios.get(
			"https://605aed1d27f0050017c05918.mockapi.io/users"
		);
		this.setState({ data: response.data });
	}
	deleteCard = async (e) => {
		const id = e.target.id;
		await axios.delete(
			`https://605aed1d27f0050017c05918.mockapi.io/users/${id}`
		);
		const updateData = this.state.data.filter((el) => el.id !== id);
		this.setState({ data: updateData });
	};
	render() {
		const mapUsers = () => {
			return this.state.data.map((el) => {
				return (
					<Card
						key={el.id}
						img={el.img}
						name={el.name}
						phone={el.phone}
						age={el.age}
						id={el.id}
						deleteFunc={this.deleteCard}
					/>
				);
			});
		};
		return <div>{mapUsers()}</div>;
	}
}

export default Users;

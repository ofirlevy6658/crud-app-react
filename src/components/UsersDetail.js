import axios from "axios";
import React, { Component } from "react";

class UsersDetail extends Component {
	state = { user: [] };
	nameRef = React.createRef();
	phoneRef = React.createRef();

	async componentDidMount() {
		const response = await axios.get(
			`https://605aed1d27f0050017c05918.mockapi.io/users/${this.props.match.params.id}`
		);
		this.setState({ user: response.data });
	}
	HandleData = async (e) => {
		e.preventDefault();
		await axios.put(
			`https://605aed1d27f0050017c05918.mockapi.io/users/${this.props.match.params.id}`,
			{ name: this.nameRef.current.value, phone: this.phoneRef.current.value }
		);
		this.props.history.push("/users");
	};
	render() {
		return (
			<>
				<form>
					<label>
						Name:
						<input ref={this.nameRef} type="text" />
					</label>
					<label>
						Phone:
						<input ref={this.phoneRef} type="text" />
					</label>
					<button type="submit" onClick={this.HandleData}>
						Submit
					</button>
				</form>
			</>
		);
	}
}

export default UsersDetail;

import React, { Component } from "react";
import axios from "axios";

class AddUser extends Component {
	nameRef = React.createRef();
	phoneRef = React.createRef();
	createUser = async (e) => {
		e.preventDefault();
		await axios.post(`https://605aed1d27f0050017c05918.mockapi.io/users/`, {
			name: this.nameRef.current.value,
			phone: this.phoneRef.current.value,
		});
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
					<button type="submit" onClick={this.createUser}>
						Submit
					</button>
				</form>
			</>
		);
	}
}

export default AddUser;

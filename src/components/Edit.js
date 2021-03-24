import axios from "axios";
import { Component } from "react";
// import { Link } from "react-router-dom";


class Users extends Component {
	state = { data: [] };
	async componentDidMount() {
		const response = await axios.get(
			"https://605aed1d27f0050017c05918.mockapi.io/users"
		);
        render(){
            return <div>test</div>
        }
	}
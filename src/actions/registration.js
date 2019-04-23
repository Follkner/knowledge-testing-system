import { REGISTRATION_REQUEST } from '../constants/actionTypes';
import { REGISTRATION_SUCCESS } from '../constants/actionTypes';
import { REGISTRATION_FAILURE } from '../constants/actionTypes';

let id = 0;

export default function checkIn(username, password) {
	return dispatch => {
		dispatch(request());
		const users = JSON.parse(window.localStorage.users);
		const usernames = users.map((item) => {
			return item.username;
		});
		if(!usernames.includes(username)){
			let id = (users.length)? users[users.length-1].id+1 : 0;
			const user = {
				id,
				username,
				password,
			}
			users.push(user);
			window.localStorage.setItem("users", JSON.stringify([...users]));
			dispatch(success("Registration completed successfully"));
		}else {
			dispatch(failure("Account with this login already exists"));
		}
	}
}

function request() {
	return {
		type: REGISTRATION_REQUEST,
	}
}

function success(message) {
	return {
		type: REGISTRATION_SUCCESS,
		payload: message,
	}
}

function failure(message) {
	return {
		type: REGISTRATION_FAILURE,
		payload: message,
	}
}
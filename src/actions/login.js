import { LOGIN_REQUEST } from '../constants/actionTypes';
import { LOGIN_SUCCESS } from '../constants/actionTypes';
import { LOGIN_FAILURE } from '../constants/actionTypes';

export default function login(username, password) {
	return dispatch => {
		dispatch(request());

		const searchUsername = JSON.parse(window.localStorage.users).filter((item) => {
			return item.username === username;
		});
		if(searchUsername.length && searchUsername[0].password === password) {
			dispatch(success("Login is successfull", searchUsername[0].id));
		} else {
			dispatch(failure("Something going wrong"));
		}

	}
}

function request() {
	return {
		type: LOGIN_REQUEST,
	}
}

function success(message, id) {
	return {
		type: LOGIN_SUCCESS,
		payload: {
			message,
			id,
		},
	}
}

function failure(message) {
	return {
		type: LOGIN_FAILURE,
		payload: message,
	}
}
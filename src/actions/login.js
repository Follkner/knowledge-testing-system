import { LOGIN_REQUEST } from '../constants/actionTypes';
import { LOGIN_SUCCESS } from '../constants/actionTypes';
import { LOGIN_FAILURE } from '../constants/actionTypes';

export default function login(username, password) {
	return dispatch => {
		dispatch(request());

		setTimeout(() =>{
			if(password === JSON.parse(window.localStorage.users)[username]) {
				dispatch(success("Login is successfull"));
			} else {
				dispatch(failure("Something going wrong"));
			}

		},1000)
	}
}

function request() {
	return {
		type: LOGIN_REQUEST,
	}
}

function success(message) {
	return {
		type: LOGIN_SUCCESS,
		payload: message,
	}
}

function failure(message) {
	return {
		type: LOGIN_FAILURE,
		payload: message,
	}
}
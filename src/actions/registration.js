import { REGISTRATION_REQUEST } from '../constants/actionTypes';
import { REGISTRATION_SUCCESS } from '../constants/actionTypes';
import { REGISTRATION_FAILURE } from '../constants/actionTypes';

export default function checkIn(username, password) {
	return dispatch => {
		dispatch(request());
		if(!JSON.parse(window.localStorage.users)[username]){
			window.localStorage.setItem("users", JSON.stringify(
				{...JSON.parse(window.localStorage.users), 
				[username]: password
				}));
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
import {
	LOGIN_REQUEST,
	LOGOUT,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
} from '../constants/actionTypes';

const initialState = {
	isAuthorized: false,
	isLoading: false,
}

export default function(state = initialState, action) {

	switch (action.type) {

		case LOGIN_REQUEST:
			return {
				...state,
				isLoading: true,
			}

		case LOGIN_SUCCESS:
			return {
				...state,
				isAuthorized: true,
				isLoading: false,
				message: action.payload,
			}

		case LOGIN_FAILURE:
			return {
				...state,
				isAuthorized: false,
				isLoading: false,
				message: action.payload,
			}

		case LOGOUT:
			return {
				...state,
				isAuthorized: false,
			}

		default:
			return {
				...state
			};

	}
}
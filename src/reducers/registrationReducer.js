import {
	REGISTRATION_REQUEST,
	REGISTRATION_SUCCESS,
	REGISTRATION_FAILURE,
} from '../constants/actionTypes';

export default function(state = {}, action) {

	switch (action.type) {

		case REGISTRATION_REQUEST:
			return {
				...state,
				isLoading: true,
			}

		case REGISTRATION_SUCCESS:
			return {
				...state,
				isLoading: false,
				message: action.payload,
			}

		case REGISTRATION_FAILURE:
			return {
				...state,
				isLoading: false,
				message: action.payload,
			}

		default:
			return {
				...state
			};

	}
}
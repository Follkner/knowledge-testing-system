import {
	SELECT_TEST,
} from '../constants/actionTypes';

export default function(state = {}, action) {

	switch (action.type) {

		case SELECT_TEST:
			return {
				...state,
				id: action.payload.id,
				title: action.payload.title,
				tests: action.payload.tests,
			}

		default:
			return {
				...state
			};

	}
}
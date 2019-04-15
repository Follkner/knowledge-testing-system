import { SELECT_TEST } from '../constants/actionTypes';

export default function selectTest(o) {
	return {
		type: SELECT_TEST,
		payload: {
			id: o.id,
			title: o.title,
			tests: o.tests,
		},
	}
}
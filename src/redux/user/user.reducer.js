import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
	currentUser: null,
};

//IF state is undefined, set state default parameter value to INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;

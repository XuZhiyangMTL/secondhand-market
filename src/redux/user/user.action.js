import { UserActionTypes } from "./user.types";

//actions are just funcions that return object, which should be in expected format
export const setCurrentUser = (user) => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
});

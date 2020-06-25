import { UPDATE_USER } from "./actionTypes";

export function updateUser(user = {}) {
    return {
        type: UPDATE_USER,
        payload: { user },
    }
}
/* eslint-disable no-param-reassign */
import produce from 'immer'

import { UPDATE_USER } from "./actionTypes";

const initialState = {
    user: null,
};

const authReducer = produce((draft = initialState, action) => {
    switch (action.type) {

        case UPDATE_USER:
            draft.user = action.payload.user;
            return draft;

        default:
            return draft;
    }
});

export default authReducer
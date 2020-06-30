import {UserActionTypes} from './user.types'
//const { act } = require("react-dom/test-utils");

const INITIAL_STATE={
    currentUser:null
}

const UserReducer=(state=INITIAL_STATE ,action)=>{

    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:action.payload
            };
        default:
            return state;
    }

}

export default UserReducer;
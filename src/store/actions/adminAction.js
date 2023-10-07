import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService } from '../../services/userService';


// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START,
// })
export const fetchGenderStart = () => {
    return async(dispatch, getState) =>{//arguments of redux
        try {

            dispatch({
                type: actionTypes.FETCH_GENDER_START,
            })

            let res = await getAllCodeService('GENDER');
            if(res && res.errCode === 0){
                dispatch(fetchGenderSuccess(res.data));
            }else dispatch(fetchGenderFailed());
        } catch (error) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart',error);
        }
    }
    
}
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
})
export const fetchPositionStart = () => {
    return async(dispatch, getState) =>{//arguments of redux
        try {
            let res = await getAllCodeService('POSITION');
            if(res && res.errCode === 0){
                dispatch(fetchPositionSuccess(res.data));
            }else dispatch(fetchPositionFailed());
        } catch (error) {
            dispatch(fetchPositionFailed());
            console.log('fetchPositionStart',error);
        }
    }
    
}
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED,
})
export const fetchRoleStart = () => {
    return async(dispatch, getState) =>{//arguments of redux
        try {
            let res = await getAllCodeService('ROLE');
            if(res && res.errCode === 0){
                dispatch(fetchRoleSuccess(res.data));
            }else dispatch(fetchRoleFailed());
        } catch (error) {
            dispatch(fetchRoleFailed());
            console.log('fetchRoleStart',error);
        }
    }
    
}
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED,
})

export const createNewUser = (data) =>{
    return async(dispatch, getState) =>{//arguments of redux
        try {
            let res = await createNewUserService(data);
            console.log('check create userredux: ', res);
            if(res && res.errCode === 0){
                dispatch(saveUserSuccess());
            }else dispatch(saveUserFailed());
        } catch (error) {
            dispatch(saveUserFailed());
            console.log('saveUserFailed',error);
        }
    }
}
export const saveUserSuccess = () => ({
    type: 'CREATE_USER_SUCCESS',
})
   
export const saveUserFailed = () => ({
    type: 'CREATE_USER_FAILED',
})
   
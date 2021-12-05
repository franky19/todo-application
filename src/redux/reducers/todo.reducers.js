import * as types from '../types/todo.types'

const initialState={
    todo:[],
    isLoading:'false',
    errMessage:'null'
}

const reducer=(state=initialState,action={})=>{
    switch(action.type){
        case types.TODO_SHOW :return{
            ...state,
            todo:action.todo,
            isLoading:'false',
            errMessage:'null'
        }
        case types.TODO_LOAD:return{
            ...state,
            isLoading:'true',
            errMessage:'null'
        }
        case types.TODO_FAILED:return{
            ...state,
            isLoading:'false',
            errMessage:action.errMessage
        }
        default:return state
    }
}

export default reducer
import { DeleteTodoAPI, todoAPI } from '../api/todo.api'
import * as types from '../types/todo.types'

export const getTodoAction = ()=>{
    return async dispatch => {
        try{
            dispatch({type:types.TODO_LOAD})
            const response=await todoAPI()
            dispatch({type:types.TODO_SHOW,todo:response})
        }catch(err){
            dispatch({type:types.TODO_FAILED})
            console.log('list todo',err)
        }
    }
}

export const DeleteTodoAction=(id)=>{
    return async dispatch => {
        try{
            dispatch({type:types.TODO_LOAD})
            const response=await DeleteTodoAPI(id)
            dispatch({type:types.TODO_SHOW,todo:response})
        }catch(err){
            dispatch({type:types.TODO_FAILED})
            console.log('list todo',err)
        }
    }
}
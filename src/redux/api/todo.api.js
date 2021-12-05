import { API } from "./middleware.api"

export const todoAPI = async()=>{
    return await API({
        method:'GET'
    }).then(res=>res.data)
}

export const DeleteTodoAPI=async(id)=>{
    return await API({
        url:''+ id,
        method:'DELETE'
    }.then(res=>res.data))
}
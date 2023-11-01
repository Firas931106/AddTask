import {ADDTASK, DELETE} from "./action-types"

export const addhandler= (newTodo)=> {
    return {
        type : ADDTASK,
        payload : newTodo,
    }  
}
export const deleteHandler= (idTask)=>{
    return{
        type : DELETE,
        payload: idTask
    }
}
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/ListAction";

function TodoForm(){
    
    const dispatch = useDispatch()
    const [text , setText] = useState('')
    
    function handleChange(event){
        let t = event.target.value
        setText(t)
    }


    function addItemEvent(e){
        e.preventDefault()
        if(text){
            dispatch(addItem(text))// disparar ação
            setText('')
        }
    }
    return(    
        <form>
            <input type="text" onChange={handleChange} value={text}></input> {/* o value faz com q o imput seja sempre o stado certo*/}
            <button onClick={addItemEvent}>Adicionar</button>
        </form>
    )

}
export default TodoForm;
import React from "react"
import Card from "./card";
import { IoTrashSharp } from 'react-icons/io5';
import { BsClipboardCheck } from "react-icons/bs"

import { BsClipboardCheckFill } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { deleteItem , changeDone} from "../actions/ListAction"

function DoneImg(props){
    if(props.done){
        return <BsClipboardCheckFill/>
    }else{
        return <BsClipboardCheck/>
    }
}

function ListItem(props){

    let dispatch = useDispatch()

    return(

        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={() => {dispatch(changeDone(props.item.id))}}><DoneImg done={props.item.done}/></button>
                    <button onClick={() => {dispatch(deleteItem(props.item.id))}}><IoTrashSharp/></button> {/*passando o Item para a função recebida por props*/ }
                </div>
            </Card>
        </li>
    )

}

export default ListItem
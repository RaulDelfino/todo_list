import React from "react";
import "./todo.css"
import List from "./components/list"
import TodoForm from "./components/form";

import listReducer from "./reducers/listReducer";
import {createStore} from "redux"

import { Provider } from "react-redux";


const SAVED_ITEMS = 'savedItems';

function persistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
}

function loadState(){
    const actualState = localStorage.getItem(SAVED_ITEMS)
    if(actualState){
        return JSON.parse(actualState)
    }else{
        return []
    }

}

const store = createStore(listReducer, loadState())


store.subscribe(()=>{
    persistState(store.getState())
})// para persistir o estado.


function App() {


    return(
        <div className='container'>
            <Provider store={store}>
                <h1>Todo</h1>
                <TodoForm />

                <List></List>
            </Provider>
        </div>
    )

}


export default App
import React, { useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { addTodo,removeTodo,deleteTodo } from "../actions/index";
import "./todo.css";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state)=>state.todoReducers.list)
  const dispatch = useDispatch()
  return (
    <>
      <div className="main">
        <div className="child-div">
          <h1>Add your List Here</h1>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add your item here"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i className="fa fa-plus add-btn" onClick={()=>dispatch(addTodo(inputData),setInputData(''))}></i>
          </div>
          <div className="showItems">
            {list.map((elem)=>{
                return (
                    <div className="eachItems" key={elem.id}>
                <h5>{elem.data}</h5>
                <div className="todo-btn">

                
            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>dispatch(deleteTodo(elem.id))}></i>
            </div>
            </div>
                )
                
            })}
            
          </div>
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text= "remove All" onClick={()=>dispatch(removeTodo())}> <span>Check List</span></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

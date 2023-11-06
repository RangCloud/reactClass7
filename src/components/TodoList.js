import React, {useState} from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem.js";

const TodoList = ({todo})=>{
    const [search, setSearch] = useState("");
    const onChangeSearch = ({event})=>{
        setSearch(event.target.value);
    }
    return(
        <div className="TodoList">
            <h3>Todo List 🌱</h3>
            <input
            value={search}
            onChange={onChangeSearch}
            placeholder="필터링 검색어 넣어주세요."
            />
            <div>
                {todo.map((item)=>(
                    <TodoItem key = {item.id}
                    {...item}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList;
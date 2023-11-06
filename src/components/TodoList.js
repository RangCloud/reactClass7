import React, {useState} from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem.js";

const TodoList = ({todo, onUpdate, onDelete})=>{
    const [search, setSearch] = useState("");
    const onChangeSearch = (event)=>{
        setSearch(event.target.value);
    }
    const filteringTodo = ()=>{
        return search === "" ? todo:
        todo.filter( (item)=> item.content.toLowerCase().includes(search.toLowerCase()) );
    }

    return(
        <div className="TodoList">
            <h3>Todo List 🌱</h3>
            <input
            className="searchbar"
            value={search}
            onChange={onChangeSearch}
            placeholder="필터링 검색어 넣어주세요."
            />
            <div>
                {filteringTodo().map((item)=>(
                    <TodoItem key = {item.id}
                    {...item}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList;
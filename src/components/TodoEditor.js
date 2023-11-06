import "./TodoEditor.css";
import {useState} from "react";

const TodoEditor = ({onCreate})=>{
    const [content, setContent] = useState("");

    const onChangeTodo = (event)=>{
        setContent(event.target.value);
    }

    const onSubmit = ()=>{
        if(!content){return;}
        onCreate(content);
        setContent("");
    }

    const onKeyDownHandler = (event)=>{
        if(event.keyCode === 13){ // keyCode 값 엔터
            onSubmit();
        }
    }

    return(
        <div className="TodoEditor">
            <h3>새로운 Todo 작성하기 ✏</h3>
            <div>
                <input 
                onChange={onChangeTodo}
                onKeyDown={onKeyDownHandler}
                placeholder="새로운 Todo..."/>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor;
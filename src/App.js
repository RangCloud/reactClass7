import './App.css';
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import {useState, useRef} from "react";

const todo_example = [
  {
    id: 0, isDone: false, content: "할 일 예제 0", createdDate: new Date.getTime()
  },
  {
    id: 1, isDone: false, content: "할 일 예제 1", createdDate: new Date.getTime()
  },
  {
    id: 2, isDone: false, content: "할 일 예제 2", createdDate: new Date.getTime()
  }
]

function App() {
  const [todo, setTodo] = useState(todo_example);
  const idRef = useRef(3);
  const onCreate = (content)=>{
    // content 처리
    const newItem = {
      id: idRef.current, isDone:false, content, createdDate: new Date().getTime()
    }
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  }
  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo}/>
    </div>
  );
}

export default App;

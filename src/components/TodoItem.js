import "./TodoItem.css";

const TodoItem = ({id, content, isDone, createdDate, onUpdate, onDelete})=>{
    const onChangeCheckbox = ()=>{ ontimeupdate(id); }
    const onClickDelete = ()=>{ onDelete(id); }
    return(
        <div>
            <div>
            <input type="checkbox" checked={isDone}
            onChange={onChangeCheckbox}/>
            </div>
            <div>{content}</div>
            <div>{new Date(createdDate).toLocaleDateString()}</div>
            <div><button>삭제</button></div>
        </div>
    )
}

export default TodoItem;
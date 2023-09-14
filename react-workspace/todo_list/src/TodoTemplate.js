import './TodoTemplate.scss'


function TodoTemplate({children}){

    return(
        <div className="todoTemplate">
            <div className="todo-title">TO-DO LIST</div>
            <div>{children}</div>
        </div>
    )
}

export default TodoTemplate
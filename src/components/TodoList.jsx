import TodoItem from "./TodoItem"


const TodoList = (todos, SetEdit,removeTodo) => {
  return (
    <div className='bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4'>
          <ul>
            {todos.map((todo,index) =>(
              <TodoItem key={index} index={index} todo={todo} SetEdit={SetEdit} removeTodo={removeTodo}/>
            ))}
          </ul>
        </div>
  )
}

export default TodoList

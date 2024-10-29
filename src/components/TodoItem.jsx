import { FaPencilAlt, FaTrash } from 'react-icons/fa'

const TodoItem = (todo,index,SetEdit,removeTodo) => {
  return (
    <li className='flex items-center justify-between bg-white p-3 rounded shadow-md mb-3'>
              <span className='text-lg'>{todo.todo}</span>
              <div>
              <button onClick={()=>SetEdit(index)} className='mr-2 p-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded hover:from-gray-500 hover:to-gray-700'>
              <FaPencilAlt/></button>
              <button onClick={()=>removeTodo(todo.id)} className='mr-2 p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded hover:from-red-500 hover:to-red-700'>
              <FaTrash/></button>
              </div>
              </li>
  )
}

export default TodoItem

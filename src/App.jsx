
import { FaPencilAlt, FaPlus, FaTrash } from 'react-icons/fa'
import './App.css'
import { useEffect, useState } from 'react'
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
function App() {
  const [todos,setTodos]=useState([]);
  const[input,setInput]=useState('');
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(()=>{
    const unsubscribe = onSnapshot(collection(db,'todos'),(snapshot)=>{
      setTodos(snapshot.docs.map((doc)=>({id:doc.id, todo:doc.data().todo})));
    });
    return () => unsubscribe();
  }, []);

  const AddTodo =  async()=>{
    try {
      if(input.trim() !== ''){
      //  setTodos([...todos,{id:new Date(), todo:input}]);
      await addDoc(collection(db,'todos'),{todo:input});
        setInput('');
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  const SetEdit=(index)=>{
    setInput(todos[index].todo);
    setEditIndex(index);
  }
  const UpdateTodo= async()=>{
    try {
      if(input.trim() !== ''){
        const todoDocRef = doc(db,'todos', todos[editIndex].id);
        await updateDoc(todoDocRef,{todo:input});
        setEditIndex(-1);
        setInput('');
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  const removeTodo = async(id)=>{
    try {
      await deleteDoc(doc(db,'todos', id));
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4 p-4 bg-custom-background bg-center bg-cover'>
      <div className=' bg-gray-100 p-4 rounded shadow-md w-full max-w-lg lg:w-1/4 '>
        <h1 className='text-3xl font-bold text-center p-2' >Todo App</h1>
        <div>
          <input
          type='text'
          placeholder='Add a todo'
          className='py-2 px-4 border rounded focus:outline-none mr-2'
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          />
          <button onClick={editIndex === -1?AddTodo: UpdateTodo} className='bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4'>
          {editIndex === -1 ? <FaPlus/> :<FaPencilAlt/>}
          </button>
        </div>
      </div>
      {
        todos.length > 0 &&(
          <div className='bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4'>
          <ul>
            {todos.map((todo,index) =>(
              <li key={index} className='flex items-center justify-between bg-white p-3 rounded shadow-md mb-3'>
              <span className='text-lg'>{todo.todo}</span>
              <div>
              <button onClick={()=>SetEdit(index)} className='mr-2 p-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded hover:from-gray-500 hover:to-gray-700'>
              <FaPencilAlt/></button>
              <button onClick={()=>removeTodo(todo.id)} className='mr-2 p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded hover:from-red-500 hover:to-red-700'>
              <FaTrash/></button>
              </div>
              </li>
            ))}
          </ul>
        </div>
        )
      }
    </div>
  )
}

export default App

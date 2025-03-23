import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

    const fetchTodos = async () => {
      try {
        let response = await axios.get("http://localhost:4752/todo");
        console.log(response.data);
        setTodos(response.data); // ✅ Fix: Uncommented this line
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

  const saveTodo = async () => {
    try {
      let response = await axios.post("http://localhost:4752/todo", { 
        title, 
        description 
      }); // ✅ Fix: Added request payload

      console.log(response.data);
      setTodos([...todos, response.data]); // ✅ Fix: Properly updating state
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error("Error saving todo:", error);
    }
  };

  const deleteTodos = async (id) => {
    try {
      await axios.delete(`http://localhost:4752/todo/${id}`);
      
      setTodos((prevTodo) => prevTodo.filter((data)=> data._id !== id)) // ✅ Fix: Uncommented this line
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#faedcd]">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          value={title}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <div className='flex justify-between items-center'>
          <div className='mt-5'>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          value={description}
          className="p-16 mb-4 border border-gray-300 rounded"
          />
          </div>
          <div className='flex flex-col justify-center items-center'>
        <button
          onClick={saveTodo}
          className="w-full p-6  bg-[#d4a373] text-white rounded hover:bg-[#99582a]"
          >
          <i class="fa-solid fa-plus"></i>
        </button>
        <button
          onClick={fetchTodos}
          className=" w-full p-6 bg-[#d4a373] text-white rounded hover:bg-[#99582a] mt-2"
          >
          <i class="fa-regular fa-eye"></i>
        </button>
          </div>
            </div>
      </div>
      {todos.map((todo, index) => (
        <div key={todo.id || index} className="bg-white p-6 rounded shadow-md w-full max-w-md mt-4 flex justify-between">
          <div>
          <h2 className="text-xl font-bold mb-2">{todo.title}</h2>
          <p>{todo.description}</p>
          </div>
          <button
            onClick={() => deleteTodos(todo._id)}
            className=" bg-[#ef233c] text-white p-4 rounded mt-2 hover:bg-[#d90429]">
              <i class="fa-solid fa-trash"></i>
            </button>
        </div>
      ))}
    </div>
  );
}

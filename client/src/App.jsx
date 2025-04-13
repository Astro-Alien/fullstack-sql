import {useEffect, useState} from 'react';
import {ApiRequester} from './src/api/api-requester.js';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({title: '', description: ''});

  const handleGetTasks = async () => {
    await ApiRequester.get(setTasks);
  }

  const handleCreateTask = async () => {
    await ApiRequester.create(setTasks, setNewTask, newTask);
  }

  const handleChange = (e) => {
    setNewTask({...newTask, [e.target.dataset.name]: e.target.value});
  }

  return (
    <div className="p-[2rem]">
      <h1 className="text-2xl font-bold">Task</h1>
      
      <div className='flex flex-col gap-2'>
      <input type="text" className="border-2 border-amber-200" data-name="title" value={newTask.title} onChange={handleChange} placeholder="Title" />
      <textarea className="border-2 border-amber-200" data-name="description" value={newTask.description} onChange={handleChange} placeholder="Enter Todo Content" />
      </div>
     
      <button className="w-[2.5rem] h-[2.5rem] border-2 border-amber-950 m-[0.5rem]" onClick={handleCreateTask}>Add</button> 
      <button className="w-[2.5rem] h-[2.5rem] border-2 border-amber-950 m-[0.5rem]" onClick={handleGetTasks}>Get</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="border-b-2 border-gray-300">
            <h2 className="text-xl font-bold">{task.title}</h2>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

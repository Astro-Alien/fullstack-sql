import React from 'react';
import Header from './header';
import TaskForm from './task-form';
import TaskCard from './task-card';
import {useEffect, useState} from 'react';
import {ApiRequester} from '../lib/api/api-requester.js';

function TodoList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        handleGetTasks();
    }, []);

    const handleGetTasks = async () => {
      await ApiRequester.get(setTasks);
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Header />
          <div className="mb-8">
            <TaskForm setTasks={setTasks} api={ApiRequester} length={tasks.length}/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <TaskCard key={task.id} setTasks={setTasks} id={task.id} completed={task.completed} title={task.title} description={task.description} api={ApiRequester}/>   
            ))}
          </div>
        </div>
      </div>
    );
}
  
export default TodoList;
import {useState} from 'react';
import React from 'react';

function TaskForm({setTasks, api}) {
    const [newTask, setNewTask] = useState({title: '', description: ''});

  
    const handleCreateTask = async () => {
      await api.create(setTasks, setNewTask, newTask);
    }
  
    const handleChange = (e) => {
      setNewTask({...newTask, [e.target.dataset.name]: e.target.value});
    }

    return (
      <form className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4">
          <input
            type="text"
            placeholder="Add a new task"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <div className="mt-3">
            <textarea
              placeholder="Add a description (optional)"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <div className="mt-3 flex justify-end space-x-2">
              <button
                type="button"
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                disabled
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </form>
    );
}

export default TaskForm;
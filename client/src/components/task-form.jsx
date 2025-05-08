import {useState} from 'react';
import React from 'react';

function TaskForm({setTasks, api, length}) {    
    const [hidden, setHidden] = useState(true);
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleTitleChange = (e) => {
      if (hidden === true) {
        setHidden(!hidden);
      }
      setTitle(e.target.value);
    }

    const handleTextChange = (e) => {
      setDescription(e.target.value);
    }

    const handleCreateTask = async () => {
      // add toast notifications later
      if (!title || !description) return;

      const id = length + 1;

      const newTask = {
        title: title,
        description: description
      }
       await api.create(setTasks, newTask);
    }

    const handleCancel = () => {
      setTitle('');
      setDescription('');
      setHidden(true);   
    }

    return (
      <form className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4">
          <input
            type="text"
            placeholder="Add a new task"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={title}
            onChange={handleTitleChange}
          />
          <div data-hidden={hidden} style={hidden ? { display: 'none' } : {}}className="mt-3">
            <textarea
              placeholder="Add a description (optional)"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              onChange={handleTextChange}
            />
            <div className="mt-3 flex justify-end space-x-2">
              <button
                type="button"
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={handleCreateTask}
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
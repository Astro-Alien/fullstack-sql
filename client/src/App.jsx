import { useState } from 'react';
import LoginPage from './components/login/LoginPage';
import TodoList from './components/todo-list.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  

  return (
    <div>
      {isLoggedIn ? <TodoList /> : <LoginPage onLogin={() => setIsLoggedIn(true)} />}
    </div>
  );
}

export default App

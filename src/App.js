import TaskContextProvider from './context/taskContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import Tasks from './components/tasks/Tasks';
import ViewTask from './components/tasks/ViewTask';
import Navbar from './components/Navbar';
import AddTask from './components/tasks/AddTask';
import EditTask from './components/tasks/EditTask';

const App = () => {
  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<ViewTask />} />
          <Route path="/tasks/add" element={<AddTask />} />
          <Route path="/tasks/edit/:id" element={<EditTask />} />
        </Routes>
      </TaskContextProvider>
    </div>
  );
};

export default App;

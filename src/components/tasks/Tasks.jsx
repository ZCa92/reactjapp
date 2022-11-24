import { useContext, useEffect } from 'react';
import { TaskContext } from '../../context/taskContext';
import Task from './Task';

const Tasks = () => {
  const {
    loading,
    tasks,
    getTasks,
    confirmDelete: deleteTask,
    filteredData,
    getGroups
  } = useContext(TaskContext);
  console.log(loading, 'loading');
  useEffect(() => {
    getTasks();
    getGroups()
  }, []);
  console.log(tasks, 'tasks');
  return (
    <div className="container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          {filteredData.map((task) => (
            <div className="col-lg-4">
              <Task
                key={task.id}
                task={task}
                gname={task.group}
                deleteTask={() => deleteTask(task.id, task.namework)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tasks;

import { useContext, useEffect } from 'react';
import { TaskContext } from '../../context/taskContext';
import { useParams } from 'react-router-dom';
import { FOREGROUND } from '../../helpers/colors';

const ViewTask = () => {
  const params = useParams();
  const { id: taskId } = params;
  const { loading, task, getTask } = useContext(TaskContext);
  useEffect(() => {
    getTask(taskId);
  }, []);
  return (
    <div className="container my-3">
      {loading ? (
        <div>Loaing...</div>
      ) : (
        <div className="">
          <h1 style={{ color: FOREGROUND }}>{task.namework}</h1>
        </div>
      )}
    </div>
  );
};

export default ViewTask;

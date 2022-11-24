import { createContext, useEffect, useState } from 'react';
import {
  createTask,
  deleteTask,
  getAllGroups,
  getAllTasks,
  getGroup,
  getOneTasks,
  updateTask,
} from '../services/taskServices';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import {
  COMMENT,
  CURRENTLINE,
  FOREGROUND,
  PURPLE,
  YELLOW,
} from '../helpers/colors';
import { taskSchema } from '../validations/taskValidation';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [group, setGroup] = useState({});
  const [groups, setGroups] = useState([]);
  // const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  // const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const getTasks = async () => {
    try {
      setLoading(true);
      const { data: Tasks } = await getAllTasks();
      setTasks(Tasks);
      setFilteredData(Tasks);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  const getTask = async (taskId) => {
    try {
      setLoading(true);
      const { data: Task } = await getOneTasks(taskId);
      setTask(Task);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  const getGroups = async () => {
    try {
      setLoading(true);
      const { data: Groups } = await getAllGroups();
      setGroups(Groups);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  const getGroupFunc = async (groupId) => {
    try {
      setLoading(true);
      const { data: Group } = await getGroup(groupId);
      setGroup(Group);
      console.log(group, 'ggg');
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  const createNewTask = async (values) => {
    // event.preventDefault();
    try {
      setLoading(true);
      // await taskSchema.validate(task, { abortEarly: false });
      // const { status, data } = await createTask(task);
      const { status, data } = await createTask(values);
      if (status === 201) {
        const allTasks = [...tasks, data];
        setTasks(allTasks);
        // setTask({});
        // setErrors([]);
        setLoading(false);
        navigate('/tasks');
      }
    } catch (error) {
      console.log(error.message);
      // setErrors(error.inner);
      setLoading(false);
    }
  };

  // const onTaskTextChange = (event) => {
  //   setTask({ ...task, [event.target.name]: event.target.value });
  //   console.log(task, 'addtask');
  //   console.log(event.target.value);
  // };

  const confirmDelete = (taskId, taskFullname) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            dir="rtl"
            style={{
              backgroundColor: CURRENTLINE,
              border: `1px solid ${PURPLE}`,
              borderRadius: '1em',
            }}
            className="p-4"
          >
            <h1 style={{ color: YELLOW }}>پاک کردن مخاطب</h1>
            <p style={{ color: FOREGROUND }}>
              مطمئنی که میخوای مخاطب {taskFullname} رو پاک کنی ؟
            </p>
            <button
              onClick={() => {
                removeTask(taskId);
                onClose();
              }}
              className="btn mx-2"
              style={{ backgroundColor: PURPLE }}
            >
              مطمئن هستم
            </button>
            <button
              onClick={onClose}
              className="btn"
              style={{ backgroundColor: COMMENT }}
            >
              انصراف
            </button>
          </div>
        );
      },
    });
  };

  const removeTask = async (taskId) => {
    const allTasks = [...tasks];
    try {
      const updatedTask = tasks.filter((task) => task.id !== taskId);
      console.log(updatedTask);
      setTasks(updatedTask);
      setFilteredData(updatedTask);
      const { status } = await deleteTask(taskId);
      if (status !== 200) {
        setTasks(allTasks);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setTasks(allTasks);
    }
  };

  const handleSearch = (query) => {
    // event.preventDefault();
    // if (search === '') {
    //   setFilteredData(tasks);
    // } else {
    //   let searchArr = tasks.filter((task) => {
    //     return task.namework.toLowerCase().includes(search.toLowerCase());
    //   });
    //   setFilteredData(searchArr);
    // }
    // // setSearch({ ...q, text: event.target.value });
    // // setSearch(event.target.value);
    setTimeout(() => {
      setFilteredData(
        tasks.filter((task) => {
          return task.namework.toLowerCase().includes(query.toLowerCase());
        }),
        1000
      );
    });
  };

  // const searchWithName = (event) => {
  //   setSearch(event.target.value);
  // };

  const editThisTask = async (values, taskId) => {
    // event.preventDefault();
    const beforeTasks = [...tasks];
    try {
      setLoading(true);
      const { data, status } = await updateTask(taskId, values);
      if (status === 200) {
        setLoading(false);
        const taskIndex = beforeTasks.findIndex(
          (c) => c.id === parseInt(taskId)
        );
        beforeTasks[taskIndex] = { ...data };
        setTasks(beforeTasks);
        navigate('/tasks');
      }
    } catch (error) {
      console.log(error.message);
      setTasks(beforeTasks);
      setLoading(false);
    }
  };

  return (
    <>
      <TaskContext.Provider
        value={{
          getTasks,
          loading,
          tasks,
          task,
          getTask,
          setTask,
          createNewTask,
          // onTaskTextChange,
          groups,
          getGroups,
          group,
          getGroupFunc,
          removeTask,
          confirmDelete,
          // search,
          handleSearch,
          filteredData,
          setFilteredData,
          editThisTask,
          // searchWithName,
          // errors,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
};

export default TaskContextProvider;

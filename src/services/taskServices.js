import axios from 'axios';

const SERVER_URL = 'http://localhost:9000';

// @desc Get All Tasks
// @route GET http://localhost:9000/tasks
export const getAllTasks = () => {
  return axios.get(`${SERVER_URL}/tasks`);
};

// @desc Get One Tasks
// @route GET http://localhost:9000/tasks/:taskId
export const getOneTasks = (taskId) => {
  return axios.get(`${SERVER_URL}/tasks/${taskId}`);
};

// @desc Create New Task
// @route POST http://localhost:9000/tasks
export const createTask = (task) => {
  return axios.post(`${SERVER_URL}/tasks`, task);
};

// @desc Remove New Task
// @route DELETE http://localhost:9000/tasks/taskId
export const deleteTask = (taskId) => {
  return axios.delete(`${SERVER_URL}/tasks/${taskId}`);
};

// @desc Edit Task
// @route DELETE http://localhost:9000/tasks/edit/taskId
export const updateTask = (taskId, task) => {
  return axios.put(`${SERVER_URL}/tasks/${taskId}`, task);
};

// @desc Get Groups
// @route GET http://localhost:9000/groups
export const getAllGroups = () => {
  return axios.get(`${SERVER_URL}/groups`);
};

// @desc  Get Group Name With Group ID
// @route GET http://localhost:9000/groups/:groupId
export const getGroup = (groupId) => {
  const url = `${SERVER_URL}/groups/${groupId}`;
  return axios.get(url);
};

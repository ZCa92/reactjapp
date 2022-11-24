import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../../context/taskContext';
import {
  CURRENTLINE,
  CYAN,
  FOREGROUND,
  PINK,
  PURPLE,
  YELLOW,
} from '../../helpers/colors';

export default function Task({ task, deleteTask, gname }) {
  const navigate = useNavigate();
  const { groups } = useContext(TaskContext);
  const [groupTask, setGroupTask] = useState();
  // useEffect(() => {
  //   setGroupTask(setGrouptoId(gname));
  // }, []);
  // console.log(groups);

  // const setGrouptoId = (gname) => {
  //   let groupname = groups.filter(
  //     (group) => Number(group.id) === Number(gname)
  //   );
  //   return groupname[0].name;
  // };

  console.log(groups);

  return (
    <div className="container my-3">
      <div
        className="task-content p-4"
        style={{ border: `1px solid ${PURPLE}` }}
      >
        <h2 style={{ color: CURRENTLINE }}>نام کار: {task.namework}</h2>
        <h3 style={{ color: FOREGROUND }}>تولید شده توسط: {task.nameDone}</h3>
        <p style={{ color: CYAN }}>تاریخ: {task.date}</p>
        <p style={{ color: PINK }}>{task.done}</p>
        <p style={{ color: YELLOW }}>
          نوع کار:
          {groups.filter((group) => Number(group.id) === Number(task.group))[0].name}
          {console.log(groups.filter((group) => Number(group.id) === Number(task.group))[0].name, "hhhhhh")}
        </p>
        <button className="btn  btn-danger" onClick={deleteTask}>
          حذف کار
        </button>
        <button
          className="btn  btn-success"
          onClick={() => navigate(`/tasks/edit/${task.id}`)}
        >
          ویرایش
        </button>
      </div>
    </div>
  );
}

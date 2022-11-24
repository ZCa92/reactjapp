import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TaskContext } from '../../context/taskContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { COMMENT, PURPLE } from '../../helpers/colors';
import { taskSchema } from '../../validations/taskValidation';
import Spinner from '../Spinner';
import EditIMG from '../../assets/edit.jpg';

export default function EditTask() {
  const params = useParams();
  const { id: taskId } = params;

  const {
    loading,
    editThisTask,
    onTaskTextChange,
    task,
    groups,
    getGroups,
    getTask,
  } = useContext(TaskContext);
  useEffect(() => {
    getGroups();
    getTask(taskId);
  }, [taskId]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container my-3 d-flex justify-content-between">
          <div className="form-part" style={{ padding: '0 10px' }}>
            <Formik
              initialValues={{
                namework: task.namework,
                date: task.date,
                nameDone: task.nameDone,
                group: task.group,
              }}
              validationSchema={taskSchema}
              onSubmit={(values) => {
                editThisTask(values, task.id);
              }}
            >
              <Form>
                <Field
                  // id="namework"
                  name="namework"
                  type="text"
                  // value={formik.values.namework}
                  // onChange={onTaskTextChange}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // name="namework"
                  // {...formik.getFieldProps('namework')}
                  className="form-control"
                  placeholder="نام کار"
                  // required
                />
                {/* {formik.touched.namework && formik.errors.namework ? (
                  <div className="text-danger">{formik.errors.namework}</div>
                ) : null} */}
                <ErrorMessage
                  render={(msg) => <div className="text-danger">{msg}</div>}
                  name="namework"
                />
                <Field
                  // id="date"
                  name="date"
                  type="text"
                  // value={formik.values.date}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // name="date"
                  // {...formik.getFieldProps('date')}
                  className="form-control"
                  placeholder="تاریخ کار"
                  // required
                />
                {/* {formik.touched.date && formik.errors.date ? (
                  <div className="text-danger">{formik.errors.date}</div>
                ) : null} */}
                <ErrorMessage
                  render={(msg) => <div className="text-danger">{msg}</div>}
                  name="date"
                />

                {/* <select
                name="done"
                value={task.done}
                onChange={onTaskTextChange}
                required={true}
                className="form-control"
              >
                <option value={false}>انجام نشده</option>
                <option value={true}>انجام شده</option>
              </select> */}
                <Field
                  // id="nameDone"
                  name="nameDone"
                  type="text"
                  // value={formik.values.nameDone}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // name="nameDone"
                  // {...formik.getFieldProps('nameDone')}
                  className="form-control"
                  placeholder="نام فرد تولید کننده"
                  // required
                />
                {/* {formik.touched.nameDone && formik.errors.nameDone ? (
                  <div className="text-danger">{formik.errors.nameDone}</div>
                ) : null} */}
                <ErrorMessage
                  render={(msg) => <div className="text-danger">{msg}</div>}
                  name="nameDone"
                />
                <Field
                  // id="group"
                  name="group"
                  as="select"
                  // name="group"
                  // value={formik.values.group}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // required={true}
                  // {...formik.getFieldProps('group')}
                  className="form-control"
                >
                  {/* {formik.touched.namework && formik.errors.namework ? (
                    <div className="text-danger">{formik.errors.namework}</div>
                  ) : null} */}
                  <ErrorMessage
                    render={(msg) => <div className="text-danger">{msg}</div>}
                    name="group"
                  />

                  <option value="">انتخاب گروه</option>
                  {groups.length > 0 &&
                    groups.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.name}
                      </option>
                    ))}
                </Field>
                <div className="mx-2">
                  <input
                    type="submit"
                    className="btn"
                    style={{ backgroundColor: PURPLE }}
                    value="ویرایش کار"
                  />
                  <Link
                    to={'/tasks'}
                    className="btn mx-2"
                    style={{ backgroundColor: COMMENT }}
                  >
                    انصراف
                  </Link>
                </div>
              </Form>
            </Formik>
            {/* <form onSubmit={(event)=>editThisTask(event, taskId)}>
              <input
                type="text"
                value={task.namework}
                onChange={onTaskTextChange}
                name="namework"
                className="form-control"
                placeholder="نام کار"
                required
              />

              <input
                type="text"
                value={task.date}
                onChange={onTaskTextChange}
                name="date"
                className="form-control"
                placeholder="تاریخ کار"
                required
              />
              {/* <select
                name="done"
                value={task.done}
                onChange={onTaskTextChange}
                required={true}
                className="form-control"
              >
                <option value={false}>انجام نشده</option>
                <option value={true}>انجام شده</option>
              </select> */}
            {/* <input
                type="text"
                value={task.nameDone}
                onChange={onTaskTextChange}
                name="nameDone"
                className="form-control"
                placeholder="نام فرد تولید کننده"
                required
              />
              <select
                name="group"
                value={task.group}
                onChange={onTaskTextChange}
                required={true}
                className="form-control"
              >
                <option value="">انتخاب گروه</option>
                {groups.length > 0 &&
                  groups.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))}
              </select>
              <div className="mx-2">
                <input
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: PURPLE }}
                  value="ویرایش"
                />
                <Link
                  to={'/tasks'}
                  className="btn mx-2"
                  style={{ backgroundColor: COMMENT }}
                >
                  انصراف
                </Link>
              </div>
            </form> */}
          </div>
          <div className="img-part" style={{ padding: '0 10px' }}>
            <img src={EditIMG} alt="" width="500px" />
          </div>
        </div>
      )}
    </>
  );
}

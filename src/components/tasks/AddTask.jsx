import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { taskSchema } from '../../validations/taskValidation';
import { TaskContext } from '../../context/taskContext';
import { COMMENT, PURPLE } from '../../helpers/colors';
import Spinner from '../Spinner';
import EditIMG from '../../assets/edit.jpg';

export default function AddTask() {
  const {
    loading,
    createNewTask,
    groups,
    getGroups,
    setTask,
    // errors,
  } = useContext(TaskContext);
  // const formik = useFormik({
  //   initialValues: {
  //     namework: '',
  //     date: '',
  //     nameDone: '',
  //     group: '',
  //   },
  //   validationSchema: taskSchema,
  //   onSubmit: (values) => {
  //     createNewTask(values);
  //   },
  // });
  useEffect(() => {
    setTask({});
    getGroups();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container my-3 d-flex justify-content-between">
          <div className="form-part" style={{ padding: '0 10px' }}>
            {/* {errors?.map((error, index) => (
              <p key={index} className="text-danger">
                {error.message}
              </p>
            ))} */}
            <Formik
              initialValues={{
                namework: '',
                date: '',
                nameDone: '',
                group: '',
              }}
              validationSchema={taskSchema}
              onSubmit={(values) => {
                createNewTask(values);
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
                    value="ثبت کار جدید"
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
          </div>
          <div className="img-part" style={{ padding: '0 10px' }}>
            <img src={EditIMG} alt="" width="500px" />
          </div>
        </div>
      )}
    </>
  );
}

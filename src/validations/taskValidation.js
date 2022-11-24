import * as Yup from 'yup';

export const taskSchema = Yup.object().shape({
  namework: Yup.string().required('نام کار الزامی است.'),
  date: Yup.number().required('تاریخ کار الزامی است.'),
  nameDone: Yup.string().required('نام فرد عامل الزامی است.'),
  group: Yup.string().required('نام گروه الزامی است.'),
});

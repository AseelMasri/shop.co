import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email("البريد الإلكتروني غير صحيح").required("البريد الإلكتروني مطلوب"),
  password: yup.string().required("كلمة المرور مطلوبة"),
});
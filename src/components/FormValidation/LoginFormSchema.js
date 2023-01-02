import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    //минимальная длина - 2 символа
    .min(2, "Must be longer than 2 characters")
    //максимальная длина - 20 символов
    .max(20, "Nice try, nobody has a first name that long")
    .required("Required"),
  password: Yup.string()
    .min(8, "Must be longer than 8 characters")
    .required("Required"),
});

export const textareaFormSchema = Yup.object().shape({
  newMessageBody: Yup.string()
    //минимальная длина - 1 символа
    .min(1, "Must be longer than 1 characters")
    //максимальная длина - 20 символов
    .max(20, "Exceeded maximum number of characters - 20"),
});

export default loginFormSchema;

import * as Yup from "yup";

const profileFormSchema = Yup.object({
  fullName: Yup.string().required("Name is required"),
  lookingForAJobDescription: Yup.string()
    .required("Field is required")
    .max(100, "Exceeded maximum number of characters"),
  aboutMe: Yup.string()
    .required("Field is required")
    .max(100, "Exceeded maximum number of characters"),
});

export default profileFormSchema;

import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .required("username is required")
        .min(2, "name must be at least 2 characters")
});

export default formSchema;
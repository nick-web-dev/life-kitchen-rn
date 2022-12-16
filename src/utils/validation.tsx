import * as Yup from "yup";

const passwordValidation = Yup.string()
  .required()
  .min(8)
  .label("Password")
  .matches(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    "Password must contain one uppercase, one number and one special case character"
  );

export const AppValidation = {
  validationSchemaLogin: () =>
    Yup.object().shape({
      email: Yup.string().required().email().label("Email"),
      password: Yup.string().required().label("Password"),
    }),
  validationSchemaRegister: () =>
    Yup.object().shape({
      name: Yup.string().required().label("Name"),
      email: Yup.string().required().email().label("Email"),
      phoneNumber: Yup.string().required().label("Phone Number"),
      password: Yup.string().required().label("Password"),
    }),
};

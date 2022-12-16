import React from "react";
import { Formik } from "formik";

type ComponentProps = {
  onSubmit: any;
  initialValues: any;
  validationSchema: any;
  key?: number;
  children?: any;
};

const Form: React.FC<ComponentProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize={true}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default Form;

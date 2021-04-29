import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./Contact.css";

const Contact = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [isValidEmail, setIsValidEmail] = useState(true);
  //   const [message, setMessage] = useState("");

  const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label className="form-label" htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="Error-text">{meta.error}</div>
        ) : null}
      </>
    );
  };

  const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label className="form-label" htmlFor={props.id || props.name}>{label}</label>
        <textarea className="text-area" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="Error-text">{meta.error}</div>
        ) : null}
      </>
    );
  };

  const SignupForm = () => {
    return (
      <>
        <Formik
          initialValues={{
            firstName: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("Required"),
            email: Yup.string()
              .email("Invalid email addresss`")
              .required("Required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            await new Promise((r) => setTimeout(r, 500));
            setSubmitting(false);
          }}
        >
          <Form className="contact-form">
            <MyTextInput
              className="form-item"
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Jane"
            />
            <MyTextInput
              className="form-item"
              label="Email Address"
              name="email"
              type="email"
              placeholder="jane@formik.com"
            />
            <MyTextArea
              className="form-item"
              label="Message"
              name="message"
              rows="6"
              placeholder="type here..."
            />
            <br />
            <button type="submit" className="complete-btn">
              Submit
            </button>
          </Form>
        </Formik>
      </>
    );
  };
  return (
    <>
      <header>
        <h1>Contact Us</h1>
      </header>

      <SignupForm />
    </>
  );
};

export default Contact;

import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, TextField } from "@material-ui/core";
import "./Contact.css";

const Contact = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [isValidEmail, setIsValidEmail] = useState(true);
  //   const [message, setMessage] = useState("");

  const validationSchema = yup.object({
    name: yup.string("Enter your Name"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const WithMaterialUI = () => {
    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(JSON.stringify(values, null, 2));
      },
    });

    return (
      <div>
        <form className="contact-form" onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="message"
            name="message"
            label="Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  };

  return (
    <>
      <header>
        <h1>Contact Us</h1>
      </header>
      <WithMaterialUI />
    </>
  );
};

export default Contact;

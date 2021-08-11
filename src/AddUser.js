import React from "react";
import FormContainer, { Form } from "./components/Form";

// Usage 1
export const AddUser = () => {
  return (
    <FormContainer
      initialValues={{ name: "", phone: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Name should not be empty";
        }
        if (!values.phone) {
          errors.phone = "Phone should not be empty";
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log("Submit", values);
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={values.name}
              onInput={handleChange}
            />
            {errors.name && <div>{errors.name}</div>}
            <input
              type="text"
              name="phone"
              value={values.phone}
              onInput={handleChange}
            />
            {errors.phone && <div>{errors.phone}</div>}
            <button type="submit">Submit</button>
          </form>
        );
      }}
    </FormContainer>
  );
};

// Usage 2
export const AddUser2 = () => {
  return (
    <FormContainer
      initialValues={{ name: "", phone: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Name should not be empty";
        }
        if (!values.phone) {
          errors.phone = "Phone should not be empty";
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log("Submit", values);
      }}
    >
      {() => {
        return (
          <Form>
            <Form.Field type="text" name="name" />
            <Form.ErrorMessage name="name" />
            <Form.Field type="text" name="phone" />
            <Form.ErrorMessage name="phone" />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </FormContainer>
  );
};

import React from "react";

function ErrorMessage({ name, errors }) {
  return <>{errors[name] && <div>{errors[name]}</div>}</>;
}

function Field({ type, name, values, handleChange }) {
  return (
    <input
      type={type}
      name={name}
      value={values[name]}
      onInput={handleChange}
    />
  );
}

export const Form = ({
  children,
  handleSubmit,
  handleChange,
  values,
  errors,
}) => {
  const newChildren = React.Children.map(children, (child) => {
    if (child.type.name === "Field") {
      return React.cloneElement(child, {
        values,
        handleChange,
      });
    }
    if (child.type.name === "ErrorMessage") {
      return React.cloneElement(child, {
        errors,
      });
    }
    return child;
  });

  return <form onSubmit={handleSubmit}>{newChildren}</form>;
};

Form.Field = Field;
Form.ErrorMessage = ErrorMessage;

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: this.props.initialValues,
      errors: {},
    };
  }

  validateForm = () => {
    const errors = this.props.validate(this.state.values);
    this.setState({
      errors,
    });
  };

  handleChange = (e) => {
    this.setState(
      {
        values: {
          ...this.state.values,
          [e.target.name]: e.target.value,
        },
      },
      this.validateForm
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.values);
  };

  render() {
    const data = {
      values: this.state.values,
      errors: this.state.errors,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    };
    const children = this.props.children(data);

    return React.Children.map(children, (child) => {
      if (child.type.name === "Form") {
        return React.cloneElement(child, data);
      }
      return child;
    });
  }
}

export default FormContainer;

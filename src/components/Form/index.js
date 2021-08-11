import React from "react";

class Form extends React.Component {
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
    return this.props.children({
      values: this.state.values,
      errors: this.state.errors,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    });
  }
}

export default Form;

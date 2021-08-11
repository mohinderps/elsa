import React from "react";
import Form from "./components/Form";

// class AddUser extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       phone: "",
//       errors: {},
//     };
//   }

//   isValidName = (name) => {
//     return name.length !== 0;
//   };

//   isValidPhone = (phone) => {
//     return phone.length !== 0;
//   };

//   checkFormForErrors = () => {
//     this.setState({
//       errors: {
//         name: this.isValidName(this.state.name) ? null : "Invalid Name",
//         phone: this.isValidPhone(this.state.phone) ? null : "Invalid Phone",
//       },
//     });
//   };

//   handleInputChange = (e) => {
//     this.setState(
//       {
//         [e.target.name]: e.target.value,
//       },
//       this.checkFormForErrors
//     );
//   };

//   handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//   };

//   render() {
//     const { name, phone, errors } = this.state;

//     return (
//       <form onSubmit={this.handleFormSubmit}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onInput={this.handleInputChange}
//           />
//           {errors.name && <div>{errors.name}</div>}
//         </div>
//         <div>
//           <label htmlFor="phone">Phone</label>
//           <input
//             type="number"
//             id="phone"
//             name="phone"
//             value={phone}
//             onInput={this.handleInputChange}
//           />
//           {errors.phone && <div>{errors.phone}</div>}
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

function AddUser() {
  return (
    <Form
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
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onInput={handleChange}
            />
            {errors.name && <div>{errors.name}</div>}
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={values.phone}
              onInput={handleChange}
            />
            {errors.phone && <div>{errors.phone}</div>}
            <button type="submit">Submit</button>
          </form>
        );
      }}
    </Form>
  );
}

export default AddUser;

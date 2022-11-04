import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function onChangeF(event) {
    const { value, name } = event.target;

    setContact((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email
        };
      } else if (name === "email") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form autoComplete="off">
        <input
          onChange={onChangeF}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          autocomplete="off"
          onChange={onChangeF}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        {/* <input
          onChange={onChangeF}
          name="email"
          placeholder="Email"
          value={contact.email}
        /> */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

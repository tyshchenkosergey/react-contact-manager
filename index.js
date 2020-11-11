import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const AddPersonForm = props => {
  const [person, setPerson] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson("");
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add person"
        onChange={handleChange}
        value={person}
      />
      <button type="submit">Add</button>
    </form>
  );
};

const List = props => {
  const listItems = props.contacts.map((val, index) => (
    <li key={index}>{val}</li>
  ));
  return <ul>{listItems}</ul>;
};

const App = props => {
  const [contacts, setContacts] = useState(props.contacts);

  const addPerson = name => {
    setContacts([...contacts, name]);
  };
  return (
    <div>
      <h1>Conctacs Manager</h1>
      <AddPersonForm handleSubmit={addPerson} />
      <List contacts={contacts} />
    </div>
  );
};

const contacts = ["Billy", "Jean", "is", "not", "my", "lover"];

ReactDOM.render(<App contacts={contacts} />, document.getElementById("root"));

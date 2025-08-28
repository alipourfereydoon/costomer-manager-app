import { useState } from "react";
import "./App.css";
import {
  AddContact,
  Contact,
  Contacts,
  EditContact,
  Searchcontact,
  ViewContact,
  Navbar,
  sppiner,
} from "./components";

const App = () => {
  const [loading, setloading] = useState(false);
  const [getcontacts, setContacts] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <Contacts contacts={getcontacts} loading={loading} />
    </div>
  );
};

export default App;

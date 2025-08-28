import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Contacts from "./components/contact/Contacts";

const App = () => {
  const [loading, setloading] = useState(true);
  const [getcontacts, setContacts] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <Contacts contacts={getcontacts} loading={loading} />
    </div>
  );
};

export default App;

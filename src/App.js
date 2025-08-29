import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Navigate to="/Contacts/" />} />
        <Route
          path="/contacts"
          element={<Contacts contacts={getcontacts} loading={loading} />}
        />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/:contactId" element={<ViewContact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
      </Routes>
    </div>
  );
};

export default App;

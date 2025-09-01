import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { getAllContacts, getAllgroups } from "./services/contactService";
import {
  AddContact,
  // Contact,
  Contacts,
  EditContact,
  // Searchcontact,
  ViewContact,
  Navbar,
  // sppiner,
} from "./components";

const App = () => {
  const [loading, setloading] = useState(false);
  const [getcontacts, setContacts] = useState([]);
  const [getgroups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const { data: contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllgroups();
        setContacts(contactsData);
        setGroups(groupsData);
        setloading(false);
      } catch (err) {
        console.log(err.message);
        setloading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Contacts/" />} />
        <Route
          path="/contacts"
          element={<Contacts contacts={getcontacts} loading={loading} />}
        />
        <Route
          path="/groups"
          element={<Contacts contacts={getgroups} loading={loading} />}
        />

        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/:contactId" element={<ViewContact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
      </Routes>
    </div>
  );
};

export default App;

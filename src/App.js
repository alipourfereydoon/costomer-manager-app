import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import {
  createContact,
  getAllContacts,
  getAllgroups,
  getContact,
} from "./services/contactService";
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
  const [forceRender, setForceRender] = useState(false);
  const [getcontacts, setContacts] = useState([]);
  const [getGroups, setGroups] = useState([]);
  const [getContact, setContact] = useState({
    fullname: "",
    photo: "",
    mobile: "",
    email: "",
    job: "",
    group: "",
  });

  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const { data: contactsData } = await getAllContacts();
        setContacts(contactsData);
        setloading(false);
      } catch (err) {
        console.log(err.message);
        setloading(false);
      }
    };
    fetchData();
  }, [forceRender]);

  const createContactForm = async (event) => {
    event.preventDefault();
    try {
      const { status } = await createContact(getContact);
      if (status === 201) {
        setContact({});
        setForceRender(!forceRender);
        navigate("/contacts");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const setContactInfo = (event) => {
    setContact({ ...getContact, [event.target.name]: event.target.value });
  };
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
          element={<Contacts contacts={getGroups} loading={loading} />}
        />

        <Route
          path="/contacts/add"
          element={
            <AddContact
              loading={loading}
              setContactInfo={setContactInfo}
              contact={getContact}
              groups={getGroups}
              createContactForm={createContactForm}
            />
          }
        />
        <Route path="/contacts/:contactId" element={<ViewContact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
      </Routes>
    </div>
  );
};

export default App;

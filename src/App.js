import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import {
  createContact,
  getAllContacts,
  getAllgroups,
  // getContact,
  deleteContact,
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
import { confirmAlert } from "react-confirm-alert";
import {
  COMMENT,
  CURRENTLINE,
  FOREGROUND,
  PURPLE,
  YELLOW,
} from "./helpers/colors";

const App = () => {
  const [loading, setloading] = useState(false);
  const [forceRender, setForceRender] = useState(false);
  const [getcontacts, setContacts] = useState([]);
  const [getFiltteredContacts, setFiltteredContacts] = useState([]);
  const [getGroups, setGroups] = useState([]);
  const [getContact, setContact] = useState({
    fullname: "",
    photo: "",
    mobile: "",
    email: "",
    job: "",
    group: "",
  });
  const [query, setQuery] = useState({ text: "" });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const { data: contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllgroups();
        setContacts(contactsData);
        setFiltteredContacts(contactsData);
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
  const confirm = (contactId, contactFullname) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            className="p-4"
            style={{
              backgroundColor: CURRENTLINE,
              border: `1px solid ${PURPLE}`,
              borderRadius: "1em",
            }}
          >
            <h1 style={{ color: YELLOW }}>delete contact</h1>
            <p style={{ color: FOREGROUND }}>
              {" "}
              are you sure you want to delet {contactFullname}
            </p>
            <button
              className="btn mx-2"
              style={{ backgroundColor: PURPLE }}
              onClick={() => {
                removeContact(contactId);
                onClose();
              }}
            >
              {" "}
              i am sure
            </button>
            <button
              className="btn"
              onClick={{ onClose }}
              style={{ backgroundColor: COMMENT }}
            >
              {" "}
              no im not sure
            </button>
          </div>
        );
      },
    });
  };
  const removeContact = async (contactId) => {
    try {
      setloading(true);
      const response = await deleteContact(contactId);
      if (response) {
        const { data: contactsData } = await getAllContacts();
        setContacts(contactsData);
        setloading(false);
      }
    } catch (err) {
      console.log(err.nessage);
      setloading(false);
    }
  };
  const contactSearch = (event) => {
    setQuery({ ...query, text: event.target.value });
    const allContacts = getcontacts.filter((contact) => {
      return contact.fullname
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setFiltteredContacts(allContacts);
  };
  return (
    <div className="App">
      <Navbar query={query} search={contactSearch} />
      <Routes>
        <Route path="/" element={<Navigate to="/Contacts/" />} />
        <Route
          path="/contacts"
          element={
            <Contacts
              contacts={getFiltteredContacts}
              loading={loading}
              confirmDelete={confirm}
            />
          }
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
        <Route
          path="/contacts/edit/:contactId"
          element={
            <EditContact
              forceRender={forceRender}
              setForceRender={setForceRender}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

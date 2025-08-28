import React from "react";
import Contact from "./Contact";
import { CURRENTLINE, ORANGE, PINK } from "../../helpers/colors";
import Sppiner from "../sppiner";

const Contacts = ({ contacts, loading }) => {
  return (
    <React.Fragment>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <button className="btn mx-2" style={{ backgroundColor: PINK }}>
                  creat new user
                  <i className="fa fa-plus-circle mx-2 " />
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Sppiner />
      ) : (
        <section className="container">
          <div className="row">
            {contacts.length > 0 ? (
              contacts.map((c) => <Contact key={c.id} contact={c} />)
            ) : (
              <div
                className="text-center py-5"
                style={{ backgroundColor: CURRENTLINE }}
              >
                <p className="h3" style={{ color: ORANGE }}>
                  user not found
                </p>
                <img
                  src={require("../../assets/not found1.jpg")}
                  alt="not found"
                  className="w-25"
                />
              </div>
            )}
            ;
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default Contacts;

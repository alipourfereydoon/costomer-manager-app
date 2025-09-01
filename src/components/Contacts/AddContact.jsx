import { Link } from "react-router-dom";
import Sppiner from "../sppiner";
import { COMMENT, GREEN, PURPLE } from "../../helpers/colors";

const AddContact = ({
  loading,
  contact,
  setContactInfo,
  groups,
  createContactForm,
}) => {
  return (
    <>
      {loading ? (
        <Sppiner />
      ) : (
        <>
          <section className="p-3">
            <img
              src={require("../../assets/file1092438482345896051_1541426373537loading-spinner-screenshot.gif")}
              height={"300px"}
              alt=""
              style={{
                position: "absolute",
                zIndex: "-1",
                top: "130px",
                left: "100px",
                opacity: "50%",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <p
                    className="h4 fw-bold text-center"
                    style={{ color: GREEN }}
                  >
                    {" "}
                    create new contact
                  </p>
                </div>
              </div>
              <hr style={{ backgroundColor: GREEN }} />
              <div className="row mt-5">
                <div className="col md-4">
                  <form onSubmit={createContactForm}>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="fullname"
                        value={contact.fullname}
                        onChange={setContactInfo}
                        className="form-control"
                        placeholder="name and lastname"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="photo"
                        value={contact.photo}
                        onChange={setContactInfo}
                        className="foom-control"
                        required={true}
                        placeholder="photo"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="numner"
                        name="mobile"
                        value={contact.mobile}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="mobile number"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="email"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="job"
                        value={contact.job}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="job"
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        name="group"
                        value={contact.group}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                      >
                        <option value="">select group</option>
                        {groups.length > 0 &&
                          groups.map((group) => (
                            <option key={group.id} value={group.id}>
                              {group.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="mx-2">
                      <input
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: PURPLE }}
                        value="create new contact"
                      />
                      <Link
                        to={"/Contacts"}
                        className="btn mx-2"
                        style={{ backgroundColor: COMMENT }}
                      >
                        {" "}
                        back
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AddContact;

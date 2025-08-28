import { RED, CURRENTLINE, CYAN, ORANGE } from "../../helpers/colors";

const Contact = () => {
  return (
    <div className="col-md-6">
      <div style={{ backgroundColor: CURRENTLINE }} className="card my-2">
        <div className="card-body">
          <div className="row align-items-center justify-content-around d-flex">
            <div className="col-md-4 col-sm-4">
              <img
                src="https://placehold.co/200"
                alt=""
                style={{ border: "1px solid purple " }}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-7 col-sm-7">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark">
                  name and family-name:{" "}
                  <span className="fw-bold">ali pourfereydoon</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  phone number: <span className="fw-bold">009179179170</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  email address: <span className="fw-bold">ali@yahoo.com</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  name and family-name:{" "}
                  <span className="fw-bold">ali pourfereydoon</span>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
              <button className="btn my-1" style={{ backgroundColor: ORANGE }}>
                {" "}
                <i className="fa fa-eye"></i>
              </button>
              <button className="btn my-1" style={{ backgroundColor: CYAN }}>
                {" "}
                <i className="fa fa-pen"></i>
              </button>
              <button className="btn my-1" style={{ backgroundColor: RED }}>
                {" "}
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

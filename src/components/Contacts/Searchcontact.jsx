import { PURPLE } from "../../helpers/colors";

const SearchContact = ({ query, search }) => {
  return (
    <div className="input-group mx-2 w-75">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: PURPLE }}
      >
        <i className="fas fa-search"></i>
      </span>

      <input
        type="text"
        className="form-control"
        value={query.text}
        onChange={search}
        placeholder="user search"
        aria-label="search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};
export default SearchContact;

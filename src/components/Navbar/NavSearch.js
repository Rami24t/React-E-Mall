import React from "react";
import { MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";

function NavSearch({ withSearch, filter, setFilter }) {
  if (!withSearch) return null;
  return (
    <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
      <input
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        className="form-control"
        placeholder="search for..."
        aria-label="Search"
        type="Search" />
      <MDBBtn disabled outline className="text-orange-400">
        Search
      </MDBBtn>
    </MDBInputGroup>
  );
}

export default NavSearch;
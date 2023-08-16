import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBNavbarNav,
} from "mdb-react-ui-kit";
import NavCart from "./NavCart";
import NavSearch from "./NavSearch";
import NavBarLinks from "./NavBarLinks";

function Navbar({
  title,
  withSearch,
  filter,
  setFilter,
  orders,
  cartLink,
}) {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  useEffect(() => {
    document.title = title === "E-Mall" ? "IRT E-Mall" : "IRT E-Mall | " + title;
  }, [title]);

  return (
    <div className="sticky top-0 z-10">
      <MDBNavbar expand="lg" light bgColor="light" className="mt-[2px] pt-2">
        <MDBContainer fluid>
          <NavLink to={"/"}>
            <MDBNavbarBrand className="font-semibold opacity-80">
              IRT {title}
            </MDBNavbarBrand>
          </NavLink>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className="mr-auto gap-3 items-center mb-2 mb-lg-0">
              <NavBarLinks />
            </MDBNavbarNav>
          </MDBCollapse>
          <NavSearch
            withSearch={withSearch}
            filter={filter}
            setFilter={setFilter}
          />
<NavCart orders={orders} cartLink={cartLink} />
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Navbar;
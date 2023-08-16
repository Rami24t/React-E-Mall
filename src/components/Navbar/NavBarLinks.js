import React from "react";
import { NavLink } from "react-router-dom";
import { MDBNavbarItem } from "mdb-react-ui-kit";

function NavBarLinks() {
    const navlinks = [
      { name: "Home", link: "/" },
      { name: "E-Restaurant", link: "/restaurant" },
      { name: "Order", link: "/orders" },
      { name: "E-Shop", link: "/eshop" },
      { name: "Records", link: "/records" },
    ];
    return navlinks.map((link, index) => (
      <MDBNavbarItem key={index}>
        <NavLink
          activeClassName="active"
          className={"text-slate-500 transition duration-300 inline-block hover:scale-105  hover:text-slate-600 hover:bg-[#fff]"}
          to={link.link}
        >
          {link.name}
        </NavLink>
      </MDBNavbarItem>
    ));
  }

  export default NavBarLinks;
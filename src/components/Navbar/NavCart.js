import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  MDBNavbarLink, MDBIcon, MDBDropdown,
  MDBDropdownToggle,
  MDBBadge,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdb-react-ui-kit';

function NavCart({ orders, cartLink }) {
  if (!useLocation().pathname.endsWith('restaurant')) return null;
  return (
    <div className='ms-auto pt-1 pe-3'>
      <MDBDropdown>
        <MDBNavbarLink className='me-3 me-lg-0'>
          <MDBDropdownToggle tag='a' className='hidden-arrow'>

            <MDBIcon fas icon='shopping-cart' className='text-2xl text-orange-400' />
            <MDBBadge className='px-2 py-1 opacity-90' pill notification color='danger'>
              {orders}
            </MDBBadge>
          </MDBDropdownToggle>
        </MDBNavbarLink>
        <MDBDropdownMenu>
          <MDBDropdownItem className='text-center p-1'>
            <NavLink to={cartLink} className='p-[2px] px-2 rounded text-reset'>  Go to Order </NavLink>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
}

export default NavCart;
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup
} from 'mdb-react-ui-kit';

export default function App({title, withSearch, filter, setFilter}) {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
        <NavLink to={'/'}>
          <MDBNavbarBrand>IRT {title}</MDBNavbarBrand>
          </NavLink>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <NavLink to={'/'}>
                    <MDBNavbarLink active aria-current='page'>
                      Home
                    </MDBNavbarLink>
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <NavLink to={'/restaurant'}>
                <MDBNavbarLink>E-Restaurant</MDBNavbarLink>
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <NavLink to={'/eshop'}>
                <MDBNavbarLink>E-Shop</MDBNavbarLink>
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              {/* <NavLink to={'./'}> */}
                <MDBNavbarLink>Records Store</MDBNavbarLink>
                {/* </NavLink> */}
              </MDBNavbarItem>
            </MDBNavbarNav>
            { withSearch ? <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
              <input onChange={(e)=>setFilter(e.target.value)} value={filter} className='form-control' placeholder="search for..." aria-label="Search" type='Search' />
              <MDBBtn outline>Search</MDBBtn> 
            </MDBInputGroup> : null }
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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
  MDBInputGroup,
  MDBDropdown,
  MDBDropdownToggle,
  MDBBadge,
  MDBDropdownMenu,
  MDBDropdownItem} from 'mdb-react-ui-kit';

export default function App({title, withSearch, filter, setFilter, orders, cartLink}) {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <div className='sticky top-0 z-10'>
      <MDBNavbar expand='lg' light bgColor='light' className='mt-[2px] pt-2'>
        <MDBContainer fluid>
        <NavLink to={'/'}>
          <MDBNavbarBrand className='font-semibold opacity-80'>IRT {title}</MDBNavbarBrand>
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
            <MDBNavbarNav className='mr-auto gap-3 items-center mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <NavLink activeClassName="active" className={'text-slate-500 transition duration-300 inline-block hover:scale-105  hover:text-slate-600 hover:bg-[#fff]'} to={'/'}>
                      Home
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <NavLink activeClassName="active" className={'text-slate-500 transition duration-300 inline-block hover:scale-105  hover:text-slate-600 hover:bg-[#fff]'} to={'/restaurant'}>
                E-Restaurant
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <NavLink activeClassName="active" className={'text-slate-500 transition duration-300 inline-block hover:scale-105  hover:text-slate-600 hover:bg-[#fff]'} to={'/eshop'}>
                E-Shop
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <NavLink activeClassName="active" className={'text-slate-500 transition duration-300 inline-block hover:scale-105  hover:text-slate-600 hover:bg-[#fff]'} to={'/records'}>
                Records Store
                </NavLink>
              </MDBNavbarItem>

              {useLocation().pathname.endsWith('restaurant') ?
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
              : null }


            </MDBNavbarNav>
            { withSearch ? <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
              <input onChange={(e)=>setFilter(e.target.value)} value={filter} className='form-control' placeholder="search for..." aria-label="Search" type='Search' />
              <MDBBtn disabled outline className='text-orange-400'>Search</MDBBtn> 
            </MDBInputGroup> : null }
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
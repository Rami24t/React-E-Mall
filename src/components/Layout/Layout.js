import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { Outlet } from 'react-router-dom';


const Layout =() =>{
    return(
        <MDBContainer>
            <Outlet />
        </MDBContainer>
    )
}

export default Layout;
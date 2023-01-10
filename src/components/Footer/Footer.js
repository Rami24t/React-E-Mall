import React,{ useState } from 'react';
import Modal from '../Modal/Modal';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Footer = ({page}) => {    
  const [optSmModal, setOptSmModal] = useState(false);
  const toggleShow = () => setOptSmModal(!optSmModal);

  return (
<footer>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='Linkedin' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                IRT E-Mall
              </h6>
              <p> A React.js Webdevelopment Project. <br /> 
              {page} page by <a href="#r">Rami Al-Saadi</a> 2022 &copy;.   Project by <a href="#i">Izabela</a>, <a href="#r">Rami</a>, and <a href="#t">Thilina</a>.</p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>E-Stores open now</h6>
              <p>
                <Link to='/restaurant' className='text-reset'>
                  IRT Online Restaurant
                </Link>
              </p>
              <p>
                <Link to='/eshop' className='text-reset'>
                Our E-Shop
                </Link>
              </p>
              <p>
                <Link to='/records' className='text-reset'>
                  The Records Store
                </Link>
              </p>
              <p>
                <Link to='/' className='text-reset'>
                  Main Entrance
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol onClick={toggleShow} md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Germany ...
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' /> ... 
                
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 49 ...
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 49  ...
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div onClick={toggleShow} className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <p className='text-reset fw-bold'>{page} page by <a href="#r">Rami Al-Saadi</a> 2022 &copy;  - Project by <a href="#i">Izabela</a>, <a href="#r">Rami</a>, and <a href="#t">Thilina</a></p>
        {/* <p className='text-reset fw-bold'>
          Rami Al-Saadi
        </p> */}
      </div>
    
<Modal page={page} optSmModal={optSmModal} toggleShow={toggleShow} setOptSmModal={setOptSmModal} />
</MDBFooter>
</footer>
  )
}

export default Footer


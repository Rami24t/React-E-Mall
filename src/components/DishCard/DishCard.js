import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from 'mdb-react-ui-kit';

export default function App({title,p, img,clicked}) {
  return (
    <div onClick={clicked}>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={img}
            alt={title}
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>
                {p?.toString()}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </div>
  );
}
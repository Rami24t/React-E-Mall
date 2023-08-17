import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBCol
} from 'mdb-react-ui-kit';

export default function App({title,p, img,clicked,mini, addOrder, cat,price,key2}) {
  return (
    <div onClick={clicked} className="mx-auto text-center ">
      <MDBCol title={title} className={mini ? " w-20 h-11 inline-block cursor-pointer" : ''}>
        <MDBCard className='h-100 relative'>
         {!cat?  <div onClick={addOrder} title='Add to cart' className='cart absolute end-0 top-0 p-2'>
                    <MDBIcon fas icon='add' className='text-2xl text-gray-200 bg-yellow-500 cursor-pointer :opacity:-90 hover:opacity-80 rounded p-1'/>
                  </div> :''}
          <MDBCardImage
            src={img}
            alt={title}
            position='top'
          />
          {!mini ? 
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText className='text-sm'>
                {p?.toString()} {p && price ? '-:-' : ''} {price ? `Price: ${price?.toString()}€` : ''} 
            </MDBCardText>
          </MDBCardBody>
          : ''}
        </MDBCard>
      </MDBCol>
      </div>
  );
}
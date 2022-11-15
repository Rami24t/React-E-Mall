import React, { useState, useRef, useContext, useEffect } from "react";
import validateCC from "../../utils/CreditCardVerification";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { EMallContext } from "../EMallContext";
import { useNavigate } from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBValidationItem,
} from "mdb-react-ui-kit";

export default function AddPaymentAddress({
  optSmModal,
  setOptSmModal,
  toggleShow,
}) {

  const {dispatch} = useContext(EMallContext);






useEffect(() => {if(formValue.city=="" || formValue.zip == "")
fetch('https://ipinfo.io/json?token=256e5c9b2d62a0')
.then(response => response.json())
.then(data=>data?.city ? setFormValue({...formValue, city: data.city, zip: data.postal}) : '' )
.catch(console.log)},[])


const iFormVals = {
    fname: "",
    lname: "",
    company: "",
    address: "",
    tel: "",
    ccnum: "",
    // state: "",
    zip: "",
    city: "",
    houseAddress: "",
    additional: "",
    email: "",
    notes: "",
    createAcc: false,
    cctype: '',
    deliveryTime: ''
  }

  const [formValue, setFormValue] = useState(iFormVals);

  const ccnum = useRef();

  function validateCCNUM() {
    const input = ccnum.current;
    if (validateCC(formValue.ccnum).valid==='no')
      input.setCustomValidity('Invalid Number: '+validateCC(formValue.ccnum).error);
    else
    {
        input.setCustomValidity('');
    }
    setFormValue({ ...formValue , cctype:validateCC(formValue.ccnum).card, ccnum: validateCC(formValue.ccnum).number});
    input.reportValidity();
  }

  const navigate = useNavigate();
function handleSubmit(e) {
    e.preventDefault();
    dispatch({type: 'placeOrder', payload: formValue});
    toggleShow();
    setTimeout(() => navigate('/restaurant'), 700)
    // if(!formValue.createAcc){
    //     setFormValue(iFormVals);
    // }
//    else
    setFormValue({...formValue, ccnum: '' , notes: '', deliveryTime: ''})
  }

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
// const onChangeChecked = e =>     setFormValue({ ...formValue, [e.target.name]: e.target.checked });

const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <>
      <MDBModal show={optSmModal} tabIndex="-1" setShow={setOptSmModal}>
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Finish Order</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={handleSubmit}>
                <>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput
                        value={formValue.fname}
                        name="fname"
                        type="text"
                        onChange={onChange}
                        id="validationCustom01"
                        required
                        label="First name"
                      />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput
                        value={formValue.lname}
                        name="lname"
                        type="text"
                        onChange={onChange}
                        id="validationCustom02"
                        required
                        label="Last name"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    id="form6Example3"
                        type="text"
                    label="Company name"
                    name="company"
                    value={formValue.company}
                    onChange={onChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    id="form6Example4"
                    label="Address"
                        type="text"
                    name="address"
                    value={formValue.address}
                    onChange={onChange}
                    required
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    type="email"
                    id="form6Example5"
                    label="Email"
                    name="email"
                    value={formValue.email}
                    onChange={onChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    type="tel"
                    id="form6Example6"
                    label="Phone"
                    name="tel"
                    value={formValue.tel}
                    onChange={onChange}
                    required
                  />

                  {/* <MDBCheckbox
                    wrapperClass="d-flex justify-content-center mb-4"
                    id="form6Example8"
                    label="Create an account?"
                    checked={formValue.createAcc}
                    onChange={onChangeChecked}
                  /> */}

                  <MDBInput
                    wrapperClass="mb-4"
                  type="textarea"
                    rows={4}
                    label="Order Notes"
                    name="notes"
                    value={formValue.notes}
                    onChange={onChange}
                  />
                  <MDBValidationItem
                    className="col-mb-4"
                    feedback="Please provide a valid address."
                    invalid
                  >
                    <MDBInput
                      label="House Address: Street Address, House Number"
                        type="text"
                      name="houseAddress"
                      placeholder="Example Str., 24"
                      value={formValue.houseAddress}
                      onChange={onChange}
                      required
                    />
                  </MDBValidationItem>

                  <MDBValidationItem
                    className="col-mb-4"
                    feedback="Please provide a valid city."
                    invalid
                  >
                    <MDBInput
                      value={formValue.city}
                      name="city"
                      onChange={onChange}
                        type="text"
                      placeholder="Beirut"
                      required
                      label="City"
                    />
                  </MDBValidationItem>
                  <MDBValidationItem
                    className="col-mb-4"
                    feedback="Please provide a valid zip."
                    invalid
                  >
                    <MDBInput
                      value={formValue.zip}
                        type="number"
                      name="zip"
                      placeholder="35390"
                      onChange={onChange}
                      required
                      label="Zip"
                    />
                  </MDBValidationItem>

                  <MDBInput
                    wrapperClass="mb-4"
                    rows={4}
                    label="Additional information"
                        type="text"
                        name="additional"
                    placeholder="9th Flr, East"
                    value={formValue.additional}
                    onChange={onChange}
                  />

                  <MDBValidationItem
                    className="col-12"
                    feedback="You must agree before submitting."
                    invalid
                  >
                    <MDBCheckbox
                      label="Agree to terms and conditions"
                      id="invalidCheck"
                      required
                    />
                  </MDBValidationItem>

                  <MDBValidationItem
                    className="col-12"
                    feedback="You must add your valid credit number for verification and for online payments."
                    invalid
                  >
                    <MDBInput
                        type="text"
                      wrapperClass="mt-4"
                      label="Credit Card Number"
                      name="ccnum"
                      inputRef={ccnum}
                      value={formValue.ccnum}
                      onChange={onChange}
                      onBlur={validateCCNUM}
                      onKeyDown={validateCCNUM}
                    required
                    />
                  </MDBValidationItem>
                    <MDBInput
                    disabled
                      className="mb-4 mt-0"
                      label="Credit Card Type"
                      name="cc"
                      value={formValue.cctype}
                    />


    <FormControl sx={{ m: 1, minWidth: 120 }} className="col-11" size="small">
      <InputLabel id="select-small">Delivery Time</InputLabel>
      <Select   
      defaultValue="As Soon As Possible"
        className=" mb-4"
        labelId="time-select"
        label="Delivery Time"
        id="time-select"
        name="deliveryTime"
        value={formValue.deliveryTime}
        onChange={handleChange}
        required
      >
        <MenuItem selected value={'As Soon As Possible'}>As Soon As Possible</MenuItem>
        <MenuItem value={0.5}>in about half an hour</MenuItem>
        <MenuItem value={1}>in about 1hr</MenuItem>
        <MenuItem value={1.5}>in about 1hr & 30mins</MenuItem>
        <MenuItem value={2}>in about 2 hours</MenuItem>
        <MenuItem value={2.5}>in about 2 hours & 30mins</MenuItem>
        <MenuItem value={3}>in about 3 hours</MenuItem>
      </Select>
    </FormControl>
      {/* <input  className="col-1 text-center pt-3" value={'hours'} disabled /> */}


                  <MDBBtn style={{fontWeight: "bold", fontSize: '1rem', width: '50%', margin: '8px 8px 8px auto',textAlign: 'center', display: 'block', minWidth: '137px' }} type="submit">
                    Place order
                  </MDBBtn>
                </>
              </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

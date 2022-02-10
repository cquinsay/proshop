import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';



const ShippingScreen = ({ navigate }) => {

  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  return <FormContainer>
    <h1>Shipping</h1>
    <Form onSubmit={submitHandler}>
      <Form.Group controlId='address'>
        <Form.Label className='mt-3'>Address</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter address'
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId='city'>
        <Form.Label className='mt-3'>City</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter city'
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId='postalCode'>
        <Form.Label className='mt-3'>Postal Code</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter postal code'
          value={postalCode}
          required
          onChange={(e) => setPostalCode(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId='country'>
        <Form.Label className='mt-3'>Country</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter country'
          value={country}
          required
          onChange={(e) => setCountry(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Button type='submit' variant='primary'>
        Continue
      </Button>
    </Form>
  </FormContainer>
};

export default ShippingScreen;

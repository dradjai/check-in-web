import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

export default function CheckInHome({ setCheckIn}) {

  const [fname, setFirstName] = useState();
  const [lname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [showToast, setShowToast] = useState(false);


  const handleAdd = (e) => {
    e.preventDefault();
    fetch("https://check-in-api-dr.web.app/customers", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ fname, lname, email, phone})
      
    }) 
      .then(resp => resp.json)
      .then(setCheckIn)
      .catch()
      setShowToast(true);
  }

  return(
    <>
    <main className='main'>
     <Toast
      onClose={ () => setShowToast(false)}
      autohide
      show={showToast}
      delay={2000}>

      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Checked In</strong>
      </Toast.Header>
      <Toast.Body>Thank you for checking in!</Toast.Body>
    </Toast>
   
      

      <Form onSubmit={handleAdd} className='form-check-in'>
      <h2>Customer Check In</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="First Name"
          value={fname}
          onChange={ (e) => {setFirstName(e.target.value)}} />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Last Name" 
          value={lname}
          onChange={ (e) => {setLastName(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Email" 
          value={email}
          onChange={ (e) => {setEmail(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Phone Number" 
          value={phone}
          onChange={ (e) => {setPhone(e.target.value)}}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Check In
      </Button>
    </Form>

    </main>
    </>
  )

}
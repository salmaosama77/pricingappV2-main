import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
  PersonFill,
  Envelope,
  Building,
  Phone,
  LockFill,
  ArrowRepeat,
} from 'react-bootstrap-icons';

function RegistrationForm() {
  return (
    <div
      className="registration-form"
      style={{ backgroundImage: `url('../../images/formbg.jpg')` }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3">
                <PersonFill size={20} className="form-icon" />
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Envelope size={20} className="form-icon" />
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Building size={20} className="form-icon" />
                <Form.Control type="text" placeholder="Company Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Phone size={20} className="form-icon" />
                <Form.Control type="tel" placeholder="Phone Number" />
              </Form.Group>

              <Form.Group className="mb-3">
                <LockFill size={20} className="form-icon" />
                <Form.Control type="password" placeholder="Enter Password" />
              </Form.Group>

              <Form.Group className="mb-3">
                <ArrowRepeat size={20} className="form-icon" />
                <Form.Control type="password" placeholder="Re-Enter Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="mb-3">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RegistrationForm;

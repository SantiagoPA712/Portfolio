// src/components/Contact.tsx
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
    <Container id="contact" className="my-5">
      <h2>Contact Me</h2>
      <p>Provide your email address, LinkedIn profile, GitHub profile, and any other relevant social media or professional links.</p>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;

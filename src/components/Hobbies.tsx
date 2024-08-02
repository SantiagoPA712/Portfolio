// src/components/Hobbies.tsx
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

interface Hobby {
  title: string;
  description: string;
  image: string;
}

const Hobbies: React.FC = () => {
  const hobbies: Hobby[] = [
    {
      title: 'Videogames',
      description: 'I have a Nintendo Wii 25th anniversary of Super Mario, a Nintendo Wii U, an Xbox 360, Xbox One and a Xbox Series X.',
      image: 'https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png'
      
    },
    {
      title: 'Football',
      description: 'Real madrid and Atletico Nacional are my favorite clubs. ',
      image: 'https://i.ytimg.com/vi/aIaaxUxMcR8/hqdefault.jpg'
    },
    {
      title: 'Hangout with family and friends',
      description: 'Travel to other countries, go to shopping malls, play tablegames, etc.',
      image: 'https://media.bizj.us/view/img/7445042/batz*1200xx1697-955-0-88.jpg'
    }
  ];

  return (
    <Container id="hobbies" className="my-5">
      <h2>Hobbies</h2>
      <Row>
        {hobbies.map((hobby, index) => (
          <Col md={4} key={index} className="mb-4">
            <h4>{hobby.title}</h4>
            <Image src={hobby.image} fluid rounded className="mb-3" />
            <p>{hobby.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Hobbies;

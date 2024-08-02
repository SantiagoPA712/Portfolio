// src/components/Projects.tsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: 'Virtual mouse using hand gesture   ',
      description: 'Made by using machine learning and AI.',
      technologies: 'Python',
      role: 'Developer',
      link: '#',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230921120127/Volume-Controller.png'
    },
    {
      title: 'Fluid simulator',
      description: 'For medical uses.',
      technologies: 'HTML/CSS and Python',
      role: 'Frontend Developer',
      link: '#',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pXuLns-6vaUhlNjhBQE5PDHkFtMdQSgZ8g&s'
    },
    {
      title: 'The power of the sun in the palm of my hand',
      description: 'Shut it off Otto!',
      technologies: 'Hate for Spider Man',
      role: 'Memes',
      link: '#',
      image: 'https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/282213106_5075054792576882_7320467379884732214_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=31gVKndONwMQ7kNvgE_ZIUq&_nc_ht=scontent.feoh3-1.fna&oh=00_AYB7VooXadadpOBMq3Gj7UqFG0w9d39uZHzRwk5UHLzRJg&oe=66B1A046'
    }
 
  ];

  return (
    <Container id="projects" className="my-5">
      <h2>Projects</h2>
      <Row>
        {projectList.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text><strong>Technologies:</strong> {project.technologies}</Card.Text>
                <Card.Text><strong>Role:</strong> {project.role}</Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;

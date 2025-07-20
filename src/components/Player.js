// src/components/Player.js
import React from 'react';
import { Card } from 'react-bootstrap';

export default function Player({ name, team, nationality, jerseyNumber, age, image }) {
  const cardStyle = {
    width: '18rem',
    margin: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey #:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 18,
  image: "https://via.placeholder.com/150"
};

import React from 'react';
import styled from 'styled-components';
import './Map.css';

const Container = styled.div`
    text-align: center;
    
`

const Map = () => {
  return (
    <Container>
        <iframe src='https://www.google.com/maps/embed/v1/search?q=restaurants%20near%20me&key=AIzaSyBb_zO6I2OtyHIfO9vUazpYzo37wPLrKTY'></iframe>
    </Container>
  )
}

export default Map
import React from 'react'
import styled from 'styled-components'
import Map from '../Components/Map'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import FoodiesLogo from './FoodiesLogo.png'

const Container = styled.div`
  background-color: #CCDAD1;
`
const Header = styled.div`
  background-image: url(${'https://images.unsplash.com/photo-1652862730730-26712af6bcac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'});
`
const Logo = styled.img`
  height: 250px;
  width: 250px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0px;
  padding-bottom: 0px;
`

const Home = () => {
  return (
    <Container>
        <Header>
          <Logo src={FoodiesLogo} />
          <NavBar />
        </Header>  
        <Map />
        <Footer />
    </Container>
  )
}

export default Home
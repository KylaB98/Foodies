import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import FoodiesLogo from './FoodiesLogo.png'
import AllFriends from '../Components/AllFriends'

const Container = styled.div`
  background-color: #778383;
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
const Title = styled.h1`
    font-family: 'Quicksand', sans-serif;
    font-size: 60px;
    text-align: center;
`

const FriendsBox = styled.div`

`

const Friends = () => {
  return (
    <Container>
        <Header>
            <Logo src={FoodiesLogo} />
            <NavBar />
        </Header>
        <Title>Your Friends</Title>
        <FriendsBox>
            <AllFriends />
        </FriendsBox>
        <Footer />
    </Container>
  )
}

export default Friends
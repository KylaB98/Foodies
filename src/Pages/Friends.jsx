import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import FoodiesLogo from './FoodiesLogo.png'
import AllFriends from '../Components/AllFriends'
import iconsearch from './iconsearch.png'

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
const SearchContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
`
const Input = styled.input`
  font-family: 'Quicksand', sans-serif;
  font-size: 30px;
  padding:10px;
  text-align: center;
  width: 400px;
  height: 40px;
  background-color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  `


const Button = styled.button`
  width: 70px;
  padding: 10px;
  background-color: #FF5700;
  border: none;
  border-radius: 10px;
  margin-left: 10px;
  cursor: pointer;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const Img = styled.img`

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
        <SearchContainer>
          <Input type="text" placeholder="Search..."></Input>
          <Button type="submit"><Img src={iconsearch}></Img></Button>
        </SearchContainer>
        <FriendsBox>
            <AllFriends />
        </FriendsBox>
        <Footer />
    </Container>
  )
}

export default Friends
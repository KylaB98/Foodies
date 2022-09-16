import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import iconhome from './iconhome.png'
import iconfriends from './iconfriends.png'
import iconheart from './iconheart.png'


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 10px;
`
const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #FF5700;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    padding: 15px;
    width: 450px;
`

const Tab = styled.div`
   background-color: #FF5700;
   border-radius: 50px;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 40px;
   margin: 0 40px;
   font-size: 10px;
   font-weight: bold;
   overflow: hidden;
   max-width: 0;
 
   &:hover {
       background-color: #FF8500;
       text-decoration: underline;
       transition-duration: 600ms;
   }
     cursor: pointer;
`


const Img = styled.img`
    height: 30px;
    width: 30px;
`

const NavBar = () => {
  return (
    <Container>
        <NavContainer>
                <Tab>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><Img src={iconhome}/></Link>
                </Tab>
                <Tab>
                    <Img src={iconheart} />
                </Tab>
                <Tab>
                    <Link to="/friends" style={{ textDecoration: 'none', color: 'inherit' }}><Img src={iconfriends}/></Link>
                </Tab>
        </NavContainer>
    </Container>
  )
}

export default NavBar
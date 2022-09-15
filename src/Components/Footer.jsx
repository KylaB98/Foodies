import React from 'react'
import styled from 'styled-components'
import FoodiesLogo from '../Pages/FoodiesLogo.png'

const Container = styled.div`
    font-family: 'Quicksand', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`
const Logo = styled.img`
    height: 90px;
    width: 100px;
`

const IconList = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'Quicksand', sans-serif;
`
const Icon = styled.img`
    height: 30px;
    width: 30px;
    padding: 10px;
    cursor: pointer;
    
`

const Copyright = styled.p`

`

const Footer = () => {
  return (
    <Container>
        <Logo src={FoodiesLogo} />
        <IconList>
             <Icon src="https://img.icons8.com/ios/50/000000/tiktok--v1.png" />
             <Icon src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" />
             <Icon src="https://img.icons8.com/ios/50/000000/twitter--v1.png" />
             <Icon src="https://img.icons8.com/ios/50/000000/snapchat--v1.png" />
        </IconList>
        <Copyright>&copy; Foodies.KBW September 2022 </Copyright>
    </Container>
  )
}

export default Footer
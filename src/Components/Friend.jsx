import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    width: 400px;
    margin: 5px;
    padding: 5px;
    display: flex;
    align-content: flex-start;
    align-items: center;
    jusify-content: space-evenly;
    position: relative;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 8px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`
const Image = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 30px;
    border: 2px solid #FF5700;
    object-fit: cover;
    margin-left: 5px;
    margin-right: 10px;
`

const Info = styled.div`
    font-family: 'Quicksand', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const Name = styled.p`
    font-family: 'Quicksand', sans-serif;
    font-size: 25px;
`
const Location = styled.div`
    font-size: 15px;
    padding: 5px;
`
const Img = styled.img`
    height: 20px;
    width: 20px;
`
const ButtonBox = styled.div`
    display: flex;

`
const Button = styled.button`
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    width: 65px;
    padding: 5px;
    margin: 4px;
    border: none;
    border-radius: 5px;
    background-color: #FF5700;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    cursor: pointer;
`

const Friend = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Name>{item.name}</Name>
            <Location>
                {item.location}
            </Location>
            <ButtonBox>
                <Button type="add">Add</Button>
                <Button type="remove">Remove</Button>
            </ButtonBox>
        </Info>
    </Container>
  )
}

export default Friend
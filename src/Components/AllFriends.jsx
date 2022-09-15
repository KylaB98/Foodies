import React from 'react'
import Friend from './Friend'
import { friendsInfo } from './FriendData'
import styled from 'styled-components'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const AllFriends = () => {
  return (
    <Container>
        {friendsInfo.map(item=>(
            <Friend item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default AllFriends
import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {


  return (
    <div>
        <Heading m={5} >
        <Link to='/signin' >Sign In</Link>
        </Heading>
        <Heading m={5}><Link to='/signup' >Sign Up</Link></Heading>
        <Heading m={5}>
        {
            props.name? `Welcome ${props.name}`:"Login Please"
        }
        </Heading>
    </div>
  )
}

export default Home

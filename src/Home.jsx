import { Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from './authContext'

const Home = (props) => {
  const {isAuth,googleSignOut} = UserAuth()
  console.log(isAuth)

  const handleLogout = async ()=>{
    console.log("logout click")
    try{
      await googleSignOut()
    }catch(err){
      console.log(err)
    }

  }




  return (
    <div>
        <Button m={5} >
        <Link to='/signin' >Sign In</Link>
        </Button>

        <Button m={5}><Link to='/signup' >Sign Up</Link></Button>
        <Heading m={5}>
          {isAuth? `Welcome Login Successfull`:"Login Please"}
        </Heading>
        <Button m={5} style={{display:isAuth?'block':'none'}} onClick={()=>handleLogout()} >
          logout
        </Button>
    </div>
  )
}

export default Home

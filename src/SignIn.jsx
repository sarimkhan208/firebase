import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {GoogleButton} from 'react-google-button'
import { UserAuth } from './authContext';


  
  export default function SignIn() {

    const [errmessage,setErrmessage] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [disableBtn,setdisable] = useState(false)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const {googleSignIn} = UserAuth()

    
    // MANUAL LOGIN WITH FIREBASE
    const handleSubmit =  ()=>{
      if(!email || !password){
        setErrmessage("please fill all the field")
        return
      }
      setErrmessage("")
      setdisable(true)
      signInWithEmailAndPassword(auth,email,password)
      .then(async (res)=>{
        setdisable(false)
        navigate("/")
      })
      .catch((err)=>{
        setErrmessage(err.message)
        setdisable(false)
        console.log(err.message)
      })

    }



    //LOGIN WITH GOOGLE FIREBSAE

    const handleGoogleSignIn = async ()=>{
      try{
        await googleSignIn()
        navigate("/")

      }catch(err){
        console.log(err)
      }
    }



    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(e)=>setPassword(e.target.value)} />
              </FormControl>
              <Text color='red' >{errmessage}</Text>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  isLoading={disableBtn}
                  loadingText='Loading'
                  colorScheme='teal'
                  variant='outline'
                  spinnerPlacement='start'
                  onClick={()=>handleSubmit()}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>

              </Stack>
              <GoogleButton onClick={handleGoogleSignIn} />
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
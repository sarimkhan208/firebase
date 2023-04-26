import { useEffect, useState } from 'react';
import './App.css';
import MainRoutes from './MainRoutes';
import { auth } from './firebase';

function App() {
  const [username,setUsername] = useState("")
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        console.log(user)
        setUsername(user.displayName)
      }else{
        setUsername("")
      }
    })
  })
  return (
    <MainRoutes name={username} />
  );
}

export default App;

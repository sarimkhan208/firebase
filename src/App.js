import { useEffect, useState } from 'react';
import './App.css';
import MainRoutes from './MainRoutes';
import { auth } from './firebase';

function App() {
  const [username,setUsername] = useState("")
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUsername(user.displayName)
      }else{
        setUsername("")
      }
    })
  })
  return (
    <MainRoutes  />
  );
}

export default App;

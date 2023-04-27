import { createContext, useContext, useState } from "react";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext()

export const  AuthContextProvider = ({children})=>{
    const [isAuth,setIsAuth] = useState(false)

    const googleSignIn = async ()=>{
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth,provider)
        setIsAuth(true)
    }


    const googleSignOut = ()=>{
        signOut(auth).then(() => {
            console.log("Sign Out Successfull")
            setIsAuth(false)
        }).catch((error) => {
            console.log("Error Occured",error)
        });
    }


    return <AuthContext.Provider value={{googleSignIn,googleSignOut,isAuth}}>
        {children}
    </AuthContext.Provider>
}

// export const  AuthContextProvider = ({children})=>{
//     const googleSignIn = async ()=>{
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider)
//     .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     console.log("Result--",result)
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     console.log("Token--",token)
//     // The signed-in user info.
//     const user = result.user;
//     console.log("User--",user)
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//     }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage)
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//         });
//     }
//     return <AuthContext.Provider value={{googleSignIn}}>
//         {children}
//     </AuthContext.Provider>
// }


export const UserAuth = ()=>{
    return useContext(AuthContext)
}
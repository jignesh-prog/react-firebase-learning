import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signOut,signInWithRedirect} from 'firebase/auth'
import { useState, useEffect, useRef } from 'react'
export const Auth = () => {
    const [email, setEmail] = useState<any | string>('')
    const [password, setPassword] = useState<any | string>('')
    const inputRef = useRef<any>();

    console.log(auth?.currentUser?.email)

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        }
        catch (err) {
            console.error(err)
        }
    }
    const signInWithGoogle = async () => {
        try {
            await signInWithRedirect(auth, googleProvider)
        }
        catch (err) {
            console.error(err)
        }
    }
    const logOut = async () => {
        try {
            await signOut(auth)
        }
        catch (err) {
            console.error(err)
        }
    }
    return (
        <div>
            <input ref={inputRef} placeholder='email' onChange={(e) => setEmail(e.target.value)} required />
            <input ref={inputRef} placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} required />
            <button onClick={signIn}>Sign in</button>
            <button onClick={signInWithGoogle}>SignWithGoogle</button>
            <button onClick={logOut}>Logout</button>
        </div>
    )
}

export default Auth

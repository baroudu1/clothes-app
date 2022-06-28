import { signInWithGooglePopup, signInWithGoogleRedirect , createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        // console.log(response.user)
        const userDocRef = await createUserDocumentFromAuth(response.user)

        console.log(userDocRef)

    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google PopUp</button>
        </div>
    );
}
export default SignIn;
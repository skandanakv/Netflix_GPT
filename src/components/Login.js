import React from 'react'
import Header from './Header'
import { useState, useRef} from 'react'
import {checkValidData} from '../utils/Validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import{useNavigate} from 'react-router-dom'



const Login = () => {

const navigate = useNavigate();

  const [isSignedIn, setIsSignedIn]=useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

const handleButtonClick = () => {
  const name = nameRef.current?.value || "";
  const email = emailRef.current?.value || "";
  const password = passwordRef.current?.value || "";

  console.log(name);
  console.log(email);
  console.log(password);

console.log({
  name,
  email,
  password,
  isSignedIn
});

// console.log("isSignedIn =", isSignedIn);
// console.log("nameRef =", nameRef.current);
// console.log("emailRef =", emailRef.current);
// console.log("passwordRef =", passwordRef.current);

  const message = checkValidData(
    name,
    email,
    password,
    isSignedIn
  );

  setErrorMessage(message);
  console.log("AFTER VALIDATION");

  if(message) return;

  if(!isSignedIn){
      //signup ,logic

      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    updateProfile(user, {
  displayName: name
}).then(() => {
  // Profile updated!
  navigate("/browse");
}).catch((error) => {
  setErrorMessage(error.code + "-" + error.message);
});
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });


    } else{
      //signin logic
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });

    }
};

  const toggleSignInForm = () => {
    setIsSignedIn(!isSignedIn);
  }
  return (
    
<div className="relative">
  <div> <Header /></div>
 
  {/* Background Image */}
  <img
    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw"
    alt="bg"
    className="w-screen h-screen object-cover inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"
  />

  <form onSubmit ={(e)=>{e.preventDefault(); handleButtonClick();}} >
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-white align-center" onClick={handleButtonClick}>
        {isSignedIn ? "Sign In" : "Sign Up"}
        </h2>

      {!isSignedIn && (<input
        type="text"
        placeholder="Full Name"
        ref={nameRef}
        className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
      />)
      }


      <input
        type="email"
        placeholder="Email"
        ref={emailRef}
        className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
      />
      <input
        type="password"
        placeholder="Password"
        ref={passwordRef}
        className="w-full p-3 mb-6 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
      />
      <button
        type="submit"
        className="w-full py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300"
      >
        {isSignedIn ? "Sign In" : "Sign Up"}
      </button>
      <p className='mt-4 text-red-600'>{errorMessage}</p>
      <p className="mt-4 text-white">
        {isSignedIn ? "Don't have an account?" : "Already have an account?"}
        <span className="text-red-600 cursor-pointer" onClick={toggleSignInForm}>
          {isSignedIn ? " Sign up now." : " Sign in now."}
        </span>
      </p>
    </div>
  </form>

  
  
</div>
 
  )
}

export default Login
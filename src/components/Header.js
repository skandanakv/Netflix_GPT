// import React from "react";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const user = useSelector((store) => store.user);
//   const handleSignOut = () => {
    
//   }

//   return (
//     <div className="absolute top-0 left-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black via-black/70 to-transparent">

//       {/* Logo */}
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
//         alt="Netflix Logo"
//         className="w-44"
//       />

//       {/* Right Section */}
//     {user && (
//   <div className="flex items-center gap-4">
//     <img
//       alt="user icon"
//       src="https://loodibee.com/wp-content/uploads/Netflix-avatar-2.png"
//       className="w-10 h-10 rounded-md"
//     />

//     <button
//       onClick={handleSignOut}
//       className="bg-red-600 px-4 py-2 rounded-md text-white"
//     >
//       Sign Out
//     </button>
//   </div>
// )}

//     </div>
//   );
// };

// export default Header;



import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import{useNavigate} from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {
  const dispatch=useDispatch(); //always mention hooks at the top, just aft comp declaration
  const navigate = useNavigate();
    const user = useSelector((store) => store.user);
  const location = useLocation();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      
}).catch((error) => {
  console.error("Sign out failed:", error);
});
    
  }


useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid, displayName, email }= user.uid;
    dispatch(addUser({
   uid: uid,
        name: displayName,
        email: email
    }));
navigate("/browse")
  } else {
    dispatch(removeUser());
navigate("/")
  }
}); 

//unsubscribe when the component is unmounted
return () => unsubscribe();


},[])

  const isBrowsePage = location.pathname === "/browse";

  return (
    <div className="absolute top-0 left-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black via-black/70 to-transparent">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="w-44"
      />

      {isBrowsePage && user && (
        <div className="flex items-center gap-4">
          <img
            alt="user icon"
            src="https://loodibee.com/wp-content/uploads/Netflix-avatar-2.png"
            className="w-10 h-10 rounded-md"
          />

          <button
            onClick={handleSignOut}
            className="bg-red-600 px-4 py-2 rounded-md text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
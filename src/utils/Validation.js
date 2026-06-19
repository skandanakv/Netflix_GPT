
//we will use regex here - google it , copy paste 
export const checkValidData = (name, email, password, isSignedIn) => {
  const validateEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

  const validatePassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

       // Run only during Sign Up
    if (!isSignedIn) {
        const validateName = /^[A-Za-z ]{3,30}$/.test(name);

        if (!validateName) {
            return "Name should contain only letters and be 3-30 characters long";
        }
    }

  if (!validateEmail && !validatePassword) {
    return "Invalid Email and Password";
  }

  if (!validateEmail) {
    return "Invalid Email";
  }

  if (!validatePassword) {
    return "Password is invalid";
  }

 

  return null; // Everything is valid
};
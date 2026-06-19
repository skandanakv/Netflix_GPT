
//we will use regex here - google it , copy paste 
export const checkValidData = (email, password) => {
  const validateEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

  const validatePassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

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
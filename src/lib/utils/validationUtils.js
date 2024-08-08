// Check if an input is a valid email address
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Check if a password meets certain criteria
  export const isValidPassword = (password) => {
    return password.length >= 6; // Example: Password must be at least 6 characters long
  };
  
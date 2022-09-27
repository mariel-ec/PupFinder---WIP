import { useState } from "react";

const AuthModal = ({ setShowModal, setIsSignUp, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setComfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Passwords must match");
      }
      console.log("make a post request to our database");
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        X
      </div>
      <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <p>By clicking Log In, you agree to the Pupfinder terms. </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && <input
          type="passwordcheck"
          id="passwordcheck"
          name="passwordcheck"
          placeholder="confirm password"
          required={true}
          onChange={(e) => setComfirmPassword(e.target.value)}
        />}
        <input className="secondary-button" type="submit" />
        <p>{error}</p>
      </form>
      <hr />
      <h2> FIND YOUR BEST FRIEND TODAY </h2>
     
    </div>
  );
};

export default AuthModal;

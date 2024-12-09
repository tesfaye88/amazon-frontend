import React, { useState, useContext } from 'react';
import './SignUp.module.css';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import classes from "./SignUp.module.css";
import { auth } from '../../Utility/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { DataContext } from '../../DataProvider/DataProvider';
import { type } from '../../Utility/action.type';
import { ClipLoader } from 'react-spinners';

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate=useNavigate();
  const navStateData=useLocation();
  // console.log("nav state data",navStateData)

  const [loading, setLoading] = useState({

    signIn: false,
    signUp: false
  });

  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);

    if (e.target.name === "signin") {
      // Handle sign-in
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: type.SET_USER,
            user: userInfo.user
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((error) => {
          setError(error?.message || "An error occurred");
          setLoading({ ...loading, signIn: false });
        });

    } else if (e.target.name === "signup") {
      // Handle sign-up
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: type.SET_USER,
            user: userInfo.user
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((error) => {
          setError(error?.message || "An error occurred");
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
          
          {
         navStateData?.state?.message && 
         (
          <small style={{
            padding: "5px",
            textAlign: "center",
            color: "red",
            fontWeight: "bold"
          }}>

            {navStateData?.state?.message}

          </small>
        )

          }
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              type='email' 
              id='email' 
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              type='password' 
              id='password' 
            />
          </div>
          <button 
            type="button"  // Changed to type="button"
            onClick={authHandler} 
            name="signin" 
            className={classes.login_signInButton}
          >
            {loading.signIn ? (<ClipLoader color="#0b0b0b" size={15} />) : "Sign in"}
          </button>
        </form>
        <p>
          By signing in, you agree to the AMAZON FAKE CLONE conditions of use & sale. 
          Please see our privacy notice, our cookies notice, and our interest-based ads notice.
        </p>
        <button 
          type="button"  // Changed to type="button" 
          onClick={authHandler} 
          name="signup" 
          className={classes.login_registerButton}
        >
          {loading.signUp ? (<ClipLoader color="#0b0b0b" size={15} />) : "Create Your Amazon Account"}
        </button>
        {error && <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>}
      </div>
    </section>
  );
}

export default Auth;

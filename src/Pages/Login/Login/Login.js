import React, { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Form } from "react-bootstrap";
import Social from "../Social/Social";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);

    // const { data } = await axios.post("http://localhost:7000/login", { email });
    // console.log(data);
    // localStorage.setItem("accessToken", data.accessToken);
    // navigate(from, { replace: true });
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else {
      toast("Please enter your email address");
    }
  };

  return (
    <div style={{ backgroundColor: "#a8dadc", padding: "1.3rem" }} className="login-form rounded-3 mx-auto my-5">
      <h4 className="text-center mb-4">Please Login</h4>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" name="email" placeholder="Email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Button style={{ backgroundColor: "orangeRed" }} className="w-100 mb-1" variant="danger" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p className="my-2">
        New to BIKE TOWN?
        <Link to="/register" className="text-danger text-decoration-none pe-auto ms-1" onClick={navigateRegister}>
          Please SignUp
        </Link>
      </p>
      <p>
        Forget Password?
        <button
          style={{ backgroundColor: "#a8dadc" }}
          className="btn-link text-primary text-decoration-none border-0 pe-auto"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>
      <Social></Social>
      <ToastContainer />
    </div>
  );
};

export default Login;

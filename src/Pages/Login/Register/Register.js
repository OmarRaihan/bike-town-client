import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import Social from "../Social/Social";
import "./Register.css";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };

  return (
    <div style={{ backgroundColor: "#a8dadc", padding: "1.3rem" }} className="register-form rounded-3 mx-auto my-5">
      <h4 className="text-center mb-4">Please SignUp</h4>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" name="name" placeholder="Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" placeholder="Email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            className={agree ? "text-primary" : "text-danger"}
            label="Accept Terms and Conditions"
          />
        </Form.Group>

        <Button style={{ backgroundColor: "orangeRed" }} disabled={!agree} className="w-100 border-0" type="submit" value="Register">
          Sign Up
        </Button>
      </Form>
      <p className="mt-2">
        Already have an account?
        <Link to="/login" className="text-danger text-decoration-none pe-auto ms-1" onClick={navigateLogin}>
          Please Login
        </Link>
      </p>
      <Social></Social>
    </div>
  );
};

export default Register;

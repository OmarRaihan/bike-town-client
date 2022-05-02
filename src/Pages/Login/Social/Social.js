import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import google from "../../../images/social/google-logo.png";
import github from "../../../images/social/Github-logo.png";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  if (loading || loadingGithub) {
    return <Loading></Loading>;
  }

  if (error || errorGithub) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {errorGithub?.message}
      </p>
    );
  }

  if (user || userGithub) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "0.5px" }} className="bg-secondary w-50"></div>
        <p className="px-3 mt-3">OR</p>
        <div style={{ height: "0.5px" }} className="bg-secondary w-50"></div>
      </div>
      {errorElement}

      <div className="text-center my-2">
        <button onClick={() => signInWithGoogle()} className="btn btn-primary fw-bold rounded-pill w-100">
          <img className="me-1" style={{ width: "28px" }} src={google} alt="" />
          Google
        </button>
      </div>

      <div className="text-center mb-2">
        <button onClick={() => signInWithGithub()} className="btn btn-light border fw-bold w-100 rounded-pill px-4">
          <img className="me-1" style={{ width: "26px" }} src={github} alt="" />
          Github
        </button>
      </div>
    </div>
  );
};

export default Social;

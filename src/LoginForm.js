import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"

/** Signup Form
 *
 * Props:
 *       - handleLogin: Func def passed from app.js
 *
 * State:
 *       - FormData: {username, password, firstName, lastName, email}
 *       - ApiError: {isError, errorMessage}
 *
 * App -> LoginForm
 *
 */

function LoginForm({ handleLogin }) {
  /** Handles keystrokes in searchbar and updates formData */
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [apiError, setApiError] = useState({
    isError: false,
    errorMessage: "",
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData((currData) => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  /** Navigates to signup page if successfully logged in, else shows error msg*/
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await handleLogin(formData);
      navigate("/");
    } catch (err) {
      setApiError({
        isError: true,
        errorMessage: err,
      });
    }
  }

  // add login function

  return (
    <div className="LoginForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h2 className="LoginForm-Message">Login</h2>

        <div className="card">
          <div className="card-body">

            <form className="LoginForm-Form" onSubmit={handleSubmit}>

                <div className="col-8">
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    name="username"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    value={formData.username}
                    aria-label="username"
                    required
                  />
                </div>
                <div className="col-8">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    value={formData.password}
                    aria-label="password"
                    required
                  />
                </div>
                <div className="col-auto">
                  <button className="btn  btn-lg btn-primary">
                    Login
                  </button>
                </div>


            </form>
          </div>
        </div>
      </div>
      {apiError.isError && <p>{apiError.errorMessage}</p>}
    </div >
  );
}

export default LoginForm;

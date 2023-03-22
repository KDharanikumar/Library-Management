import { useNavigate } from "react-router-dom";

function SignIn() {
  let navigate = useNavigate();
  let username = "admin@gmail.com";
  let pass = "welcome";
  let SignIn = () => {
    if (username === "admin@gmail.com" && pass === "welcome") {
      navigate("/portal/dashboard");
    } else {
      alert("Worng data");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <h1 className="my-5 text-center">Login</h1>
          <div className="col">
            <form className="sf-login-form">
              <label className="form-label">E-Mail</label>
              <input type="email" className="form-control mb-3 w-25" id="exampleInputEmail1" />
              <label className="form-label">Password</label>
              <input type="password" className="form-control mb-3 w-25" id="exampleInputPassword1" />
              <button onClick={SignIn} type="submit" className="sf-button">
                SignIn
              </button>
            </form>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;

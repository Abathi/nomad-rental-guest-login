import Button from "./Button";
import key from "../assets/images/key.png";
import login from "../assets/images/login.jpg";

const Login = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-4 pr-0">
          <div className="mx-5">
            <img src={key} alt="" className="mt-5"></img>
            <h2 className="main-title mb-3">Hi there!</h2>
            <div className="main-desc mb-3">
              Sign in to manage your listings and booking requests on Normal
              Rental
            </div>
            <a href="./" className="d-block small-title color-2 mb-3">
              {">"} Learn more about our premium subscription
            </a>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <a
                  href="./"
                  className="float-right d-block small-title color-2"
                >
                  Forgot your password?
                </a>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <Button
                classes={"btn btn-primary w-100 mb-2"}
                text={"Sign in"}
                style={{ background: "#786AFF" }}
              />
            </form>
            <div
              className="w-divider w-100 my-3"
              style={{
                height: "0.5px",
                backgroundColor: "#000",
                opacity: "0.05",
              }}
            ></div>
            <div style={{ textAlign: "center" }}>
              <span>Don't have an account?</span>
              <a href="./" className="small-title color-2">
                Sign up now
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 pl-0">
          <img src={login} alt="" className="w-100"></img>
        </div>
      </div>
    </div>
  );
};

export default Login;

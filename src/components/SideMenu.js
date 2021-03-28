import user from "../assets/images/user.png";
import faq from "../assets/images/faq.png";
import contact from "../assets/images/contact.png";
import account from "../assets/images/account.png";
import refer from "../assets/images/refer.png";
import toggle from "../assets/images/toggle.png";
import booking from "../assets/images/booking.png";

const SideMenu = () => {
  return (
    <div className="col-12 col-md-3 px-0 px-md-2">
      <div className="row mx-0 mb-3 justify-content-center justify-content-md-start">
        <div className="col-4 col-md-3 px-0 profile-img position-relative">
          <img src={user} alt="" className="w-100"></img>
          <span className="position-absolute small-title text-white">JD</span>
        </div>
      </div>
      <div className="main-title mb-1 text-center text-md-left">John Doe</div>
      <div
        className="sec-title text-center text-md-left"
        style={{ opacity: "0.7" }}
      >
        Premium Nomad
      </div>
      <nav className="navbar navbar-expand-lg">
        <button
          className="btn btn-theme bg-color-1 text-white w-100 navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#sideMenuExpand"
          aria-controls="sideMenuExpand"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <span className="ml-2">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="sideMenuExpand">
          <div className="side-menu-options p-2 my-4 active">
            <div className="row mx-0">
              <div className="col-1 px-0">
                <img src={booking} alt="" className="w-100 mr-2"></img>
              </div>
              <div className="col-11">
                <a href="./booking" style={{ color: "white" }}>
                  Booking
                </a>
              </div>
            </div>
          </div>
          <div className="side-menu-options p-2 mb-2">
            <div className="row mx-0">
              <div className="col-1 px-0">
                <img src={refer} alt="" className="w-100 mr-2"></img>
              </div>
              <div className="col-11">Refer and Earn</div>
            </div>
          </div>
          <div className="side-menu-options p-2 mb-2">
            <div className="row mx-0">
              <div className="col-1 px-0">
                <img src={account} alt="" className="w-100 mr-2"></img>
              </div>
              <div className="col-11">Account Settings</div>
            </div>
          </div>
          <div
            className="small-title-light mt-4 mb-2"
            style={{ opacity: "0.7" }}
          >
            Support
          </div>
          <div className="side-menu-options p-2 mb-2">
            <div className="row mx-0">
              <div className="col-1 px-0">
                <img src={contact} alt="" className="w-100 mr-2"></img>
              </div>
              <div className="col-11">Contact us</div>
            </div>
          </div>
          <div className="side-menu-options p-2 mb-5">
            <div className="row mx-0">
              <div className="col-1 px-0">
                <img src={faq} alt="" className="w-100 mr-2"></img>
              </div>
              <div className="col-11">FAQ</div>
            </div>
          </div>
          <div className="my-md-4"></div>
          <div className="side-menu-options p-2 mt-t">
            <div className="row mx-0">
              <div className="col-1 px-0">
                <img src={toggle} alt="" className="w-100 mr-2"></img>
              </div>
              <div className="col-11">
                <a href="./" style={{ color: "#95989A" }}>
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideMenu;

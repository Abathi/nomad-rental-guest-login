import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import table from "../assets/images/table.jpg";
import clock from "../assets/images/clock.png";
import check from "../assets/images/check.png";
import checkCircle from "../assets/images/checkCircle.png";
import star from "../assets/images/star.png";
import receipt from "../assets/images/receipt.png";
import send from "../assets/images/send.png";

const Booking = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid py3 py-md-5">
        <div className="row mx-0">
          <SideMenu />
          <div className="col-12 col-md-9 px-0 px-md-2">
            <h1 className="large-title mb-3 mb-md-4">Bookings</h1>
            <h2 className="main-title mb-3">Your current upcoming stays</h2>
            <div className="main-desc mb-3">
              Please update with the property if your travel plans should change
              or if you wish to make any changes to your stay.
            </div>
            <a href="./" className="d-block small-title color-2 mb-3">
              {">"} Learn more about our premium subscription
            </a>

            <div className="card">
              <div className="row mx-0">
                <div
                  className="col-12 col-md-5 px-0"
                  style={{ overview: "hidden" }}
                >
                  <img src={table} alt="" className="w-100"></img>
                </div>
                <div className="col-12 col-md-7 px-0">
                  <div className="position-relative bg-white py-3 h-100">
                    <h3 className="main-title mb-3 px-3">The Green View</h3>
                    <div className="row mx-0 mb-1 px-3">
                      <div className="col-2 col-md-1 px-0 text-center">
                        <img src={checkCircle} alt="" className="w-50"></img>
                      </div>
                      <div className="col-10 col-md-11">
                        Booking request received
                      </div>
                    </div>
                    <div className="row mx-0 mb-3 px-3">
                      <div className="col-2 col-md-1 px-0 text-center">
                        <img src={clock} alt="" className="w-50"></img>
                      </div>
                      <div className="col-10 col-md-11 color-1">
                        Awaiting confirmation from Hotel
                      </div>
                    </div>
                    <div
                      className="w-divider w-100 my-3 px-3"
                      style={{
                        height: "0.5px",
                        backgroundColor: "#000",
                        opacity: "0.05",
                      }}
                    ></div>
                    <h3 className="main-title mb-3 px-3">Superior Premium</h3>
                    <div className="row mx-0 mb-3 px-3">
                      <div className="col-6 row mx-0">
                        <div className="col-2 px-0 text-center">
                          <img src={check} alt=""></img>
                        </div>
                        <div className="col-10">
                          <div
                            className="small-title-light"
                            style={{ opacity: "0.5" }}
                          >
                            Check-in:
                          </div>
                          <div className="small-title">July 9th, 2018</div>
                        </div>
                      </div>
                      <div className="col-6 row mx-0">
                        <div className="col-2 px-0 text-center">
                          <img src={receipt} alt=""></img>
                        </div>
                        <div className="col-10">
                          <div
                            className="small-title-light"
                            style={{ opacity: "0.5" }}
                          >
                            Reference:
                          </div>
                          <div className="small-title">#UC311K</div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer-block"></div>
                    <div className="position-absolute card-footer">
                      <div className="bg-gray p-3" style={{ color: "#42B72A" }}>
                        <img src={star} alt=""></img>
                        Rate your stay
                      </div>
                      <div className="bg-gray p-3">
                        <img src={send} alt=""></img>
                        Email the property
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

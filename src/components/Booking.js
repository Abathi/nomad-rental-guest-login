import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import table from '../assets/images/table.jpg';
import clock from '../assets/images/clock.png';
import check from '../assets/images/check.png';
import checkCircle from '../assets/images/checkCircle.png';
import star from '../assets/images/star.png';
import receipt from '../assets/images/receipt.png';
import send from '../assets/images/send.png';

const Booking = () => {
    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-3"><SideMenu /></div>
                <div className="col-9">
                    <h2>Bookings</h2>
                    <div>
                        Your current upcoming stays
                    </div>
                    <div>
                        Please update with the property if your travel plans should change or if you wish to make any changes to your stay.
                    </div>
                    <div className="blue-link">{'>'} Learn more about our premium subscription</div>
                    <div className="row">
                        <div className="col-5">
                            <img src={table} alt="" className="w-100"></img>
                        </div>
                        <div className="col-7">
                            <h3>The Green View</h3>
                            <div><img src={checkCircle} alt=""></img>Booking request received</div>
                            <div style={{ color: '#7C60FF' }}><img src={clock} alt=""></img>Awaiting confirmation from Hotel</div>
                            <h3>Superior Premium</h3>
                            <div>
                                <span style={{ float: 'left' }}><img src={check} alt=""></img> Check-in:</span>
                                <span style={{ float: 'right' }}><img src={receipt} alt=""></img>Reference</span>
                            </div>
                            <div>
                                <span style={{ float: 'left' }}>July 9th, 2018</span>
                                <span style={{ float: 'right' }}>#UC311K</span>
                            </div>
                            <div style={{ color: '#42B72A' }}><img src={star} alt=""></img>Rate your stay</div>
                            <div><img src={send} alt=""></img>Email the property</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking

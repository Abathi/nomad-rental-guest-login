import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import userEdit from '../assets/images/userEdit.png';

const Account = () => {
    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-3"><SideMenu /></div>
                <div className="col-9">
                    <h2>Account</h2>
                    <div>
                        Review and update your account details
                    </div>
                    <div>
                        Please make sure these details are up to date as they'll be used for your bookings,
                        and communications with the hotels.
                    </div>
                    <div className="blue-link">{'>'} Learn more about our premium subscription</div>
                    <div className="card" style={{ width: '36rem' }}>
                        <div className="row">
                            <div className="col-2">
                                <img src={userEdit} alt=""></img>
                            </div>
                            <div className="col-10">
                                <div>John Doe</div>
                                Please make sure these details are up to date as they'll be used for your bookings,
                                and communications with the hotels.
                            </div>
                        </div>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="name">Your Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="John Doe" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="email">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="john.doe@domain.tld" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label for="country">Country</label>
                                </div>
                                <div className="form-group col-md-6">
                                    <select id="country" className="form-control">
                                        <option selected>Thailand</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="sr-only" for="mobile">Username</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">+66</div>
                                        </div>
                                        <input type="text" className="form-control" id="mobile" placeholder="(0) 053 555 555" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="current-password">Current Password</label>
                                    <span className="float-right blue-link">Forgot?</span>
                                    <input type="password" className="form-control" id="current-password" placeholder="******" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="new-password">New Password</label>
                                    <input type="password" className="form-control" id="new-password" placeholder="New password" />
                                </div>
                                <div className="form-group col-md-4">
                                </div>
                                <div className="form-group col-md-8">
                                    <span>Your data will be </span>
                                    <span style={{ color: '#168EEA' }}>handled with care</span>
                                    <button type="submit" className="btn btn-primary float-right" style={{ background: '#786AFF' }}>Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account

import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <header>
            <div className="row mb-3 mt-5">
                <div className="col-12 col-md-2 mb-3 mb-md-0">
                    <img src={logo} alt="" className="w-100"></img>
                </div>
                <div className="col-0 col-md-7"></div>
                <div className="dropdown">
                    <button className="p-2" type="button" id="city" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Choose a city
                        <span className="btn btn-light ml-2"><i className="fas fa-bars"></i></span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="city">
                        <a className="dropdown-item" href="">Malaysia</a>
                        <a className="dropdown-item" href="">China</a>
                        <a className="dropdown-item" href="">Singapore</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

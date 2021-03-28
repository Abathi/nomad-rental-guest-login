import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <header>
            <div className="row mb-3 mt-5">
                <div className="col-12 col-md-2 mb-3 mb-md-0">
                    <img src={logo} alt="" className="w-100"></img>
                </div>
                <div className="col-0 col-md-7"></div>
                <div className="col-12 col-md-3 mb-3 mb-md-0">
                    Choose a city
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false"></button>
                        <ul className="dropdown-menu dropdown-menu-lg-end">
                            <li><button className="dropdown-item" type="button">Action</button></li>
                            <li><button className="dropdown-item" type="button">Another action</button></li>
                            <li><button className="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

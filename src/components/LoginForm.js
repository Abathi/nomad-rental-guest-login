import Button from './Button'
import key from '../assets/images/key.png';
import login from '../assets/images/login.jpg';

const LoginForm = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-4 pr-0">
                    <img src={key} alt="" className="mt-5"></img>
                    <div>Hi there!</div>
                    <div>Sign in to manage your listings and booking requests on Normal Rental</div>
                    <div className="blue-link">{'>'} Learn more about our premium subscription</div>
                    <div style={{ background: '#f5f6f8' }}>
                        <form>
                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <span className="float-right blue-link">Forgot your password?</span>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <Button
                                classes={'btn btn-primary w-100'}
                                text={'Sign in'}
                            />
                        </form>
                        <div className="line"></div>
                        <div style={{ textAlign: 'center' }}>
                            <span>Don't have an account? </span>
                            <span className="blue-link">Sign up now</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-8 pl-0">
                    <img src={login} alt="" className="w-100"></img>
                </div>
            </div>
        </div>
    )
}

export default LoginForm

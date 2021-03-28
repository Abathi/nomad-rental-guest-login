import Button from './Button'

const LoginForm = () => {
    return (
        <div style={{ background: '#f5f6f8' }}>
            <form>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <span className="float-right" style={{ color: '#4aa8f1', cursor: 'pointer' }}>Forgot your password?</span>
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
                <span style={{ color: '#4aa8f1', cursor: 'pointer' }}>Sign up now</span>
            </div>
        </div >
    )
}

export default LoginForm

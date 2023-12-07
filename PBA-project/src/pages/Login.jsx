import '../assets/styles/account.scss';


const Login = () => {
    return (
        <div className="signup">
            <div className="column column1">
                <div className="content text-to-hide">
                    <h2>A search function where one can view historical data of their own AirPlates on the AirMap. This history search can only be accessed by using a login.</h2>
                </div>
                <div className="globe-container">
                    <div className="globe">
                        <img src="images/bigglobe.png" alt="Globe" />
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="create">Login</div>
                <div className="buttons">
                    <a href="#" className="button">
                        <img src="images/google.png" alt="Google Logo" className="button-logo" />
                        Sign up with Google
                    </a>
                    <a href="#" className="button">
                        <img src="images/facebook.png" alt="Facebook Logo" className="button-logo" />
                        Sign up with Facebook
                    </a>
                </div>
                <div className="or">-OR-</div>
                <div className="input-column">
                    <input type="text" placeholder="Email Address" className="underline-input" />
                    <input type="text" placeholder="Password" className="underline-input" />
                </div>
                <div className="test">
                    <a href="#" className="newacc">Login</a>
                </div>
                <div className="container">
                    <div className="account">Don't have an account?</div>
                    <div className="login">
                        <a href='/'>Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

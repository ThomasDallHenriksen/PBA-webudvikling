import '../assets/styles/signup.scss';

const Signup = () => {
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
                <div className="create">Create Account</div>
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
                    <input type="text" placeholder="Full Name" className="underline-input" />
                    <input type="text" placeholder="Email Address" className="underline-input" />
                    <input type="text" placeholder="Password" className="underline-input" />
                </div>
                <div className="test">
                    <a href="#" className="newacc">Create Account</a>
                </div>
                <div className="container">
                    <div className="account">Already have an account?</div>
                    <div className="login">
                        <a href='/'>Log in</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;

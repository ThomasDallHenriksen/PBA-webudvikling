import '../assets/styles/signup.scss';


const Signup = () => {
    return (
        <div className="signup">
            <div className="signup-info">
                <p>A search function where one can view historical data of their own AirPlates on the AirMap. This history search can only be accessed by using a login </p>
                <img src="/images/signUpPage/globe.png" alt="" />
            </div>
            <div className="signup-form">
                <h3>Create Account</h3>
                <div className="socials">
                    <button type='button'>Sign up with Google</button>
                    <button type='button'>Sign up with Facebook</button>
                </div>
                <div className="or">
                    <p>-OR-</p>
                </div>
                <div className="form">
                    <input type="form" />
                    <input type="form" />
                    <input type="form" />
                </div>
            </div>
        </div>
    );
}

export default Signup;
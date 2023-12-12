import '../assets/styles/account.scss';

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
                <h1 className='headline'>Create account</h1>
                <div className="input-column">
                    <input type="text" placeholder="First name" className="underline-input" />
                    <input type="text" placeholder="Last name" className="underline-input" />
                    <input type="text" placeholder="Date of birth" className="underline-input" />
                    <input type="text" placeholder="Gender" className="underline-input" />
                    <input type="text" placeholder="Password" className="underline-input" />
                    <input type="text" placeholder="E-mail adress" className="underline-input" />
                    <input type="text" placeholder="Phone number" className="underline-input" />
                </div>
                <div className="test">
                    <a href="#" className="newacc">Create Account</a>
                </div>
                <div className="container">
                    <div className="account">Already have an account?</div>
                    <div className="login">
                        <a href='/login'>Log in</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;

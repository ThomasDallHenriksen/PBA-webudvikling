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
                <h1 className="headline">Login</h1>
                <div className="input-column">
                    <input type="text" placeholder="E-mail Address" className="underline-input" />
                    <input type="text" placeholder="Password" className="underline-input" />
                </div>
                <div className="forgotpsw"><a href='/'>Glemt kodeord?</a></div>
                <div className="test">
                    <a href="#" className="newacc">Login</a>
                </div>
                <div className="container">
                    <div className="account">Don't have an account?</div>
                    <div className="login">
                        <a href='/signup'>Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

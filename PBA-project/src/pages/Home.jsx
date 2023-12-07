import '../assets/global/breakpoints.scss';
import '../assets/main/font.scss';
import '../assets/styles/home.scss';


const Home = () => {
    return (
        <div className="home">
            <div className="home-sectionOne">
                <div className="sectionOne-info">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and <br></br>
                    typesetting industry. Lorem Ipsum has been the <br></br>
                    industry's standard dummy text ever since the 1500s.</p>
                    <br></br>

                    <div className="sectionOne-info__airmap">
                    <a id='sectionButton' href='/AirMap'>Learn more</a>
                    <a href='/AirMap'>Go To Airmap</a>
                    </div>

                    <div className="sectionOne-info__50k">
                        <h2>50K</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and <br></br> 
                        typesetting industry. Lorem Ipsum has been the <br></br>
                        industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>

                <div className="sectionOne-pic">
                    <div className="sectionOne-pic__left">
                        <img src='../public/images/frontpage/airplate.png'></img>
                    </div>

                    <div className="sectionOne-pic__right">
                    <img src='../public/images/frontpage/frontpage2.png'></img>
                    <img className='underDrone' src='../public/images/frontpage/frontpage1.png'></img>
                    </div>
                </div>
            </div>

            <div className="home-sectionTwo">
                <h1>Simple, Independent & Compatible with Any Drone</h1>

                <div className="home-sectionTwo__data">
                <img src='../public/images/frontpage/controller.png'></img>
                <p>Easy Install – Compatible with any drone.
                <br />
                <br /> Network and Broadcast Remote ID – An all-in-one drone remote identification module.
                <br />
                <br /> 5G – Using 5G to ensure stable and reliable connection
                <br />
                <br /> Independent – GNSS reciever and battery to be standalone and fully independent.
                <br />
                <br /> MAVLink Integration – Pixhawk flight controllers integration.
                </p>
                </div>
            </div>

            <div className="home-sectionThree">
                <p>Real Time Interface</p>
                <a id='airmapButton' href='/AirMap'>AirMap</a>
                
            </div>

            <div className="home-sectionFour">
                <div className="sectionFour-internet">
                    <div className="sectionFour-internet__left">
                        <h3>Internet</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        <br />industry. Lorem Ipsum has been the industry's standard dummy
                        <br />text ever since the 1500s,when an unknown printer took a 
                        <br /> galley of type and scrambled it to make a type specimen
                        <br /> book. It has survived not only five centuries, but also 
                        <br />the leap into electronic typesetting, remaining essentially
                        <br />unchanged. It was popularised in the 1960s with the release
                        <br />of Letraset sheets containing Lorem Ipsum passages, and more 
                        <br />recently with desktop publishing software like Aldus PageMaker
                        <br />including versions of Lorem Ipsum.</p>
                    </div>

                    <div className="sectionFour-internet__mid">
                    <img src='../public/images/frontpage/signal.png'></img>
                    </div>

                    <div className="sectionFour-internet__right">
                    <img src='../public/images/frontpage/phone.png'></img>
                    </div>
                </div>

                <div className="sectionFour-bluetooth">
                    <div className="sectionFour-bluetooth__left">
                        <img src='../public/images/frontpage/phone2.png'></img>
                    </div>

                    <div className="sectionFour-bluetooth__mid">
                        <img src='../public/images/frontpage/bluetooth.png'></img>
                    </div>

                    <div className="sectionFour-bluetooth__right">
                    <h3>Bluetooth</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        <br />industry. Lorem Ipsum has been the industry's standard dummy
                        <br />text ever since the 1500s,when an unknown printer took a 
                        <br /> galley of type and scrambled it to make a type specimen
                        <br /> book. It has survived not only five centuries, but also 
                        <br />the leap into electronic typesetting, remaining essentially
                        <br />unchanged. It was popularised in the 1960s with the release
                        <br />of Letraset sheets containing Lorem Ipsum passages, and more 
                        <br />recently with desktop publishing software like Aldus PageMaker
                        <br />including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div className="sectionFour-flags">
                    <img src='../public/images/frontpage/EU.png'></img>
                    <img src='../public/images/frontpage/usa.png'></img>
                </div>
            </div>

            <div className="home-sectionFive">
                <form className='sectionFive-form'>
                    <h3>Newsletter Module</h3>
                    <p>Sign up to our newslatter to receive 
                    <br />the lastest updates</p>
                        <input
                            type='text'
                            className='sectionFive-form__email'
                            placeholder='Your E-mail address...'
                            name='email'
                            required>
                        </input>

                        <input
                            type='submit'
                            className='sectionFive-form__submit'
                            value='Signup'>
                        </input>
                </form>
                <div className="sectionFive-border"></div>
            </div>

            <div className="home-sectionSix">
                <h2>Trusted by</h2>
                <img src='../public/images/frontpage/trusted.png'></img>
                <img src='../public/images/frontpage/trusted.png'></img>
            </div>
        </div>
    );
}

export default Home;
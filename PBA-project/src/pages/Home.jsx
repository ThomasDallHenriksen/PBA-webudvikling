import React, { useState } from 'react';
import axios from 'axios';
import '../assets/global/breakpoints.scss';
import '../assets/main/font.scss';
import '../assets/styles/home.scss';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';


const Home = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);


    const handleNewsletter = async (e) => {
        e.preventDefault();

        // Email validation using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setIsValidEmail(false);

            Toastify({
                text: 'Invalid email',
                duration: 3000,
                backgroundColor: 'var(--color-red)',
                gravity: 'top',
                position: 'center',
            }).showToast();

            return;
        }

        try {
            const response = await axios.post('https://kienzhe.dk/updates/newsletter.php', {
                email: email,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data);

            setEmail('');
            setIsValidEmail(true);

            Toastify({
                text: 'Congratulation! You are now signed up to our newsletter',
                duration: 4000,
                backgroundColor: 'var(--color-green)',
                gravity: 'top',
                position: 'center',
            }).showToast();
        } catch (error) {
            console.error('error:', error);

            Toastify({
                text: 'Email not sent. Please try again later.',
                duration: 3000,
                backgroundColor: 'var(--color-skyblue)',
                gravity: 'top',
                position: 'center',
            }).showToast();
        }
    };

    return (
        <div className="home">
            <div className="home-sectionOne">
                <div className="sectionOne-info">
                    <h2>Welcome to AirPlate</h2>
                    <p>At AirPlate we make it possible to combine any drone with our license plate AirPlate. In 2024 it will be a legal requirement that drone operators have a so-called 'plate' for their drone so that it is identifiable.</p>

                    <div className="sectionOne-info__airmap">
                        <a id='sectionButton' href='/Company'>Learn more</a>
                        <a href='/Product'>Product</a>
                    </div>

                    <div className="sectionOne-info__50k">
                        <h2>50K</h2>
                        <p>With AirPlate you are covered under the new<br />
                            legislation with guarantee and can fly safely<br />
                            with your drone when you want going forward.</p>
                    </div>
                </div>

                <div className="sectionOne-pic">
                    <div className="sectionOne-pic__left">
                        <img src='images/frontpage/airplate.png'></img>
                    </div>

                    <div className="sectionOne-pic__right">
                        <img src='images/frontpage/frontpage2.png'></img>
                        <img className='underDrone' src='images/frontpage/frontpage1.png'></img>
                    </div>
                </div>
            </div>

            <div className="home-sectionTwo">
                <h1>Simple, Independent & Compatible with Any Drone</h1>

                <div className="home-sectionTwo__data">
                    <img src='images/frontpage/controller.png'></img>
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
                <a id='airmapButton' href='/Addairplate'>Add AirPlate</a>

            </div>

            <div className="home-sectionFour">
                <div className="sectionFour-internet">
                    <div className="sectionFour-internet__left">
                        <h3>Internet</h3>
                        <p>The internet is a global system of interconnected computer networks that uses internet protocol suite (TCP/IP) to communicate between networks and devices. It is a network of networks that consists of private, public, academic, business, and government networks. The internet carries a vast range of information resources and services, such as the inter-linked hypertext documents of the World Wide Web (WWW) and the infrastructure to support email. The origins of the internet date back to research commissioned by the federal government of the United States in the 1960s to build robust, fault-tolerant communication with computer networks. Today, the internet has become a worldwide broadcast medium for all kinds of data communication from simple text to complex graphics, video and computing applications. The internet has enabled entirely new forms of social interaction, activities, and organizing, thanks to its basic features such as widespread usability and access.</p>
                    </div>

                    <div className="sectionFour-internet__mid">
                        <img src='images/frontpage/signal.png'></img>
                    </div>

                    <div className="sectionFour-internet__right">
                        <img src='images/frontpage/phone.png'></img>
                    </div>
                </div>

                <div className="sectionFour-bluetooth">
                    <div className="sectionFour-bluetooth__left">
                        <img src='images/frontpage/phone2.png'></img>
                    </div>

                    <div className="sectionFour-bluetooth__mid">
                        <img src='images/frontpage/bluetooth.png'></img>
                    </div>

                    <div className="sectionFour-bluetooth__right">
                        <h3>Bluetooth</h3>
                        <p>Bluetooth is a wireless technology standard used for exchanging data between fixed and mobile devices over short distances. It operates at 2.4 to 2.485 GHz and uses frequency-hopping spread spectrum technology. Bluetooth was originally conceived as a wireless alternative to RS-232 data cables by Jaap Haartsen and Sven Mattisson in 1994. The first Bluetooth product came out in 1999 produced by Ericsson. Bluetooth is managed by the Bluetooth Special Interest Group founded in 1998 by Ericsson, IBM, Intel, Nokia and Toshiba. Bluetooth protocols simplify the discovery and setup of services between devices. Bluetooth Low Energy, marketed as Bluetooth Smart, was introduced in 2011. It is targeted at applications in healthcare, fitness, beacons, security, and home entertainment. Bluetooth mesh networking was introduced in July 2017 and enables many-to-many communication over Bluetooth Low Energy. As of 2018, over 8 billion Bluetooth products have been shipped worldwide.</p>
                    </div>
                </div>

                <div className="sectionFour-flags">
                    <img src='images/frontpage/EU.png'></img>
                    <img src='images/frontpage/usa.png'></img>
                </div>
            </div>

            <div className="home-sectionFive">
                <form className="sectionFive-form" onSubmit={handleNewsletter}>
                    <h3>Newsletter Module</h3>
                    <p>Sign up to our newsletter to receive the latest updates</p>
                    <input
                        type="text"
                        className={`sectionFive-form__email ${isValidEmail ? '' : 'invalid-email'
                            }`}
                        placeholder="Your E-mail address..."
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setIsValidEmail(true); // Reset validation when user types
                        }}
                        required
                    ></input>

                    <input
                        type="submit"
                        className="sectionFive-form__submit"
                        value="Signup"
                    ></input>
                </form>
                <div className="sectionFive-border"></div>
            </div>

            <div className="home-sectionSix">
                <h2>Trusted by</h2>
                <img src='images/frontpage/trusted.png'></img>
                <img src='images/frontpage/trusted.png'></img>
            </div>
        </div>
    );
}

export default Home;
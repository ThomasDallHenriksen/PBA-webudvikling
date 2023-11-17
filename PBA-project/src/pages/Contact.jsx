import React, { useState } from 'react';
import '../assets/global/breakpoints.scss'
import '../assets/main/font.scss'
import '../assets/styles/contact.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message:'',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('email er sendt');
            } else {
                console.log('fejl ved afsendelse af email.');
            }
        } catch (error) {
            console.log('fejl ved afsendelse af email.', error);
        }
    };

    return (
        <div className="contact">
            <div className="contact-info">
                <div className='contact-info__box'>

                    <div className="contact-info__left">
                        <div className="contact-airplate">
                            <h2>Contact Us</h2>
                            <p>We are here to help you.</p>

                            <div className="phone">
                                <div className="phone__icon"></div>
                                <div className="phone__info">
                                    <h4>P h o n e</h4>
                                    <p>+45 21 34 4322</p>
                                </div>
                            </div>

                            <div className="mail">
                                <div className="mail__icon"></div>
                                <div className="mail__info">
                                    <h4>E m a i l</h4>
                                    <p>airplate@gmail.com</p>
                                </div>
                            </div>

                            <div className="location">
                                <div className="location__icon"></div>
                                <div className="location__info">
                                    <h4>L o c a t i o n</h4>
                                    <p>Seebladsgade 2,5000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-info__right">
                        
                        <form className='contact-form' onSubmit={handleSubmit}>
                            <h3>Let's talk</h3>
                            <p>Feel free to drop a line below</p>
                            <input
                                type='text'
                                className='contact-form__name'
                                placeholder='Your Name'
                                name='name'
                                required>
                            </input>

                            <input
                                type='text'
                                className='contact-form__email'
                                placeholder='Your E-mail'
                                name='email'
                                required>
                            </input>

                            <input
                                type='tel'
                                className='contact-form__phone'
                                placeholder='Phone Number'
                                name='phone'>
                            </input>

                            <textarea
                                name='message'
                                className='contact-form__message'
                                placeholder='Message'
                                required>
                            </textarea>

                            <input
                                type='submit'
                                className='contact-form__submit'
                                value='Submit'>
                            </input>
                        </form>
                    </div>
                </div>
                
            </div>

            <div className="contact-personal">
                <h3>Other ways to get in touch</h3>
                <div className="contact-personal__founders">
                    <div className="contact-personal__director">
                        <img src='../public/images/contactPage/director.png'></img>
                        <h4>August Mader</h4>
                        <p>Administrative Director</p>
                        <p>august.mader@airplate.dk</p>
                        <p>+45 31549731</p>
                    
                    </div>
                <div className="contact-personal__ceo">
                        <img src='../public/images/contactPage/founder.png'></img>
                        <h4>Troels Andreasen</h4>
                        <p>CTO, Co-founder</p>
                        <p>troels.andreasen@airplate.dk</p>
                        <p>+45 22910043</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
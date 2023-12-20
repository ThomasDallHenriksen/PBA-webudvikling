import React, { useState, useEffect } from 'react';
import '../assets/global/breakpoints.scss';
import '../assets/main/font.scss';
import '../assets/styles/profile.scss';


const Profile = () => {
    const [openAccordions, setOpenAccordions] = useState([]);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUserData = sessionStorage.getItem('user');
        if(storedUserData) {
            setUserData(JSON.parse(storedUserData));
            setOpenAccordions([1]);
        }
    }, []);

    const handleAccordionToggle = (index) => {
        if (openAccordions.includes(index)) {
            // If accordion is already open, close it
            setOpenAccordions((prev) => prev.filter((item) => item !== index));
        } else {
            // If accordion is closed, open it
            setOpenAccordions((prev) => [...prev, index]);
        }
    };

    if(!userData) {
        return <div>Loading...</div>
    }

    return (
        <div className="profile">
            <div className="profile-section-1">
                <h1 className='profile-title'>Profile settings</h1>
            </div>
            <div className="profile-section-2">
                <div className="accordion-item">
                    <div className={`accordion-expand-header ${openAccordions.includes(1) ? 'open' : ''}`} onClick={() => handleAccordionToggle(1)}>
                        <div className="flex">
                            <div className="person-icon">
                                <img src="images/profile/id-card.png" alt="" />
                            </div>
                            <div className={`accordion-header ${openAccordions.includes(1) ? 'open' : ''}`} onClick={() => handleAccordionToggle(1)}>Personal informations</div>
                        </div>
                        <div className={`expand ${openAccordions.includes(1) ? 'open' : ''}`} onClick={() => handleAccordionToggle(1)}>
                            <img src={openAccordions.includes(1) ? 'images/profile/expandMore.png' : 'images/profile/arrow-right.png'} alt="" />
                        </div>
                    </div>
                    {openAccordions.includes(1) && (
                        
                        <div className="accordion-content">
                            <div className="personal-info">
                                <div className="name">
                                    <div className='fullName'>Full name</div>
                                    <div className='fullName-output'>{userData.first_name} {userData.last_name}</div>
                                </div>

                            </div>
                            <button className='gear'>
                                <img src="/images/profile/gear.png" alt="" />
                            </button>
                        </div>
                    )}
                </div>

                <div className="accordion-item">
                    <div className={`accordion-expand-header ${openAccordions.includes(2) ? 'open' : ''}`} onClick={() => handleAccordionToggle(2)}>
                        <div className="flex">
                            <div className="person-icon">
                                <img src="images/profile/padlock.png" alt="" />
                            </div>
                            <div className={`accordion-header ${openAccordions.includes(1) ? 'open' : ''}`} onClick={() => handleAccordionToggle(2)}>Password</div>
                        </div>
                        <div className={`expand ${openAccordions.includes(2) ? 'open' : ''}`} onClick={() => handleAccordionToggle(2)}>
                            <img src={openAccordions.includes(2) ? 'images/profile/expandMore.png' : 'images/profile/arrow-right.png'} alt="" />
                        </div>
                    </div>
                    {openAccordions.includes(2) && (
                        <div className="accordion-content">
                            <div className='password'>
                                <div className="password-title">Your Password</div>
                                <div className="password-output">********</div>
                            </div>
                            <button className='gear'>
                                <img src="/images/profile/gear.png" alt="" />
                            </button>
                        </div>
                    )}
                </div>
                
                <div className="accordion-item">
                    <div className={`accordion-expand-header ${openAccordions.includes(3) ? 'open' : ''}`} onClick={() => handleAccordionToggle(3)}>
                        <div className="flex">
                            <div className="person-icon">
                                <img src="images/profile/contact.png" alt="" />
                            </div>
                            <div className={`accordion-header ${openAccordions.includes(1) ? 'open' : ''}`} onClick={() => handleAccordionToggle(3)}>Contact</div>
                        </div>
                        <div className={`expand ${openAccordions.includes(3) ? 'open' : ''}`} onClick={() => handleAccordionToggle(3)}>
                            <img src={openAccordions.includes(3) ? 'images/profile/expandMore.png' : 'images/profile/arrow-right.png'} alt="" />
                        </div>
                    </div>
                    {openAccordions.includes(3) && (
                        <div className="accordion-content">
                        <div className='contact-accordion'>
                            <div className="email">
                                <div className="email-title">Your E-mail</div>
                                <div className="email-output">{userData.email}</div>
                            </div>
                            <div className="phone-number">
                                <div className="phone-title">Your phone number</div>
                                <div className="phone-output">{userData.phone}</div>
                            </div>
                        </div>
                        <button className='gear'>
                            <img src="/images/profile/gear.png" alt="" />
                        </button>
                    </div>
                    )}
                </div>

                <div className="accordion-item">
                    <div className={`accordion-expand-header ${openAccordions.includes(4) ? 'open' : ''}`} onClick={() => handleAccordionToggle(4)}>
                        <div className="flex">
                            <div className="person-icon">
                                <img src="images/profile/info.png" alt="" />
                            </div>
                            <div className={`accordion-header ${openAccordions.includes(1) ? 'open' : ''}`} onClick={() => handleAccordionToggle(4)}>About</div>
                        </div>
                        <div className={`expand ${openAccordions.includes(4) ? 'open' : ''}`} onClick={() => handleAccordionToggle(14)}>
                            <img src={openAccordions.includes(4) ? 'images/profile/expandMore.png' : 'images/profile/arrow-right.png'} alt="" />
                        </div>
                    </div>
                    {openAccordions.includes(4) && (
                        <div className="accordion-content">
                            <div>content 4</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;

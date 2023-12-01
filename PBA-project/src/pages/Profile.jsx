import React, { useState } from 'react';
import '../assets/global/breakpoints.scss';
import '../assets/main/font.scss';
import '../assets/styles/profile.scss';

const Profile = () => {
    const [openAccordions, setOpenAccordions] = useState([]);

    const handleAccordionToggle = (index) => {
        if (openAccordions.includes(index)) {
            // If accordion is already open, close it
            setOpenAccordions((prev) => prev.filter((item) => item !== index));
        } else {
            // If accordion is closed, open it
            setOpenAccordions((prev) => [...prev, index]);
        }
    };

    return (
        <div className="profile">
            <div className="profile-section-1">
                <h1>Profile settings</h1>
            </div>
            <div className="profile-section-2">
                <div className="accordion-item">
                    <div
                        className={`accordion-header ${openAccordions.includes(1) ? 'open' : ''}`}
                        onClick={() => handleAccordionToggle(1)}
                    >
                        Personal informations
                    </div>
                    {openAccordions.includes(1) && (
                        <div className="accordion-content">
                            <div className="personal-info">
                                <div className="name">
                                    <div className='fullName'>Full name</div>
                                    
                                </div>
                                <div className='dob'>Date of birth</div>
                                <div className='gender'>Gender</div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="accordion-item">
                    <div
                        className={`accordion-header ${openAccordions.includes(2) ? 'open' : ''}`}
                        onClick={() => handleAccordionToggle(2)}
                    >
                        Password
                    </div>
                    {openAccordions.includes(2) && (
                        <div className="accordion-content">
                            <div>content 2</div>
                        </div>
                    )}
                </div>
                
                <div className="accordion-item">
                    <div
                        className={`accordion-header ${openAccordions.includes(3) ? 'open' : ''}`}
                        onClick={() => handleAccordionToggle(3)}
                    >
                        Contact
                    </div>
                    {openAccordions.includes(3) && (
                        <div className="accordion-content">
                            <div>content 3</div>
                        </div>
                    )}
                </div>

                <div className="accordion-item">
                    <div
                        className={`accordion-header ${openAccordions.includes(4) ? 'open' : ''}`}
                        onClick={() => handleAccordionToggle(4)}
                    >
                        About
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

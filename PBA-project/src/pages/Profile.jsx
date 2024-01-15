import React, { useState, useEffect } from 'react';
import '../assets/global/breakpoints.scss';
import '../assets/main/font.scss';
import '../assets/styles/profile.scss';
import Toastify from 'toastify-js';
import axios from 'axios';


const Profile = () => {
    const [openAccordions, setOpenAccordions] = useState([]);
    const [userData, setUserData] = useState(null);
    const [serialNumArray, setSerialNumArray] = useState([]);

    //Redigerings funktionalitet
    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const [showNameInputs, setShowNameInputs] = useState(false);
    const [updatedFullName, setUpdatedFullName] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showPasswordInputs, setShowPasswordInputs] = useState(false);
    const [showContactInputs, setShowContactInputs] = useState(false); // Add this line for showContactInputs
    const [newEmail, setNewEmail] = useState('');
    const [newPhone, setNewPhone] = useState('');

    const handleGearButtonClick = (accordionIndex) => {
        setShowNameInputs(accordionIndex === 1 && !showNameInputs);
        setShowPasswordInputs(accordionIndex === 2 && !showPasswordInputs);
        setShowContactInputs(accordionIndex === 3 && !showContactInputs);
    };
    //notifikation
    const showToast = (text, backgroundColor) => {
        Toastify({
            text,
            duration: 3000,
            backgroundColor,
            gravity: 'top',
            position: 'center',
        }).showToast();
    };


    useEffect(() => {
        const storedUserData = sessionStorage.getItem('user');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));

            const userEmail = JSON.parse(storedUserData).email; // Antag, at e-mailen er gemt i user-data
            axios.post('https://kienzhe.dk/updates/showData.php', { userEmail })
                .then(response => {
                    console.log(response);  // Log hele response-objektet
                    if (response.data.success) {
                        setOpenAccordions([1]);
                        setSerialNumArray(response.data.combinedDataArray);
                    } else {
                        console.error(response.data.message);
                    }
                })
                .catch(error => {
                    console.error('error fetching:', error);
                });
        }
    }, []);

    const handleAccordionToggle = (index) => {
        if (openAccordions.includes(index)) {
            setOpenAccordions((prev) => prev.filter((item) => item !== index));
            setShowNameInputs(false);
        } else {
            setOpenAccordions((prev) => [...prev, index]);
            setShowNameInputs(index === 0);
        }
    };

    if (!userData) {
        return <div className='noUser'>
            <h1>Need to&nbsp;<a id='login-a' href="/login">login</a></h1>
        </div>
    }

    const handleSaveNameChanges = () => {
        const updatedData = {
            userEmail: userData.email,
            first_name: firstNameInput,
            last_name: lastNameInput,
        };

        axios.post('https://kienzhe.dk/updates/profileEdit.php', updatedData,)
            .then(response => {
                if (response.data.success) {
                    // Opdater React-tilstanden
                    setUserData(prevUserData => ({
                        ...prevUserData,
                        first_name: firstNameInput,
                        last_name: lastNameInput,
                    }));

                    // Opdater sessionStorage
                    const storedUserData = sessionStorage.getItem('user');
                    if (storedUserData) {
                        const parsedUserData = JSON.parse(storedUserData);
                        parsedUserData.first_name = firstNameInput;
                        parsedUserData.last_name = lastNameInput;
                        sessionStorage.setItem('user', JSON.stringify(parsedUserData));
                    }

                    setShowNameInputs(false);
                } else {
                    console.error(response.data.message);
                }
            })
            .catch(error => {
                console.error('error updating profile:', error);
            });
    };

    const handleSavePasswordChanges = () => {
        // Validate the current password and new password fields
        if (!currentPassword || !newPassword || newPassword !== confirmNewPassword) {
            // Handle validation error, maybe show an alert
            console.error('Password fields are not valid.');
            return;
        }

        const updatedData = {
            userEmail: userData.email,
            currentPassword,
            newPassword,
        };

        axios.post('https://kienzhe.dk/updates/profileEdit.php', updatedData)
            .then(response => {
                if (response.data.success) {
                    showToast('Password changed successfully.', 'var(--color-green)');
                    console.log('Password changed successfully.');
                    setShowPasswordInputs(false);
                } else {
                    showToast(response.data.message, 'var(--color-red)');
                    console.error(response.data.message);
                }
            })
            .catch(error => {
                showToast('Error updating password. Please try again later.', 'var(--color-skyblue)');
                console.error('Error updating password:', error);
            });
    };

    const handleSaveContactChanges = () => {
        const updatedData = {
            userEmail: userData.email,
            newEmail,
            newPhone,
        };

        axios.post('https://kienzhe.dk/updates/profileEdit.php', updatedData)
            .then(response => {
                if (response.data.success) {
                    // Opdater React-tilstanden
                    setUserData(prevUserData => ({
                        ...prevUserData,
                        email: newEmail,
                        phone: newPhone,
                    }));

                    // Opdater sessionStorage
                    const storedUserData = sessionStorage.getItem('user');
                    if (storedUserData) {
                        const parsedUserData = JSON.parse(storedUserData);
                        parsedUserData.email = newEmail;
                        parsedUserData.phone = newPhone;
                        sessionStorage.setItem('user', JSON.stringify(parsedUserData));
                    }

                    showToast('Contact information updated successfully.', 'var(--color-green)');
                } else {
                    showToast(response.data.message, 'var(--color-red)');
                    console.error(response.data.message);
                }
            })
            .catch(error => {
                showToast('Error updating contact information. Please try again later.', 'var(--color-skyblue)');
                console.error('Error updating contact information:', error);
            });
    };

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
                                    <div key={userData.id} className='fullName-output'>{updatedFullName || `${userData.first_name} ${userData.last_name}`}</div>

                                    {showNameInputs && (
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="New First Name"
                                                value={firstNameInput}
                                                onChange={(e) => setFirstNameInput(e.target.value)}
                                            />
                                            <input
                                                type="text"
                                                placeholder="New Last Name"
                                                value={lastNameInput}
                                                onChange={(e) => setLastNameInput(e.target.value)}
                                            />
                                            <button className='save-button' onClick={handleSaveNameChanges}>Save Changes</button>
                                        </div>
                                    )}
                                </div>

                            </div>
                            <button className='gear' onClick={() => handleGearButtonClick(1)}>
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
                                {showPasswordInputs && (
                                    <div>
                                        <input
                                            type="password"
                                            placeholder="Current Password"
                                            value={currentPassword}
                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                        />
                                        <input
                                            type="password"
                                            placeholder="New Password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                        <input
                                            type="password"
                                            placeholder="Confirm New Password"
                                            value={confirmNewPassword}
                                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                                        />
                                        <button className='save-button' onClick={handleSavePasswordChanges}>Save Password Changes</button>
                                    </div>
                                )}
                            </div>
                            <button className='gear' onClick={() => handleGearButtonClick(2)}>
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
                                    {showContactInputs && (
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="New email"
                                                value={newEmail}
                                                onChange={(e) => setNewEmail(e.target.value)}
                                            />
                                            <input
                                                type="text"
                                                placeholder="New phone number"
                                                value={newPhone}
                                                onChange={(e) => setNewPhone(e.target.value)}
                                            />
                                            <button className='save-button' onClick={handleSaveContactChanges}>Save Changes</button>
                                            <p>* filling out both input is required</p>
                                        </div>
                                    )}
                            </div>
                            <button className='gear'onClick={() => handleGearButtonClick(3)}>
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
                            <div className={`accordion-header ${openAccordions.includes(1) ? 'open' : ''}`} onClick={() => handleAccordionToggle(4)}>AirPlate configuration:</div>
                        </div>
                        <div className={`expand ${openAccordions.includes(4) ? 'open' : ''}`} onClick={() => handleAccordionToggle(14)}>
                            <img src={openAccordions.includes(4) ? 'images/profile/expandMore.png' : 'images/profile/arrow-right.png'} alt="" />
                        </div>
                    </div>
                    {openAccordions.includes(4) && (
                        <div className="accordion-content">
                            <div>
                                <div className='configuration'>
                                    <div className="dataHeader">
                                        <h4>Serial Number</h4>
                                        <h4>Format</h4>
                                        <h4>UA</h4>
                                        <h4>UAS</h4>
                                    </div>
                                    {serialNumArray.map((data, index) => (
                                        <div className='showData' key={index}>
                                            <span className="serial"> {data.serial_number}</span>
                                            {data.format && <span className="format"> {data.format}</span>}
                                            {data.ua && <span className="ua"> {data.ua}</span>}
                                            {data.uas && <span className="uas"> {data.uas}</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
            <div className="profil-border"></div>

        </div>
    );
};

export default Profile;

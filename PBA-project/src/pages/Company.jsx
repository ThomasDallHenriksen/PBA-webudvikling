import '../assets/styles/company.scss';
import Carousel from '../components/Carousel'

const Company = () => {

    const images = [
        'images/companyPage/activity1.png',
        'images/companyPage/activity2.png',
        'images/companyPage/activity3.png'
    ];

    return (
        <div className="company">
            <div className="company-section-1">
                <div className="about-us">
                    <h4 className='about'>About us</h4>
                    <h2>Welcome to our startup!</h2>
                    <p>AirPlate is a spin-out from the pioneering Drone Research Center from University of Southern Denmark. We are passionate engineers and inventors dedicated to making skies safer for everyone. Our focus is on Remote ID technology, an essential component for safely and responsibly integrating drones with manned aviation.</p>
                </div>
                <div className="img-drone">
                    <img id="drone" src="/images/companyPage/drone.png" alt="" />
                </div>
            </div>
            <div className="company-section-2">
                <div className="img-beach">
                    <img id='beach' src="/images/companyPage/beach.png" alt="" />
                </div>
                <div className="our-succes-story">
                    <h2 className='core'>What is our core</h2>
                    <p>At our core, we are committed to encouraging the safe and responsible use of drones. We believe technology has the power to transform the way we live and work, and we are excited to be at the forefront of this change. We continue to research and develop new ways to improve our Remote ID system and keep up with the ever growing drone industry.</p>
                </div>
            </div>
            <div className="company-section-3">
                <div className="img-drone2">
                    <img id='drone2' src="/images/companyPage/drone2.png" alt="" />
                </div>
            </div>
            <div className="company-section-4">
                <div className="team-description">
                    <h1>Our Team</h1>
                    <p>As a team of five, we each bring distinct talents to the table. But it's our shared vision and constant communication that allows us to work seamlessly together. Understanding our roles while supporting each other is key. We meet regularly to strategize and stay on track. Our different backgrounds give us an edge when problem solving. Our commitment to the team makes us unstoppable. Though small in size, our collaborative spirit and drive for excellence empower us to achieve big things.</p>
                </div>
                <div className="portraits">
                    <img id='portraits' src="/images/companyPage/portraits.png" alt="" />
                </div>
                <div className="portraits-mobile">
                    <img id='portraits-mobile' src="/images/companyPage/portraits-mobile.png" alt="" />
                </div>
            </div>
            <div className="company-section-5">
                <div className="title">
                    <h1>Our Activities</h1>
                </div>
                <div className="activities">
                    <div className="carousel">
                        <Carousel images={images} />
                    </div>
                    <div className="activities-images">
                        <img src="images/companyPage/activity1.png" alt="" />
                        <img src="images/companyPage/activity2.png" alt="" />
                        <img src="images/companyPage/activity3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Company;
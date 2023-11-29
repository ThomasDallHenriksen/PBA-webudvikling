import '../assets/styles/company.scss';
import Carousel from '../components/Carousel'
import '../index.css'

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
                    <h4>About us</h4>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                    <h4>Our succes story</h4>
                    <p id='bigger-p'>Lorem Ipsum</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
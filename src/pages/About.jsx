import React from 'react';
import './About.css';
const About = () => {
    return (
        <>
            <section id='about'>
                <div className="container">
                    <div className="about-wrapper">
                        <div className="about-content">

                            <h1 className="highlight">Who We Are</h1>
                            <h3 className='about-content-desc'>Welcome to R-Deal! We're a passionate team of professionals dedicated to sharing your vision. Our journey began in 2023 with a vision to help others by reducing their workload.</h3>
                            <div className="choose-us-item">
                                <h2 className="choose-us-title">Our values</h2>

                            </div>
                            <p className=" choose-us-desc">
                                <ul>
                                    <li>Excellence: We strive for excellence in every project we undertake.</li>
                                    <li>Innovation: We embrace creativity and seek innovative solutions.</li>
                                    <li>Collaboration: We believe in the power of collaboration and teamwork.</li>
                                    <li>Integrity: We uphold the highest ethical standards in all our interactions.</li>
                                    <li>Customer-Centric: Our customers' success is at the heart of our business.</li>
                                </ul>
                            </p>
                        </div></div>
                    <div className='adjust'>
                        <img src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlJTIwd29ya2VyfGVufDB8fDB8fHww&w=1000&q=80'
                            width='85%' />
                        
                    </div>
                </div>
            </section>
        </>

    )
};
export default About;
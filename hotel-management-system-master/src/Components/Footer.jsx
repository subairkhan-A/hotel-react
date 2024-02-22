import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { Container, Col, Row } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="border-top bg-white mt-5">
            <div className="py-4 footer-a">
                <Container>
                    <Row className="py-1">
                        <Col xs={12} md={6} lg={3}>
                            <ul className="list-unstyled">
                                <h6>ABOUT</h6>
                                <li>Newsroom</li>
                                <li>Investors</li>
                                <li>Careers</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <ul className="list-unstyled">
                                <h6>COMMUNITY</h6>
                                <li>Accessibility</li>
                                <li>Guest Referrals</li>
                                <li>Gift cards</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <ul className="list-unstyled">
                                <h6>HOST</h6>
                                <li>Host an Experience</li>
                                <li>Resource Center</li>
                                <li>Community Center</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <ul className="list-unstyled">
                                <h6>SUPPORT</h6>
                                <li>Help Center</li>
                                <li>Cancellation options</li>
                                <li>Neighborhood Support</li>
                                <li>Trust &amp; Safety</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="py-3 mx-5 d-flex flex-row flex-wrap text-center align-items-center justify-content-around border-bottom">
                <div>
                    <h5>ALSO AVAILABLE ON</h5>
                    <div>
                        <img width="130px" src="https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg" alt="" />
                        <img width="130px" src="https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg" alt="" />
                    </div>
                </div>
                <div>
                    <h5>Connect With Us</h5>
                    <div>
                        <a href="####">
                                 <FaFacebookSquare className="connect text-dark" /></a>
                             <a href="####">
                                 <FaLinkedin className="connect text-dark" /></a>
                             <a href="#####">
                                 <AiFillInstagram className="connect text-dark" /></a>
                             <a href="#####">
                                <IoLogoYoutube className="connect text-dark" /></a>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-white d-flex d-row justify-content-center align-items-center flex-wrap">
                <div>
                    <p className="text-center pt-3">&copy; 2024 Hotel Management App. All Right Reserved</p>
                </div>
               
            </div>
        </footer>
    )
}

export default Footer
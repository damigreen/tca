import Header from "components/header";
import React from "react";
// import "./Services.sass";
import Button from 'react-bootstrap/Button'
import { 
    ServicesWrap,
    ServicesRow,
    BrandingBox,
    WebDevBox,
    ConsultBox,
    ScalabilityBox,
    DigitalMarketingBox,
    PublishingBox,
    ButtonServices,
} from './ServicesStyle'

import {    
    // ButtonServices
} from 'AppStyled';

const Services = () => {
    const brandingImage = '../icons/branding.png';
    const webDevImage = '../icons/web-mobile-dev.png';
    const scalabilityImage = '../icons/scalability.png';
    const consultancyImage = '../icons/consultancy.png';
    const digitalMarketImage = '../icons/digital-marketing.png';
    const publishingImage = '../icons/publishing.png';
    // const rightArrow = '../icons/icons8-right-arrow-50.png';

    return (
        <div>
            <ServicesWrap>
                <ServicesRow>
                    <BrandingBox>
                        <h4>Branding</h4>
                        <div className="services-image">
                            <img src={brandingImage} alt="services image for branding" />
                        </div>

                        <div className="services-body">
                            <h4>Branding</h4>
                            <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            <div>Our branding service helps handle all the hassle in-between transforming an idea into a scalable product then getting it to the marketplace to make profit.</div>
                            <p className="btn-services">Learn more
                                <span>
                                    <svg style={{width: '100', marginLeft: 10}} xmlns="http://www.w3.org/2000/svg" width="100" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 100 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                    </svg>
                                    {/* <img src={rightArrow} alt="Learn more right arrow" /> */}
                                </span>
                            </p>
                            {/* <div className="icon">
                                <div className="arrow"></div>
                            </div> */}
                        </div>
                    </BrandingBox>

                    <WebDevBox>
                        <h4>Web and Mobile App Development</h4>
                        <div className="services-image">
                            <img src={webDevImage} alt="WebDev image for web design and development" />
                        </div>

                        <div className="services-body">
                            <h4>Web Design and Development</h4>
                            <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>
                            {/* <ButtonServices>LEARN MORE</ButtonServices> */}
                            <p className="btn-services">Learn more
                                <span>
                                    <svg style={{width: '100', marginLeft: 10}} xmlns="http://www.w3.org/2000/svg" width="100" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 100 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                    </svg>
                                    {/* <img src={rightArrow} alt="Learn more right arrow" /> */}
                                </span>
                            </p>
                        </div>
                    </WebDevBox>

                    <ConsultBox>
                        <h4>Consultancy</h4>
                        <div className="services-image">
                            <img src={consultancyImage} alt="Consult image for consultancy"  />
                        </div>
                        <div className="services-body">
                            <h4>Consultancy</h4>
                            <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            <div>An appointment for our consultancy service provides clients with timely professional advice to all the questions they need answered regarding all aspects of their business.</div>
                            {/* <ButtonServices>LEARN MORE</ButtonServices> */}
                            <p className="btn-services">Learn more
                                <span>
                                    <svg style={{width: '100', marginLeft: 10}} xmlns="http://www.w3.org/2000/svg" width="100" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 100 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                    </svg>
                                    {/* <img src={rightArrow} alt="Learn more right arrow" /> */}
                                </span>
                            </p>
                        </div>
                    </ConsultBox>

                    <ScalabilityBox>
                        <h4>Scalability</h4>
                        <div className="services-image">
                            <img src={scalabilityImage} alt="Scalability image for scalability" />
                        </div>
                        <div className="services-body">
                            <div>
                                <h4>Scalability</h4>
                                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                                <div>We help scale your brand to break-even and make revenue. We take up the hassle of strategizing and positioning the brand to make profit.</div>
                            </div>
                            {/* <ButtonServices>LEARN MORE</ButtonServices> */}
                            <p className="btn-services">Learn more
                                <span>
                                    <svg style={{width: '100', marginLeft: 10}} xmlns="http://www.w3.org/2000/svg" width="100" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 100 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                    </svg>
                                    {/* <img src={rightArrow} alt="Learn more right arrow" /> */}
                                </span>
                            </p>
                        </div>
                    </ScalabilityBox>

                    <DigitalMarketingBox>
                        <h4>Digital Marketing</h4>
                        <div className="services-image">
                            <img src={digitalMarketImage} alt="DigitalMarketing image for digital marketing" />
                        </div>

                        <div className="services-body">
                            <div>
                                <h4>Digital Marketing</h4>
                                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                                <div>We assists clients in determining their strengths, weaknesses and uniqueness as a brand. The agency offers innovative & creative digital marketing methods to target audiences for already established brands/clients as well as brands/clients just starting out in their various fields.</div>
                            </div>
                            {/* <ButtonServices>LEARN MORE</ButtonServices> */}
                            <p className="btn-services">Learn more
                                <span>
                                    <svg style={{width: '100', marginLeft: 10}} xmlns="http://www.w3.org/2000/svg" width="100" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 100 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                    </svg>
                                </span>
                            </p>
                        </div>
                    </DigitalMarketingBox>

                    <PublishingBox>
                        <h4>Publishing</h4>
                        <div className="services-image">
                            <img src={publishingImage} alt="Publishing image for publishing" />
                        </div>

                        <div className="services-body">
                            <h4>Publishing</h4>
                            <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            <div>
                                We write reviews for products, brands and individual clients to be published on our platform’s blog or other respected media outlets eg: Medium, Native Mag or the client’s choice of media house.
                            </div>
                            {/* <ButtonServices>LEARN MORE</ButtonServices> */}
                            <p className="btn-services">Learn more
                                <span>
                                    <svg style={{width: '100', marginLeft: 10}} xmlns="http://www.w3.org/2000/svg" width="100" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 100 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                    </svg>
                                    {/* <img src={rightArrow} alt="Learn more right arrow" /> */}
                                </span>
                            </p>
                        </div>
                    </PublishingBox>
                </ServicesRow>
            </ServicesWrap>
        </div>
    )
}

export default Services;

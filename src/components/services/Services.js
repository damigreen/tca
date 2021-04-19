import React from "react";
// import "./Services.sass";
// import Header from "components/header";
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
    // ButtonServices,
} from './ServicesStyle'

import {    
    DividerLine,
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
                        <div className="services-image">
                            <img src={brandingImage} alt="services image for branding" />
                        </div>

                        <div className="services-body">
                            <h4>Branding</h4>
                            {/* <h3>Lorem Ipsum is simply dummy text of the printing</h3> */}
                            <div>Our branding service helps handle all the hassle in-between transforming an idea into a scalable product then getting it to the marketplace to make profit.</div>
                            <Button href="#contact" variant="outline-primary" className="btn-services">Get started</Button>
                        </div>
                    </BrandingBox>

                    <WebDevBox>
                        <div className="services-image">
                            <img src={webDevImage} alt="WebDev image for web design and development" />
                        </div>

                        <div className="services-body">
                            <h4>Web Design and Development</h4>
                            {/* <h3>Lorem Ipsum is simply dummy text of the printing</h3> */}
                            <div>
                                Our websites are built specifically for your brand needs . We carry out keywords reasearch and perform the best SEO practices to make your website rank across all search engines
                            </div>
                            {/* <ButtonServices>LEARN MORE</ButtonServices> */}
                            <Button variant="outline-primary" className="btn-services" href="#contact">Get started</Button>
                        </div>
                    </WebDevBox>

                    <DigitalMarketingBox>
                        <div className="services-image">
                            <img src={digitalMarketImage} alt="DigitalMarketing image for digital marketing" />
                        </div>

                        <div className="services-body">
                            <div>
                                <h4>Digital Marketing</h4>
                                {/* <h3>Lorem Ipsum is simply dummy text of the printing</h3> */}
                                <div>We assists clients in determining their strengths, weaknesses and uniqueness as a brand. The agency offers innovative & creative digital marketing methods to target audiences for already established brands/clients as well as brands/clients just starting out in their various fields.</div>
                            </div>
                            {/* <ButtonServices>LEARN MORE</ButtonServices> */}
                            <Button href="#contact" variant="outline-primary" className="btn-services">Hire us</Button>
                        </div>
                    </DigitalMarketingBox>

                    <ConsultBox>
                        <div className="services-image">
                            <img src={consultancyImage} alt="Consult image for consultancy"  />
                        </div>
                        <div className="services-body">
                            <h4>Consultancy</h4>
                            {/* <h3>Lorem Ipsum is simply dummy text of the printing</h3> */}
                            <div>An appointment for our consultancy service provides clients with timely professional advice to all the questions they need answered regarding all aspects of their business.</div>
                            {/* <ButtonServices>LEARN MORE</ButtonServices> */}
                            <Button href="#contact" variant="outline-primary" className="btn-services">Start conversation</Button>
                        </div>
                    </ConsultBox>

                    <ScalabilityBox>
                        <div className="services-image">
                            <img src={scalabilityImage} alt="Scalability image for scalability" />
                        </div>
                        <div className="services-body">
                            <div>
                                <h4>Scalability</h4>
                                {/* <h3>Lorem Ipsum is simply dummy text of the printing</h3> */}
                                <div>We help scale your brand to break-even and make revenue. We take up the hassle of strategizing and positioning the brand to make profit.</div>
                            </div>
                            {/* <ButtonServices>LEARN MORE</ButtonServices> */}
                            <Button href="#contact" variant="outline-primary" className="btn-services">Learn more</Button>
                        </div>
                    </ScalabilityBox>

                    <PublishingBox>
                        <div className="services-image">
                            <img src={publishingImage} alt="Publishing image for publishing" />
                        </div>

                        <div className="services-body">
                            <h4>Publishing</h4>
                            {/* <h3>Lorem Ipsum is simply dummy text of the printing</h3> */}
                            <div>
                                We write reviews for products, brands and individual clients to be published on our platform’s blog or other respected media outlets eg: Medium, Native Mag or the client’s choice of media house.
                            </div>
                            {/* <ButtonServices>LEARN MORE</ButtonServices> */}
                            <Button href="#contact" variant="outline-primary" className="btn-services">Learn more</Button>
                        </div>
                    </PublishingBox>
                </ServicesRow>

                <DividerLine></DividerLine>
            </ServicesWrap>
        </div>
    )
}

export default Services;

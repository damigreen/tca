import Header from "components/header";
import React from "react";
// import "./Services.sass";
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
    const brandingImage = '../illustrations/branding-mobile.png';
    const webDevImage = '../illustrations/web-dev-mobile.png';
    const consultancyImage = '../illustrations/consultancy-mobile.png';
    const scalabilityImage = '../illustrations/scalability-mobile.png';
    const digitalMarketImage = '../illustrations/digital-market-mobile.png';
    const publishingImage = '../illustrations/publishing-mobile.png';

    return (
        <div>
            <ServicesWrap>
                <ServicesRow>
                    <BrandingBox>
                        <h4>Branding</h4>
                        <div className="services-image">
                            <img src={brandingImage} alt="Branding image for branding" />
                        </div>

                        <div className="services-body">
                            <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            <div>Our branding service helps handle all the hassle in-between transforming an idea into a scalable product then getting it to the marketplace to make profit.</div>
                            <ButtonServices>LEARN MORE</ButtonServices>
                        </div>
                    </BrandingBox>

                    <WebDevBox>
                        <h4>Web Design and Development</h4>
                        <div className="services-image">
                            <img src={webDevImage} alt="WebDev image for web design and development" />
                        </div>

                        <div className="services-body">
                            <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>
                            <ButtonServices>LEARN MORE</ButtonServices>
                        </div>
                    </WebDevBox>

                    <ConsultBox>
                        <h4>Consultancy</h4>
                        <div className="services-image">
                            <img src={consultancyImage} alt="Consult image for consultancy"  />
                        </div>
                        <div className="services-body">
                            <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            <div>An appointment for our consultancy service provides clients with timely professional advice to all the questions they need answered regarding all aspects of their business.</div>
                            <ButtonServices>LEARN MORE</ButtonServices>
                        </div>
                    </ConsultBox>

                    <ScalabilityBox>
                        <h4>Scalability</h4>
                        <div className="services-image">
                            <img src={scalabilityImage} alt="Scalability image for scalability" />
                        </div>
                        <div className="services-body">
                            <div>
                                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                                <div>We help scale your brand to break-even and make revenue. We take up the hassle of strategizing and positioning the brand to make profit.</div>
                            </div>
                            <ButtonServices>LEARN MORE</ButtonServices>
                        </div>
                    </ScalabilityBox>

                    <DigitalMarketingBox>
                        <h4>Digital Marketing</h4>
                        <div className="services-image">
                            <img src={digitalMarketImage} alt="DigitalMarketing image for digital marketing" />
                        </div>

                        <div className="services-body">
                            <div>
                                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                                <div>We assists clients in determining their strengths, weaknesses and uniqueness as a brand. The agency offers innovative & creative digital marketing methods to target audiences for already established brands/clients as well as brands/clients just starting out in their various fields.</div>
                            </div>
                            <ButtonServices>LEARN MORE</ButtonServices>
                        </div>
                    </DigitalMarketingBox>

                    <PublishingBox>
                        <h4>Publishing</h4>
                        <div className="services-image">
                            <img src={publishingImage} alt="Publishing image for publishing" />
                        </div>

                        <div className="services-body">
                            <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                            <div>
                                We write reviews for products, brands and individual clients to be published on our platform’s blog or other respected media outlets eg: Medium, Native Mag or the client’s choice of media house.
                            </div>
                            <ButtonServices>LEARN MORE</ButtonServices>
                        </div>
                    </PublishingBox>
                </ServicesRow>
            </ServicesWrap>
        </div>
    )
}

export default Services;

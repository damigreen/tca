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
} from './ServicesStyle'

const Services = () => {

    return (
        <div>
            <ServicesWrap>
                <ServicesRow>
                    <BrandingBox>
                        <div className="services-image">
                            <img alt="Branding image for branding" />
                        </div>

                        <div className="services-body">
                            <h4>Branding</h4>
                            <div>Our branding service helps handle all the hassle in-between transforming an idea into a scalable product then getting it to the marketplace to make profit.</div>
                        </div>
                    </BrandingBox>

                    <WebDevBox>
                        <div className="services-body">
                            <h4>Web Design and Development</h4>
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>
                        </div>
                        <div className="services-image">
                            <img alt="WebDev image for web design and development" />
                        </div>
                    </WebDevBox>

                    <ConsultBox>
                        <div className="services-image">
                            <img alt="Consult image for consultancy"  />
                        </div>
                        <div className="services-body">
                            <h4>Consultancy</h4>
                            An appointment for our consultancy service provides clients with timely professional advice to all the questions they need answered regarding all aspects of their business.
                        </div>
                    </ConsultBox>

                    <ScalabilityBox>
                        <div className="services-body">
                            <h4>Scalability</h4>
                            <div>
                                We help scale your brand to break-even and make revenue. We take up the hassle of strategizing and positioning the brand to make profit.
                            </div>

                        </div>
                        <div className="services-image">
                            <img alt="Scalability image for scalability" />
                        </div>
                    </ScalabilityBox>

                    <DigitalMarketingBox>
                        <div className="services-image">
                            <img alt="DigitalMarketing image for digital marketing" />
                        </div>

                        <div className="services-body">
                            <h4>Digital Marketing</h4>
                            <div>
                                We assists clients in determining their strengths, weaknesses and uniqueness as a brand. The agency offers innovative & creative digital marketing methods to target audiences for already established brands/clients as well as brands/clients just starting out in their various fields.
                            </div>
                        </div>
                    </DigitalMarketingBox>

                    <PublishingBox>
                        <div className="services-body">
                            <h4>Publishing</h4>
                            <div>
                                We write reviews for products, brands and individual clients to be published on our platform’s blog or other respected media outlets eg: Medium, Native Mag or the client’s choice of media house.
                            </div>
                        </div>
                        <div className="services-image">
                            <img alt="Publishing image for publishing" />
                        </div>
                    </PublishingBox>
                </ServicesRow>
            </ServicesWrap>
        </div>
    )
}

export default Services;

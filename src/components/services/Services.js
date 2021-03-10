import React from "react";
// import "./Services.sass";
import { 
    ServicesWrap,
    ServicesRow,
    BrandingBox,
    BrandingHeader,
    WebDevBox,
    WebDevHeader,
    ConsultBox,
    ConsultHeader,
    ScalabilityBox,
    ScalabilityHeader,
    DigitalMarketingBox,
    DigitalMarketingHeader,
    PublishingBox,
    PublishingHeader,
} from './ServicesStyle'

const Services = () => {

    return (
        <div>
            <ServicesWrap>
                <ServicesRow>
                    <BrandingBox>
                        <BrandingHeader>Branding</BrandingHeader>
                        <div>
                            Our branding service helps handle all the hassle in-between transforming an idea into a scalable product then getting it to the marketplace to make profit.
                            <img alt="Branding image for branding" />
                        </div>
                    </BrandingBox>

                    <WebDevBox className="web-dev">
                        <WebDevHeader>Web Design and Development</WebDevHeader>
                        <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            <img alt="WebDev image for web design and development" />
                        </div>
                    </WebDevBox>


                    <ConsultBox>
                        <ConsultHeader>Consultancy</ConsultHeader>
                        <div>
                            An appointment for our consultancy service provides clients with timely professional advice to all the questions they need answered regarding all aspects of their business.
                            <img alt="Consult image for consultancy"  />
                        </div>
                    </ConsultBox>

                    <ScalabilityBox>
                        <ScalabilityHeader>Scalability</ScalabilityHeader>
                        <div>
                            We help scale your brand to break-even and make revenue. We take up the hassle of strategizing and positioning the brand to make profit.
                            <img alt="Scalability image for scalability" />
                        </div>
                    </ScalabilityBox>

                    <DigitalMarketingBox>
                        <DigitalMarketingHeader>Digital Marketing</DigitalMarketingHeader>
                        <div>
                            We assists clients in determining their strengths, weaknesses and uniqueness as a brand. The agency offers innovative & creative digital marketing methods to target audiences for already established brands/clients as well as brands/clients just starting out in their various fields.
                            <img alt="DigitalMarketing image for digital marketing" />
                        </div>
                    </DigitalMarketingBox>

                    <PublishingBox>
                        <PublishingHeader>Publishing</PublishingHeader>
                        <div>
                            We write reviews for products, brands and individual clients to be published on our platform’s blog or other respected media outlets eg: Medium, Native Mag or the client’s choice of media house.
                            <img alt="Publishing image for publishing" />
                        </div>
                    </PublishingBox>
                </ServicesRow>
            </ServicesWrap>
        </div>
    )
}

export default Services;

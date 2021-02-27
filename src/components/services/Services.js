import React from "react";
// import "./Services.sass";
import { 
    Styled_ServicesWrap,
    ServicesBox,
    ServicesHeader,
    
} from './ServicesStyle'

const Services = () => {

    return (
        <div>
            <h1>Services</h1>
            <Styled_ServicesWrap>
                <ServicesBox>
                    <ServicesHeader>Branding</ServicesHeader>
                    <div>
                        Our branding service helps handle all the hassle in-between transforming an idea into a scalable product then getting it to the marketplace to make profit.
                        <img alt="services image for branding" />
                    </div>
                </ServicesBox>

                <ServicesBox>
                    <ServicesHeader>Web Design and Development</ServicesHeader>
                    <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        <img alt="services image for web design and development" />
                    </div>
                </ServicesBox>


                <ServicesBox>
                    <ServicesHeader>Consultancy</ServicesHeader>
                    <div>
                        An appointment for our consultancy service provides clients with timely professional advice to all the questions they need answered regarding all aspects of their business.
                        <img alt="services image for consultancy"  />
                    </div>
                </ServicesBox>

                <ServicesBox>
                    <ServicesHeader>Scalability</ServicesHeader>
                    <div>
                        We help scale your brand to break-even and make revenue. We take up the hassle of strategizing and positioning the brand to make profit.
                        <img alt="services image for scalability" />
                    </div>
                </ServicesBox>

                <ServicesBox>
                    <ServicesHeader>Digital Marketing</ServicesHeader>
                    <div>
                        We assists clients in determining their strengths, weaknesses and uniqueness as a brand. The agency offers innovative & creative digital marketing methods to target audiences for already established brands/clients as well as brands/clients just starting out in their various fields.
                        <img alt="services image for digital marketing" />
                    </div>
                </ServicesBox>

                <ServicesBox>
                    <ServicesHeader>Publishing</ServicesHeader>
                    <div>
                        We write reviews for products, brands and individual clients to be published on our platform’s blog or other respected media outlets eg: Medium, Native Mag or the client’s choice of media house.
                        <img alt="services image for publishing" />
                    </div>
                </ServicesBox>
            </Styled_ServicesWrap>
        </div>
    )
}

export default Services;

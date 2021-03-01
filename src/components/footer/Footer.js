import React from 'react';
import {
    FooterWrapper,
    FooterRow,
    FooterNavItem,
    FooterNavItems,
    LocationStyled,
    FooterLocation,
    FooterLocationAddress,
    FooterLocationMap,
    FooterLocationMapIcon,
    FooterColumn,
    FooterColumnSub,
} from './FooterStyled';



const Footer = () => {
    const locationIcon = '../../../icons/icons8-location-16.png'

    return (
        <FooterWrapper>
            <FooterRow>
                <FooterNavItems>
                    <FooterNavItem>
                        <a href="/about">About</a>
                    </FooterNavItem>
                    <FooterNavItem>
                        <a href="/services">Services</a>
                    </FooterNavItem>
                    <FooterNavItem>
                        <a href="/work">Work</a>
                    </FooterNavItem>
                    <FooterNavItem>
                        <a href="/careers">Careers</a>
                    </FooterNavItem>
                    <FooterNavItem>
                        <a href="/contact">Contact</a>
                    </FooterNavItem>
                </FooterNavItems>


                <LocationStyled>
                    <FooterLocation>
                        <h1>Lagos</h1>

                            <FooterLocationAddress>
                                <span>Lorem Ipsum </span>
                                <span>39 & 40 typesetting industry.</span>
                                <span>Lagos, Nigeria</span>
                                <span>100001</span>
                                <a href="08000000000">08000000000</a>

                        </FooterLocationAddress>
                        <FooterLocationMap>
                                <FooterLocationMapIcon>
                                    <img src={locationIcon} />
                                </FooterLocationMapIcon>
                                <p>View on Google Maps</p>
                        </FooterLocationMap>
                    </FooterLocation>

                    <FooterColumn>
                        <FooterColumnSub>
                            <FooterSubForm>
                                <form>
                                    <label for="email">Subscribe to our newsletter</label>
                                </form>
                            </FooterSubForm>
                        </FooterColumnSub>
                    </FooterColumn>

                </LocationStyled>

            </FooterRow>
        </FooterWrapper>
    )
}

export default Footer;

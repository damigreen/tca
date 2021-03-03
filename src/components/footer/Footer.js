import React from 'react';
import {
    FooterWrapper,
    FooterRow,
    FooterCompanyLogo,
    FooterNavItem,
    FooterNavItems,
    LocationStyled,
    FooterLocation,
    FooterLocationAddress,
    FooterLocationMap,
    FooterLocationMapIcon,
    FooterColumn,
    FooterColumnSub,
    FooterSubFormWrap,
    FooterSubForm,
    FooterSubField,
    FooterSubInput,
    FooterSocialIconsWrap,
    FooterMessage,
    FooterItemsClass,
    FooterItemServices,
    CompanyBox,
    ServicesBox,
    ProductsBox,
} from './FooterStyled';



const Footer = () => {
    const locationIcon = '../../../icons/globe2.svg';
    const emailSubmitIcon = '../../../icons/check-circle.svg';
    const footerLogoImage = '../../../icons/footer-logo-icon.png'

    return (
        <FooterWrapper>
            <FooterRow>
                <FooterCompanyLogo>
                    <div>
                        <img alt="footer logo image" src={footerLogoImage} />
                    </div>
                </FooterCompanyLogo>


                {/* <FooterNavItems>
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
                </FooterNavItems> */}


                <LocationStyled>
                    {/* <FooterLocation>
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
                    </FooterLocation> */}

                    <FooterColumn>
                        <FooterMessage>
                            <h1>
                                Don't Miss Out
                            </h1>
                            <p>
                                Sign up to our newsletter as we assist you on your digitization journey and to ensure the suceess of your business 
                            </p>
                        </FooterMessage>
                        <FooterColumnSub>
                            <FooterSubFormWrap>
                                <FooterSubForm>
                                    {/* <label for="email">Subscribe to our newsletter</label> */}

                                    <FooterSubField>
                                        <div>
                                            <input type="email" name="email" placeholder="EMAIL" />
                                            <button type="submit">
                                                    <img src={emailSubmitIcon} alt="email submit icon" />
                                            </button>
                                        </div>
                                        <p>You may unsubscribe from our monthly newsletter at any time. Check out our <span><a style={{color: "#FFFFFF", textDecoration: "underline"}}>Privacy Policy</a></span> for more information on how we store and protect your data.</p>
                                    </FooterSubField>
                                </FooterSubForm>
                                
                            </FooterSubFormWrap>
                        </FooterColumnSub>
                    </FooterColumn>
                </LocationStyled>
                    
                <FooterSocialIconsWrap>
                        <a>
                            <svg stroke="#FFFFFF" strokeWidth="2px" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="1.4rem" height="1.4rem"><path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 20.464844 14.003906 L 18.03125 14.003906 L 18.03125 23.007813 L 13.96875 23.007813 L 13.96875 14.003906 L 12.390625 14.003906 L 12.390625 10.96875 L 13.96875 10.96875 L 13.96875 9.035156 C 13.96875 6.503906 15.019531 5 18.007813 5 L 21.03125 5 L 21.03125 8.023438 L 19.273438 8.023438 C 18.113281 8.023438 18.035156 8.453125 18.035156 9.265625 L 18.03125 10.96875 L 20.796875 10.96875 Z"/></svg>
                        </a>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" fill="#FFFFFF" class="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                        </a>
                        <a>
                            <svg stroke="#FFFFFF" strokeWidth="2px" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="1.4rem" height="1.4rem">    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/></svg>
                        </a>
                        <a>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" fill="#FFFFFF" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </a>
                        <a>
                            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="1.4rem" height="1.4rem">    <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 12 18 L 18.730469 18 C 19.460469 18 23.410156 17.950312 23.410156 21.570312 C 23.410156 23.490313 22.099766 24.139688 21.509766 24.429688 C 22.389766 24.709688 24 25.52 24 28 C 24 31.83 19.609531 32 19.019531 32 L 12 32 L 12 18 z M 29 18 L 36 18 L 36 20 L 29 20 L 29 18 z M 15 20.429688 L 15 23.710938 L 18.220703 23.710938 C 18.660703 23.710938 20.119141 23.47 20.119141 22 C 20.119141 20.53 18.219687 20.429688 17.929688 20.429688 L 15 20.429688 z M 32.730469 21 C 36.630469 21 37.689609 24.039766 37.849609 24.759766 C 37.999609 25.489766 38 26.13 38 27 L 30.099609 27 C 30.099609 27.87 30.560625 29.830078 32.890625 29.830078 C 33.510625 29.830078 33.969453 29.680625 34.439453 29.390625 C 34.899453 29.100625 35.060938 28.819297 35.210938 28.529297 L 37.839844 28.529297 C 37.379844 29.679297 36.760078 30.550859 35.830078 31.130859 C 34.900078 31.710859 33.820078 32 32.580078 32 C 31.800078 32 31.03 31.850547 30.25 31.560547 C 29.63 31.270547 29.010781 30.840156 28.550781 30.410156 C 28.090781 29.970156 27.780703 29.389922 27.470703 28.669922 C 27.160703 28.089922 27 27.22 27 26.5 C 27 25.78 27.290469 21 32.730469 21 z M 32.730469 23.029297 C 30.470469 23.029297 30.099609 25.199844 30.099609 25.339844 L 35.060547 25.339844 C 34.900547 24.619844 34.250469 23.029297 32.730469 23.029297 z M 15 25.710938 L 15 29.570312 L 18.351562 29.570312 C 18.640563 29.570312 20.679688 29.480937 20.679688 27.710938 C 20.679687 25.950937 19.077562 25.710938 18.351562 25.710938 L 15 25.710938 z"/></svg>
                        </a>
                </FooterSocialIconsWrap>
                <FooterItemsClass>
                    <FooterItemServices>
                        <CompanyBox>
                            <p>Services</p>
                            <div>
                                {/* <img alt="click to show full services button" src /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                            </div>
                        </CompanyBox>
                        <div>
                            <div>
                                <p>Branding</p>
                                <p>Digital Marketing</p>
                                <p>Consultancy</p>
                                <p>Web Design and Development</p>
                                <p>Research and Business Analysis</p>
                                <p>Publishing</p>
                            </div>
                        </div>

                        <ServicesBox>
                            <p>Services</p>
                            <div>
                                {/* <img alt="click to show full services button" src /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                            </div>
                        </ServicesBox>
                        <div>
                            <div>
                                <p>Branding</p>
                                <p>Digital Marketing</p>
                                <p>Consultancy</p>
                                <p>Web Design and Development</p>
                                <p>Research and Business Analysis</p>
                                <p>Publishing</p>
                            </div>
                        </div>

                        <ProductsBox>
                            <p>Products</p>
                            <div>
                                {/* <img alt="click to show full services button" src /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                            </div>
                        </ProductsBox>
                        <div>
                            <div>
                                <p>TCA Fashions</p>
                                <p>TCA Foods</p>
                                <p>TCA Mining</p>
                            </div>
                        </div>
                    </FooterItemServices>
                </FooterItemsClass>
            </FooterRow>
        </FooterWrapper>
    )
}

export default Footer;

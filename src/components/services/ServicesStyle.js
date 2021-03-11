import styled, { css } from 'styled-components'
import {
    flexColWrap,
    flexRowWrap,
    borderStyle,
    headerSecStyled,
} from 'AppStyled'


const serviceImageL = `
    width: auto;
    height: auto;
    margin-left: 1.4rem;
    margin-right: 0.7rem;
    align-self: flex-start;
`
    
const serviceImageR = `
    ${borderStyle};
    width: auto;
    height: auto;
    margin-left: 0.7rem;
    margin-right: 1.4rem;
    align-self: flex-start;
`

const servicesBodyR = `
    width: 60%;
    margin-right: 0.7rem;
    text-align: left;
    padding-left: 0.6rem;
    `
    
const servicesBodyL = `
    width: 60%;
    margin-right: 0.7rem;
    margin-left: 1.4rem;
    text-align: left;
    padding-left: 0.6rem;

`

export const ServicesWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const ServicesRow = styled.div`
    ${flexColWrap}
    
`

export const BrandingBox = styled.div`
    ${flexRowWrap};
    margin-top: 1.4rem;

    .services-image {
        ${serviceImageL};
        ${borderStyle};
    }

    .services-body {
        ${servicesBodyR};

        h4 {
            ${headerSecStyled}
        }

        div {
            /* background: red; */
        }

        button {
            margin-top: 2rem;
            border: 2px solid #027353;
        }
    }
`



export const WebDevBox = styled.div`
    ${flexRowWrap};
    margin-top: 1.4rem;
    text-align: left;

    .services-image {
        ${serviceImageR};
    }

    .services-body {
        ${servicesBodyL}

            h4 {
                ${headerSecStyled};
            }
            div {   
            }
    }

`


export const ConsultBox = styled.div`
    ${flexRowWrap};
    margin-top: 1.4rem;

        .services-image {
            ${serviceImageL};
            ${borderStyle};

        }

        .services-body {
            ${servicesBodyR};

                h4 {
                    ${headerSecStyled}
                }

                div {
                    /* background: red; */
                }
        }
`

export const ScalabilityBox = styled.div`
    ${flexRowWrap};
    margin-top: 1.4rem;
    text-align: left;

    .services-image {
        ${serviceImageR};
    }

    .services-body {
        ${servicesBodyL}

            h4 {
                ${headerSecStyled};
            }
            div {   
            }
    }
`

export const DigitalMarketingBox = styled.div`
    ${flexRowWrap};
    margin-top: 1.4rem;

        .services-image {
            ${serviceImageL};
            ${borderStyle};

        }

        .services-body {
            ${servicesBodyR};

                h4 {
                    ${headerSecStyled}
                }

                div {
                    /* background: red; */
                }
        }
`

export const PublishingBox = styled.div`
    ${flexRowWrap};
    margin-top: 1.4rem;
    text-align: left;

    .services-image {
        ${serviceImageR};
    }

    .services-body {
        ${servicesBodyL}

            h4 {
                ${headerSecStyled};
            }
            div {   
            }
    }
`

export const PublishingHeader = styled.div`
`

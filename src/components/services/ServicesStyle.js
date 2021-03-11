import styled, { css } from 'styled-components'
import {
    flexColWrap,
    flexRowWrap,
    borderStyle,
    headerSecStyled,
} from 'AppStyled'


export const ServicesWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const ServicesRow = styled.div`
    margin: 0 auto;
    width: 95%;
    ${flexColWrap};
`

const servicesHeader = `
    color: #023E73;
    font-size: 18px;
`

const servicesImage = `
    margin-bottom: 1.8973rem;
    width: auto;
    height: auto;
`

const servicesBody = `
    text-align: left;
    padding: 1rem;
`

const servicesHeaderSecondary = `
    width: 75%;
`

export const ButtonServices = styled.button`
    margin-top: 2rem;
    border: 2px solid #027353;
`


export const BrandingBox = styled.div`
    ${flexColWrap};

h4 {
    ${servicesHeader}
    margin-top: 1.4rem;
    margin-bottom: 1.234rem;
}

.services-image {
    ${servicesImage};
}

.services-body {
    ${servicesBody};

    h3 {
        ${servicesHeaderSecondary};
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
    }

    .services-body {

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
            ${borderStyle};

        }

        .services-body {

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
    }

    .services-body {

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
            ${borderStyle};

        }

        .services-body {

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
    }

    .services-body {

            h4 {
                ${headerSecStyled};
            }
            div {   
            }
    }
`

export const PublishingHeader = styled.div`
`

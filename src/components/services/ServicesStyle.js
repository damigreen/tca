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
    width: 90%;
    ${flexColWrap};
    margin-bottom: 50px;

    @media only screen and (min-width: 600px) {
        display: grid;
        /* grid-template-columns: 50% 50%; */
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 30% 30%;
        /* column-gap: 10px; */
        /* justify-items: stretch; */
        justify-items: center;
        align-items: stretch;
        justify-content: stretch;
    } 

    /* Large devices (laptops/desktops, 992px and up) */ 
    @media only screen and (min-width: 992px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 50% 50%;
        justify-content: center;
        border: 1px solid red;
    }

`

const servicesHeader = `
    display: none;
    font-size: 18px;
    color: #03658C;
    margin-top: 0.4rem;
    margin-bottom: 1.234rem;
`

const servicesHeaderMobile = `
    display: block;
    letter-spacing: 0.145rem;
    margin-top: 0.564rem;
    margin-bottom: 0.79rem;
`

const servicesImage = `
    margin-top: 2rem;
    margin-bottom: 0.65353rem;
    width: auto;
    height: auto;
`

const servicesBody = `
    margin: 0 1.3rem;
    text-align: left;
    // padding: 1rem;
    // margin-bottom: 7.5rem;
    color: #333;
    text-align: center;
`

const servicesHeaderSecondary = `
    margin: 0 auto;
    width: 75%;
    margin-bottom: 0.983rem;
`

const servicesBodyText = `
    font-size: 16px;
    line-height: 24px;
    // margin-bottom: 3.53rem;
`

const buttonServices = `
    color: #023E73;
    border: 1px solid #02734A;
    font-size: 16px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 30px;
    width: 100%;

`

const iconStyle = `
    // position: absolute;
    // top: 50%;
    // left: 50%;
    transform: translate(-50%,-50%);
    width: 80px;
    height: 60px;
    cursor: pointer;
    color: yellow
`
    
const arrowStyle = `
    color: yellow
    border: 1px solid red;
    position: absolute;
    // top: 25px;
    right: 3px
    width: 90%;
    height: 10px;
    background-color: #fff;
    box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
    animation: arrow 700ms linear infinite;
`

export const ButtonServices = styled.button`
    margin-top: 2rem;
    border: 2px solid #027353;
`



export const BrandingBox = styled.div`
    ${flexColWrap};

    @media only screen and (min-width: 600px) {
        padding: 1.07726rem;
    }


    .services-image {
        ${servicesImage};

        @media only screen and (min-width: 600px) {
            height: 65px;
        }
    }

    .services-body {
        ${servicesBody};

        h4 {
            ${servicesHeader};
            ${servicesHeaderMobile};

            @media only screen and (min-width: 600px) {
                height: 50px;
            }
        }

        div {
            ${servicesBodyText};
            @media only screen and (min-width: 600px) {
                height: auto;
                max-height: 250px;
            }
        }


        button {
            margin-top: 2rem;
            border: 2px solid #027353;
        }

        .btn-services {
            ${buttonServices};
        }

        .icon {
            ${iconStyle};
        }

        .arrow {
            ${arrowStyle};
        }

        .arrow::after, .arrow::before {
            content: '';
            position: absolute;
            width: 60%;
            height: 10px;
            right: -8px;
            background-color: #fff;
        }

        .arrow::after {
            top: -12px;
            transform: rotate(45deg);
        }

        .arrow::before {
            top: 12px;
            box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
            transform: rotate(-45deg);
        }
    }
`



export const WebDevBox = styled.div`
    ${flexColWrap};

    @media only screen and (min-width: 600px) {
        padding: 1.07726rem;
    }

.services-image {
    ${servicesImage};

    @media only screen and (min-width: 600px) {
            height: 65px;
        }
}

.services-body {
    ${servicesBody};

    h4 {
        ${servicesHeader};
        ${servicesHeaderMobile};

        @media only screen and (min-width: 600px) {
            height: 50px;
        }
    }

    div {
        ${servicesBodyText};
        @media only screen and (min-width: 600px) {
                height: auto;
                max-height: 250px;
            }
    }


    button {
        margin-top: 2rem;
        border: 2px solid #027353;
    }

    .btn-services {
        ${buttonServices};
    }

    .icon {
        ${iconStyle};
    }

    .arrow {
        ${arrowStyle};
    }

    .arrow::after, .arrow::before {
        content: '';
        position: absolute;
        width: 60%;
        height: 10px;
        right: -8px;
        background-color: #fff;
    }

    .arrow::after {
        top: -12px;
        transform: rotate(45deg);
    }

    .arrow::before {
        top: 12px;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
        transform: rotate(-45deg);
    }
}
`


export const ConsultBox = styled.div`
    ${flexColWrap};

    @media only screen and (min-width: 600px) {
        padding: 1.07726rem;
    }

    .services-image {
        ${servicesImage};

        @media only screen and (min-width: 600px) {
            height: 65px;
        }
    }

.services-body {
    ${servicesBody};

    h4 {
        ${servicesHeader};
        ${servicesHeaderMobile};

        @media only screen and (min-width: 600px) {
                height: 50px;
        }
    }

    div {
        ${servicesBodyText};

        @media only screen and (min-width: 600px) {
                height: auto;
                max-height: 250px;
            }
    }



    button {
        margin-top: 2rem;
        border: 2px solid #027353;
    }

    .btn-services {
        ${buttonServices};
    }

    .icon {
        ${iconStyle};
    }

    .arrow {
        ${arrowStyle};
    }

    .arrow::after, .arrow::before {
        content: '';
        position: absolute;
        width: 60%;
        height: 10px;
        right: -8px;
        background-color: #fff;
    }

    .arrow::after {
        top: -12px;
        transform: rotate(45deg);
    }

    .arrow::before {
        top: 12px;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
        transform: rotate(-45deg);
    }
}
`

export const ScalabilityBox = styled.div`
    ${flexColWrap};

    @media only screen and (min-width: 600px) {
        padding: 1.07726rem;
    }


    .services-image {
        ${servicesImage};

        @media only screen and (min-width: 600px) {
        height: 65px;
    }
    }

.services-body {
    ${servicesBody};

    h4 {
        ${servicesHeader};
        ${servicesHeaderMobile};

        @media only screen and (min-width: 600px) {
                height: 50px;
        }
    }

    div {
        ${servicesBodyText};

        @media only screen and (min-width: 600px) {
                height: auto;
                max-height: 250px;
        }
    }


    button {
        margin-top: 2rem;
        border: 2px solid #027353;
    }

    .btn-services {
        ${buttonServices};
    }

    .icon {
        ${iconStyle};
    }

    .arrow {
        ${arrowStyle};
    }

    .arrow::after, .arrow::before {
        content: '';
        position: absolute;
        width: 60%;
        height: 10px;
        right: -8px;
        background-color: #fff;
    }

    .arrow::after {
        top: -12px;
        transform: rotate(45deg);
    }

    .arrow::before {
        top: 12px;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
        transform: rotate(-45deg);
    }
}
`

export const DigitalMarketingBox = styled.div`
    ${flexColWrap};

    @media only screen and (min-width: 600px) {
        padding: 1.07726rem;
    }


    .services-image {
        ${servicesImage};

        @media only screen and (min-width: 600px) {
        height: 65px;
    }
    }

.services-body {
    ${servicesBody};

    h4 {
        ${servicesHeader};
        ${servicesHeaderMobile};

        @media only screen and (min-width: 600px) {
                height: 50px;
        }
    }

    div {
        ${servicesBodyText};

        @media only screen and (min-width: 600px) {
                height: auto;
                max-height: 250px;
        }
    }


    button {
        margin-top: 2rem;
        border: 2px solid #027353;
    }

    .btn-services {
        ${buttonServices};
    }

    .icon {
        ${iconStyle};
    }

    .arrow {
        ${arrowStyle};
    }

    .arrow::after, .arrow::before {
        content: '';
        position: absolute;
        width: 60%;
        height: 10px;
        right: -8px;
        background-color: #fff;
    }

    .arrow::after {
        top: -12px;
        transform: rotate(45deg);
    }

    .arrow::before {
        top: 12px;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
        transform: rotate(-45deg);
    }
}
`

export const PublishingBox = styled.div`
    ${flexColWrap};

    @media only screen and (min-width: 600px) {
        padding: 1.07726rem;
    }

    .services-image {
        ${servicesImage};

        @media only screen and (min-width: 600px) {
            height: 65px;
        }
    }

    .services-body {
        ${servicesBody};

        h4 {
            ${servicesHeader};
            ${servicesHeaderMobile};

            @media only screen and (min-width: 600px) {
                height: 50px;
            }

        }

        div {
            ${servicesBodyText};
            @media only screen and (min-width: 600px) {
                height: auto;
                max-height: 250px;
            }
        }


        button {
            margin-top: 2rem;
            border: 2px solid #027353;
        }

        .btn-services {
            ${buttonServices};
        }

        .icon {
            ${iconStyle};
        }

        .arrow {
            ${arrowStyle};
        }

        .arrow::after, .arrow::before {
            content: '';
            position: absolute;
            width: 60%;
            height: 10px;
            right: -8px;
            background-color: #fff;
        }

        .arrow::after {
            top: -12px;
            transform: rotate(45deg);
        }

        .arrow::before {
            top: 12px;
            box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
            transform: rotate(-45deg);
        }
    }
`




// import styled, { css } from 'styled-components'
// import {
//     flexColWrap,
//     flexRowWrap,
//     borderStyle,
//     headerSecStyled,
// } from 'AppStyled'


// export const ServicesWrap = styled.div`
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
// `

// export const ServicesRow = styled.div`
//     margin: 0 auto;
//     width: 95%;
//     width: 90%;
//     ${flexColWrap};
//     /* background-color: #F5F1EE; */
// `

// const servicesHeader = `
//     display: none;
//     font-size: 18px;
//     color: #E9ECE9;
//     color: #C5E7D3;
//     margin-top: 1.4rem;
//     margin-bottom: 1.234rem;
// `

// const servicesHeaderMobile = `
//     display: block;
//     letter-spacing: 0.145rem;
//     margin-top: 0.564rem;
//     margin-bottom: 0.79rem;
// `

// const servicesImage = `
//     margin-top: 2rem;
//     margin-bottom: 1.8973rem;
//     width: auto;
//     height: auto;
// `

// const servicesBody = `
//     // background-color: #024959;
//     // background: linear-gradient(to bottom, #024959 26%, #333300 100%);
//     // background: linear-gradient(0deg, #09203f 0%, #537895 100%);
//     // background:linear-gradient(60deg, #29323c 0%, #485563 100%);
//     // background:linear-gradient(0deg, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
//     background: linear-gradient(0deg, #243949 0%, #517fa4 100%);
//     margin: 0 1.3rem;
//     text-align: left;
//     padding: 1rem;
//     margin-bottom: 7.5rem;
// `

// const servicesHeaderSecondary = `
//     width: 75%;
//     margin-bottom: 0.983rem;
// `

// const servicesBodyText = `
//     font-size: 16px;
//     line-height: 24px;
//     margin-bottom: 3.53rem;
// `

// const buttonServices = `
//     color: #f29f05;
//     border: none
//     font-size: 16px;
//     font-weight: 400;
// `

// const iconStyle = `
//     // position: absolute;
//     // top: 50%;
//     // left: 50%;
//     transform: translate(-50%,-50%);
//     width: 80px;
//     height: 60px;
//     cursor: pointer;
//     color: yellow
//     `
    
//     const arrowStyle = `
//         color: yellow
//         border: 1px solid red;
//         position: absolute;
//         // top: 25px;
//         right: 3px
//         width: 90%;
//         height: 10px;
//         background-color: #fff;
//         box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
//         animation: arrow 700ms linear infinite;
// `

// export const ButtonServices = styled.button`
//     margin-top: 2rem;
//     border: 2px solid #027353;
// `



// export const BrandingBox = styled.div`
//     ${flexColWrap};

//     h4 {
//         ${servicesHeader};
//     }

//     .services-image {
//         ${servicesImage};
//     }

//     .services-body {
//         ${servicesBody};
//         color: #ffffff;

//         h4 {
//             ${servicesHeader};
//             ${servicesHeaderMobile};
//         }

//         h3 {
//             ${servicesHeaderSecondary};
//         }

//         div {
//             ${servicesBodyText};
//         }


//         button {
//             margin-top: 2rem;
//             border: 2px solid #027353;
//         }

//         .btn-services {
//             ${buttonServices};
//         }

//         .icon {
//             ${iconStyle};
//         }

//         .arrow {
//             ${arrowStyle};
//         }

//         .arrow::after, .arrow::before {
//             content: '';
//             position: absolute;
//             width: 60%;
//             height: 10px;
//             right: -8px;
//             background-color: #fff;
//         }

//         .arrow::after {
//             top: -12px;
//             transform: rotate(45deg);
//         }

//         .arrow::before {
//             top: 12px;
//             box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
//             transform: rotate(-45deg);
//         }
//     }
// `



// export const WebDevBox = styled.div`
//     ${flexColWrap};

// h4 {
//     ${servicesHeader};
// }

// .services-image {
//     ${servicesImage};
// }

// .services-body {
//     ${servicesBody};
//     color: #ffffff;

//     h4 {
//         ${servicesHeader};
//         ${servicesHeaderMobile};
//     }

//     h3 {
//         ${servicesHeaderSecondary};
//     }

//     div {
//         ${servicesBodyText};
//     }


//     button {
//         margin-top: 2rem;
//         border: 2px solid #027353;
//     }

//     .btn-services {
//         ${buttonServices};
//     }

//     .icon {
//         ${iconStyle};
//     }

//     .arrow {
//         ${arrowStyle};
//     }

//     .arrow::after, .arrow::before {
//         content: '';
//         position: absolute;
//         width: 60%;
//         height: 10px;
//         right: -8px;
//         background-color: #fff;
//     }

//     .arrow::after {
//         top: -12px;
//         transform: rotate(45deg);
//     }

//     .arrow::before {
//         top: 12px;
//         box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
//         transform: rotate(-45deg);
//     }
// }
// `


// export const ConsultBox = styled.div`
//     ${flexColWrap};

// h4 {
//     ${servicesHeader};
// }

// .services-image {
//     ${servicesImage};
// }

// .services-body {
//     ${servicesBody};
//     color: #ffffff;

//     h4 {
//         ${servicesHeader};
//         ${servicesHeaderMobile};
//     }

//     h3 {
//         ${servicesHeaderSecondary};
//     }

//     div {
//         ${servicesBodyText};
//     }


//     button {
//         margin-top: 2rem;
//         border: 2px solid #027353;
//     }

//     .btn-services {
//         ${buttonServices};
//     }

//     .icon {
//         ${iconStyle};
//     }

//     .arrow {
//         ${arrowStyle};
//     }

//     .arrow::after, .arrow::before {
//         content: '';
//         position: absolute;
//         width: 60%;
//         height: 10px;
//         right: -8px;
//         background-color: #fff;
//     }

//     .arrow::after {
//         top: -12px;
//         transform: rotate(45deg);
//     }

//     .arrow::before {
//         top: 12px;
//         box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
//         transform: rotate(-45deg);
//     }
// }
// `

// export const ScalabilityBox = styled.div`
//  ${flexColWrap};

// h4 {
//     ${servicesHeader};
// }

// .services-image {
//     ${servicesImage};
// }

// .services-body {
//     ${servicesBody};
//     color: #ffffff;

//     h4 {
//         ${servicesHeader};
//         ${servicesHeaderMobile};
//     }

//     h3 {
//         ${servicesHeaderSecondary};
//     }

//     div {
//         ${servicesBodyText};
//     }


//     button {
//         margin-top: 2rem;
//         border: 2px solid #027353;
//     }

//     .btn-services {
//         ${buttonServices};
//     }

//     .icon {
//         ${iconStyle};
//     }

//     .arrow {
//         ${arrowStyle};
//     }

//     .arrow::after, .arrow::before {
//         content: '';
//         position: absolute;
//         width: 60%;
//         height: 10px;
//         right: -8px;
//         background-color: #fff;
//     }

//     .arrow::after {
//         top: -12px;
//         transform: rotate(45deg);
//     }

//     .arrow::before {
//         top: 12px;
//         box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
//         transform: rotate(-45deg);
//     }
// }
// `

// export const DigitalMarketingBox = styled.div`
//  ${flexColWrap};

// h4 {
//     ${servicesHeader};
// }

// .services-image {
//     ${servicesImage};
// }

// .services-body {
//     ${servicesBody};
//     color: #ffffff;

//     h4 {
//         ${servicesHeader};
//         ${servicesHeaderMobile};
//     }

//     h3 {
//         ${servicesHeaderSecondary};
//     }

//     div {
//         ${servicesBodyText};
//     }


//     button {
//         margin-top: 2rem;
//         border: 2px solid #027353;
//     }

//     .btn-services {
//         ${buttonServices};
//     }

//     .icon {
//         ${iconStyle};
//     }

//     .arrow {
//         ${arrowStyle};
//     }

//     .arrow::after, .arrow::before {
//         content: '';
//         position: absolute;
//         width: 60%;
//         height: 10px;
//         right: -8px;
//         background-color: #fff;
//     }

//     .arrow::after {
//         top: -12px;
//         transform: rotate(45deg);
//     }

//     .arrow::before {
//         top: 12px;
//         box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
//         transform: rotate(-45deg);
//     }
// }
// `

// export const PublishingBox = styled.div`
//     ${flexColWrap};

//     h4 {
//         ${servicesHeader};
//     }

//     .services-image {
//         ${servicesImage};
//     }

//     .services-body {
//         ${servicesBody};
//         color: #ffffff;

//         h4 {
//             ${servicesHeader};
//             ${servicesHeaderMobile};
//         }

//         h3 {
//             ${servicesHeaderSecondary};
//         }

//         div {
//             ${servicesBodyText};
//         }


//         button {
//             margin-top: 2rem;
//             border: 2px solid #027353;
//         }

//         .btn-services {
//             ${buttonServices};
//         }

//         .icon {
//             ${iconStyle};
//         }

//         .arrow {
//             ${arrowStyle};
//         }

//         .arrow::after, .arrow::before {
//             content: '';
//             position: absolute;
//             width: 60%;
//             height: 10px;
//             right: -8px;
//             background-color: #fff;
//         }

//         .arrow::after {
//             top: -12px;
//             transform: rotate(45deg);
//         }

//         .arrow::before {
//             top: 12px;
//             box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
//             transform: rotate(-45deg);
//         }
//     }
// `

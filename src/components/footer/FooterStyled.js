import styled from 'styled-components';
// import { flexRowWrap } from 'AppStyled'

export const FooterWrapper = styled.section`
    background-color: #011a1f;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 1.875rem;
    padding-top: 1.875rem;
    padding-right: 1.25rem;
    padding-left: 1.25rem;

`

export const FooterRow = styled.div`
    width: 100%;
    max-width: 90rem;
    margin-left: 1.97rem;
    border: 1px solid white;

    @media only screen and (min-width: 1032px) {

        display: flex;
        flex-direction: row;
        margin: 0 auto;
        width: 100%;
        justify-content: space-between;
        padding: 3rem 1rem;
    }
`

export const FooterCompanyLogo = styled.div`
    display: inline-block;
    padding-top: 0.589rem;
    padding-bottom: 1.1872rem;
`

export const FooterIconsWrap =  styled.div`
    border: 1px solid red;
    color: #FFFFFF;
`

export const FooterNavItems = styled.div`
    display: flex;
    flex-flow: row wrap;
    /* font-size: 24px; */
    color: black;
    line-height: 30px;
    font-weight: bold;
    width: auto;
    text-transform: uppercase;
`

export const FooterNavItem = styled.div`
    width: 50%;


    a {
        font-family: "Mark W01 Bold", sans-serif;
        color: rgb(255, 255, 255);
        font-size: 0.75rem;
        line-height: 2.5;
        letter-spacing: 1.5px;
        position: relative;
        padding-bottom: 1.25rem;
    }
`

export const LocationStyled = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1032px) {
        margin-left: 2rem;
    }
`

export const FooterLocation = styled.div`
    padding-top: 1.5625rem;

        h1 {
            font-family: "Mark W01 Bold", sans-serif;
            font-size: 0.9rem;
            font-weight: 700;
            text-transform: uppercase;
            line-height: 1rem;
            letter-spacing: 0.10625rem;
            /* color: rgb(0, 199, 149); */
            color: #F29F05;
        }
`

export const FooterLocationAddress = styled.div`
    font-size: 1rem;
    line-height: 1.578rem;
    color: rgb(176, 176, 176);
    letter-spacing: 0.18px;

        span {
            display: block;
        }

        a {
            /* color:             */
        }
`

export const FooterLocationMap = styled.div`
    display: flex;
    padding-top: 1.25rem;
    text-transform: uppercase;

        p {
            color: #FFFFFF;
            font-size: 0.75rem;
            padding-top: 0.3rem;
            padding-left: 0.7rem;
            font-weight: 700;
            letter-spacing: 1.5px;
        }
`

export const FooterLocationMapIcon = styled.div`
    color: #00C795 

        img {
            color: #00C795 
        }
`

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
`   
export const FooterColumnSub = styled.div`
    display: flex;
    color: rgb(255, 255, 255);
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 1.875rem;
`

export const FooterSubFormWrap = styled.div`
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    margin: 0 0 1.25rem;
    width: 100%;

`

export const FooterSubForm = styled.div`
    transition: opaciity 250ms easo 0;
    display: block;
    margin-top: 0em;

        label {
            display: block;
            /* color: rgb(0, 199, 149); */
            color: #F29F05;
            /* font-family: "Mark W01 Heavy", sans-serif; */
            font-size: 1rem;
            line-height: 1.875rem;
            margin-top: 0px;
            margin-bottom: 1.25rem;
        }
`

export const FooterSubField = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
        
        div {
            display: flex;
            flex-direction: row;
        }

        input {
            border-width: 2px 0 2px 2px;
            border-style: solid;
            border-color: rgb(176, 176, 176);
            border-radius: 0px;
            border-image: initial;
            font-size: 0.625rem;
            line-height: 1rem;
            letter-spacing: 0.10625rem;
            padding: 0.9375rem 1.25rem;
            width: 90%;
            background-color: inherit;
        }

        button {
            position: relative;
            width: 3.125rem;
            height: 3.125rem;
            min-width: 3.125rem;
            min-height: 3.125rem;
            border: 2px solid rgb(0, 199, 149);
            color: rgb(255, 255, 255);
            cursor: pointer;
            outline: none;
            transition: all 250ms ease 0s;
            background-color: inherit;


                img {
                    color: red;
                    background-color: none;
                }

        }

        p {
            font-size: 0.89rem;
            font-size: 14px;
            margin-top: 1.5478rem;
            display: block;
            width: 60%;
            color: rgb(176, 176, 176);
        }
`

export const FooterMessage = styled.div`
    color: #FFFFFF;

     h1{
        font-weight: 500;
        font-size: 24px;
    }

     p {
        width: 60%;
        margin-top: 1.354rem;
        font-size: 12px;
        font-weight: 400;
        color: #F29F05;
    }
`

export const FooterSocialIconsWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1.9rem;
    width: 90%;
    /* width: 100%; */
    /* border-top: 1px solid #4F4F4F; */
    /* border-bottom: 1px solid #4F4F4F; */
    height: 70px;
    align-items: center;

        a {
            position: relative;
            width: 1.4rem;
            height: 1.4rem;   
        }

        a:first-child {
            margin-left: 0px;
            background-color: #000000;
        }

        a:nth-child(2) {
            background-color: #000000;
            /* margin-left: 20px; */
        }

        a:nth-child(3) {
            background-color: #000000;
            /* margin-left: 20px; */
        }

        a:nth-child(4) {
            /* background-color: #000000; */
            /* margin-left: 20px; */
        }

        a:nth-child(5) {
            background-color: #000000;
            /* margin-left: 20px; */
        }
`

export const FooterItemsClass = styled.div`
    color: #FFFFFF;
    width: 90%;


    @media only screen and (min-width: 1032px) {
        margin-left: 2rem;
        width: 40%;
    }

    .widgetIcon {
        @media only screen and (min-width: 1032px) {
            display: none;
        }
    }
`
export const FooterItemServices = styled.div`
    
`

export const CompanyBoxWrap = styled.div`
    margin: 0;
`

export const CompanyBox = styled.div`
    /* border: 1px solid aqua; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    border-bottom: 1px solid #4F4F4F;
    border-top: 1px solid #4F4F4F;

    @media only screen and (min-width: 1032px) {
        border: none;
        margin: 0;
    }

        div {
            background-color: inherit;
        }

        button {
            background-color: inherit;
            color: #F29F05;
            border:none;
        }

        .plusCompanyWidget {
        }

        .minusCompanyWidget {
            /* background-color: red;       */
            display: none;

        }
`

export const CompanySubBox = styled.div`
    font-size: 12px;
    /* color: #8c8c8c; */
    color: #d9d9d9;

        .company-sub-box {
            display: none;
            text-align: left;
            margin-top: 0.8456rem;
            margin-left: 1.25rem;
            margin-bottom: 0.3456rem;
            border-bottom: white;
            padding-bottom: 0.45rem;

            @media only screen and (min-width: 1032px) {
                border: none;
                display: inline-block;
            }
        }   

        p {
            margin-bottom: 0.12rem;
            padding: 0px;
            margin-top: 0.2rem;
            padding-bottom: 0.21rem;
        }
`

export const ServiceBoxWrap = styled.div`
    margin: 0;
`

export const ServicesBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    border-bottom: 1px solid #4F4F4F;
    border-top: 1px solid #4F4F4F;

    @media only screen and (min-width: 1032px) {
        border: none;
           /* margin: 0; */
    }

        div {
            background-color: inherit;
        }

        button {
            background-color: inherit;
            color: #F29F05;
            border:none;
        }

        .plusServicesWidget {
        }

        .minusServicesWidget {
            /* background-color: red;       */
            display: none;
        }
`

export const ServicesSubBox = styled.div`
    font-size: 12px;
    color: #d9d9d9;
    /* color: #4D4D4D; */

        .services-sub-box {
            display: none;
            text-align: left;
            margin-top: 0.8456rem;
            margin-left: 1.25rem;
            margin-bottom: 0.3456rem;
            border-bottom: white;
            padding-bottom: 0.45rem;

            @media only screen and (min-width: 1032px) {
                border: none;
                display: inline-block;
            }
        }

        p {
            margin-bottom: 0.12rem;
            padding: 0px;
            margin-top: 0.2rem;
            padding-bottom: 0.21rem;
        }
`

export const ProductBoxWrap = styled.div`
    margin: 0;
`

export const ProductsBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    border-bottom: 1px solid #4F4F4F;
    border-top: 1px solid #4F4F4F;

    @media only screen and (min-width: 1032px) {
        border: none;
        margin: 0;
    }

        div {
            background-color: inherit;
        }

        button {
            background-color: inherit;
            color: #F29F05;
            border:none;
        }

        .plusProductsWidget {
            /* background-color: red */
        }

        .minusProductsWidget {
            /* background-color: red;       */
            display: none;
        }
`
export const ProductsSubBox = styled.div    `
    font-size: 12px;
    color: #d9d9d9;

    .products-sub-box { 
        display: none;
        text-align: left;
        margin-top: 0.8456rem;
        margin-left: 1.25rem    ;
        margin-bottom: 0.3456rem;
        border-bottom: white;   
        padding-bottom: 0.45rem;

        @media only screen and (min-width: 1032px) {
            border: none; 
            display: inline-block;
        }
    }

        p {
            margin-bottom: 0.12rem;
            padding: 0px;
            padding-bottom: 0.21rem;
            margin-top: 0.2rem;
        }

`

export const FooterCopyrights = styled.div`
    width: 90%;
    margin: 1.5rem 0.7rem;
    padding: 1rem;


        div {
            text-align: center;
            color: #999999;


            span {
                font-size: 0.8456;
                font-size: 12px;
                text-transform: uppercase;
                color: #FFFFFF;
                margin-left: 1.2rem;
            }

            a {
                color: #999999;
                padding: 0.4rem;
                padding-left: 0.1459;

                    svg {
                        width: 10px;
                        height: 10px;
                    }
            }

        }

`

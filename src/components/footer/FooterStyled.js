import styled from 'styled-components';

export const FooterWrapper = styled.section`
    display: flex;
    /* background-color: #024959; */
    background-color: #011a1f;
    border: 1px solid green;
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
    border: 1px solid green;
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
    width: 100%;

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
            width: 100%;
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
            display: block;
            width: 100%;
            color: rgb(176, 176, 176);
        }
`

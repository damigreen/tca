import styled from 'styled-components';

export const FooterWrapper = styled.section`
    display: flex;
    background-color: #024959;
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
    border: 1px solid red;
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
            color: rgb(0, 199, 149);
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
    border: 1px solid red;
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
    border: 1px solid red;
`
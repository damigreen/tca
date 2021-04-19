import styled from 'styled-components';
import {
    // borderStyle,
    // flexRowWrap,
    flexColWrap,
} from 'AppStyled';


export const PortfolioWrapper = styled.div`
    /* border: 1px solid red; */
    margin-bottom: 34px;
`
export const PortfolioRow = styled.div`

    .portfolio-header {
        color: #013440;
        font-size: 34px;
        margin-top: 100px;
        margin: 0 auto;
        width: 80%;
    }

    .portfolio-category {
        margin: 0 auto;
        width: 88.5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        justify-self: center;
        flex-wrap: wrap;
        margin-top: 2rem;
        margin-bottom: 1.2rem;
        padding-top: 1.673rem;

        

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 1.09rem;
            padding: 12px;
            height: 4.045vh;
            margin-bottom: 4.6px;
            font-size: 14px;
            font-weight: 400;
            margin-top: 4.5px;
            border: 1px solid #024959;
            text-transform: uppercase;
            color: #333;
            /* background-color: #023e73; */
        }

        a:active {
            background-color: red;
        }
    }

    .project-wrap {
        ${flexColWrap};

        @media only screen and (min-width: 600px) {
            display: grid;  
            /* grid-gap: 5px;   */
            /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
            /* grid-template-columns: 1fr 1fr 1fr; */
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 25% 25%;
        }

        @media only screen and (min-width: 1024px) {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 35% 35%;
            margin: 0 auto;
            width: 75%;
        }

        article {
            margin-left: 1.176rem;
            margin-right: 1.176rem;
            margin-bottom: 3.9rem;
            box-shadow: rgb(0 0 0 / 10%) 0px 10px 19px 0px;
            
            a {
                color: #333;
                
                .portfolio-img {
                    margin: 0 auto;
                    align-self: center;

                    img {
                        width: 100%;
                        height: auto;
                        /* height: 250px; */
                    }

                }

                .project-header {
                    text-align: left;
                    margin-top: 2rem;
                    margin-left: 1.9rem;
                    padding: 1px 2px 1px 7px;
                    font-size: 1.39rem;
                    font-weight: 900;
                    font-size: 1.39rem;
                    letter-spacing: 1px;
                    font-weight: 500;
                    /* color: #4b4b4b; */
                }

                .project-text {
                    line-height: 32px;
                    text-align: left;
                    padding: 1px 2px 1px 7px;
                    margin-left: 1.9rem;
                    font-size: 1.234rem;
                    padding: 1rem 0.45rem;
                    /* background-color: red; */
                }
            }
        }
    }
`

import styled from 'styled-components';
import {
    borderStyle,
    flexRowWrap,
    flexColWrap,
} from 'AppStyled';


export const PortfolioWrapper = styled.div`
    /* border: 1px solid red; */
    margin-bottom: 34px;
`
export const PortfolioRow = styled.div`

    .portfolio-category {
        margin: 0 auto;
        width: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        div {
            border: 1px solid green;
        }

    }

    .project-wrap {
        ${flexColWrap};

        article {
            margin-left: 1.176rem;
            margin-right: 1.176rem;
            margin-bottom: 3.9rem;
            
            a {
                color: #333;
                
                .portfolio-img {
                    margin: 0 auto;
                    border: 1px solid red;
                    align-self: center;
                    height: 230px;

                    img {
                        width: 100%;
                        height: auto;
                    }

                }

                .project-header {
                    text-align: left;
                    margin-top: 2rem;
                    margin-left: 1.9rem;
                    padding: 1px 2px 1px 7px;
                    font-size: 1.39rem;
                    font-size: 22px;
                    letter-spacing: 1px;
                    font-weight: 500;
                    color: #4b4b4b;
                }

                .project-text {
                    line-height: 32px;
                    text-align: left;
                    padding: 1px 2px 1px 7px;
                    margin-left: 1.9rem;
                    font-size: 1.39rem;
                    font-size: 22px;
                }
            }
        }
    }
`

import { borderStyle } from 'AppStyled';
import styled, { css } from 'styled-components';


const noIconBorder = `
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #cccccc;
    color: #ffffff;
`

export const ContactWrapper = styled.div`
    background-color: #A1ACB3;
    border-top: 1px solid gray;
`

export const ContactIntro = styled.div`
    padding: 20px;
    text-align: left;
    margin: 7px 5px;

    h3.partner-heading {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 30px;
    }

    p {
        font-size: 1.177rem;
    }
`

export const ContactRow = styled.div`
    text-align: left;
    padding: 30px;

    h3 {
        text-align: center;
    }


    form {
        margin-top: 45px;
    }

    .form-group {
        display: flex;
    }

    .form-icon {
        /* margin-right: 20px; */
        display: block;
        /* width: 100%; */
        height: calc(1.5em + .75rem + 2px);
        padding: .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }


    .form-name {
        ${noIconBorder}
    }

    .form-email {
        ${noIconBorder}
    }

    .form-phone {
        ${noIconBorder}
    }

    .form-company {
        ${noIconBorder}
    }

    .form-message {
        ${noIconBorder}
    }
`

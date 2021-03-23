import styled, { css } from 'styled-components';


const noIconBorder = `
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #cccccc;
    color: #ffffff;
`

export const ContactWrapper = styled.div`
    /* background-color: #011b32; */
    /* background-color: #d3d3d3; */
    /* background-color: #cccccc; */
    background-color: #A1ACB3;
    border-top: 1px solid gray;
`
export const ContactRow = styled.div`
    text-align: left;
    padding:50px;

    h1 {
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
        /* ${noIconBorder} */
    }
`

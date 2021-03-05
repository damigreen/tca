import React, { Component } from 'react'
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';

const borderBox = styled.div`
    border: 1px solid red;
`

const DivBox = styled.div`
    ${borderBox}
`

class TestComponent extends Component {

    render() {

        return(
            <div>
                <h1>TEST</h1>
                <Row>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>

                    <DivBox>
                        <div>Styled componets variables</div>                
                    </DivBox>
                </Row>
            </div>
        )
    }
}

export default TestComponent;

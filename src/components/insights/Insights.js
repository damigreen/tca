import React from 'react';
import { 
  InsightRow,
  InsightWrapper,
} from "./InsightStyled";
import {
  DividerLine,
  MainHeader,
  PrimaryHeader,
} from 'AppStyled';




const Insights = () => {

  return (
    <div>
      <InsightWrapper>
        <MainHeader>Insights</MainHeader>
        <PrimaryHeader>Latest at TCA</PrimaryHeader>

        <InsightRow>
          <div className="latest-col">
            <a className="latest-link">
              <div className="image-wrapper">
                <div className="latest-image">

                </div>
              </div>
            </a>
          </div>

          <div className="latest-col">
            <a className="latest-link">
              <div className="image-wrapper">
                <div className="latest-image">
                  
                </div>
              </div>
            </a>
          </div>

          <div className="latest-col">
            <a className="latest-link">
              <div className="image-wrapper">
                <div className="latest-image">
                  
                </div>
              </div>
            </a>
          </div>

        </InsightRow>
      </InsightWrapper>

    </div>
  )
}

export default Insights;

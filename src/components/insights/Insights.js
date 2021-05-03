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
    // <div>
      <InsightWrapper>
        {/* <MainHeader>Insights</MainHeader> */}
        <PrimaryHeader>Latest at TCA</PrimaryHeader>

        <InsightRow>
          <div className="latest-col">
            <a className="latest-link">
              <div className="image-wrapper">
                <div className="latest-image">
                </div>
              </div>

                <p className="article-type">article</p>
                <h3 className="article-title">Monthly Digest: Keeping up with TCA</h3>
                <p className="article-author">By Abiola Yomi</p>
            </a>
          </div>

          <div className="latest-col">
            <a className="latest-link">
              <div className="image-wrapper">
                <div className="latest-image">
                  
                </div>
              </div>

              <p className="article-type">article</p>
                <h3 className="article-title">Monthly Digest: Keeping up with TCA</h3>
                <p className="article-author">By Abiola Yomi</p>
            </a>
          </div>

          <div className="latest-col">
            <a className="latest-link">
              <div className="image-wrapper">
                <div className="latest-image">
                  
                </div>
              </div>

              <p className="article-type">article</p>
                <h3 className="article-title">Monthly Digest: Keeping up with TCA</h3>
                <p className="article-author">By Abiola Yomi</p>
            </a>
          </div>

        </InsightRow>
      </InsightWrapper>

    // </div>
  )
}

export default Insights;

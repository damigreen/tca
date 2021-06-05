import React from 'react';
import { 
  InsightRow,
  InsightWrapper,
} from "./InsightStyled";
import {
  PrimaryHeader,
} from 'AppStyled';
import { BrowserRouter as Router, Link, Route, } from 'react-router-dom';


const Insights = () => {

  // top
  return (
    <div>
      <InsightWrapper>
        <PrimaryHeader>Latest at TCA</PrimaryHeader>

        <InsightRow>
          <div className="latest-col">
            <Link to="/insights/keeping-up-with-tca" className="latest-link">
              <div className="image-wrapper">
                <div className="latest-image april">
                </div>
              </div>

                <p className="article-type">article</p>
                <h3 className="article-title">Keeping up with TCA: April Digest</h3>
                <p className="article-author">By Abiola Yomi</p>
            </Link>
          </div>

          <div className="latest-col">
            <Link to="/insights/keeping-up-with-tca/may-digest" className="latest-link">
              <div className="image-wrapper img-may">
                <div className="latest-image may">  
                </div>
              </div>

              <p className="article-type">article</p>
                <h3 className="article-title">Keeping up with TCA: May Digest</h3>
                <p className="article-author">By Abiola Yomi</p>
            </Link>
          </div>

          {/* <div className="latest-col">
            <a className="latest-link">
              <div className="image-wrapper">
                <div className="latest-image">
                  
                </div>
              </div>

              <p className="article-type">article</p>
                <h3 className="article-title">Monthly Digest: Keeping up with TCA</h3>
                <p className="article-author">By Abiola Yomi</p>
            </a>
          </div> */}

        </InsightRow>

      </InsightWrapper>

    </div>
  )
}

export default Insights;

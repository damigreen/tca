import React from 'react';
import { 
  InsightRow,
  InsightWrapper,
  InsightPattern,
  InsightPageSection,
} from "./InsightStyled";
import {
  DividerLine,
  MainHeader,
  PrimaryHeader,
} from 'AppStyled';
import InsightPage from './InsightPage';
import { BrowserRouter as Router, Link, Route, } from 'react-router-dom';
import Navigation from '../header/Navigation';


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
                <div className="latest-image">
                </div>
              </div>

                <p className="article-type">article</p>
                <h3 className="article-title">Monthly Digest: Keeping up with TCA</h3>
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
          </div> */}

        </InsightRow>

      </InsightWrapper>

    </div>
  )
}

export default Insights;

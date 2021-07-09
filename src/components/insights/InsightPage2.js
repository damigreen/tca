import React from 'react';
import {
  InsightPageWrapper,
  InsightRow,
  InsightPattern,
} from './InsightPageStyled';
import Navigation from '../header/Navigation';
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareCount,
} from "react-share";
import Insights from './Insights';

const InsightPage1 = () => {
  const subImage = "../../../images/insight-sub-image2.jpeg";
  const shareUrl = "www.thecreativetca.com/insights/keeping-up-with-tca/june-digest";
  const title = "Keeping up with TCA: June Digest";


  return (
    <InsightPageWrapper>
      <Navigation />
      
      <InsightPattern>
        <div className="insight-gradient bg-june">
          <div className="insight-main-heading">                                                                                                                                                                                                  
            <h1>Insights</h1>
          </div>
        </div>
      </InsightPattern>


      <InsightRow>
        <div insight-bar>
          <div className="insight-hero june">
            <h2 className="insight-hero-text">The <span style={{backgroundColor: "#F2A32E", padding: '0 0.7rem'}}>Creative</span> Agency Monthly Digest</h2>
          </div>
        </div>
        <div className="insight-wrap">
          <div className="insight-content">
            <h2 className="insight-title">Keeping up with TCA: June Digest</h2>
            At The Creative Agency, the month of June played out as an interlude. With minimal
            activity on the front end (social media), the brand nonetheless moved to its official domain
            www.thecreativetca.com at the tail end of the month of June. <br />
            <h2 className="insight-title">What is in the works currently at The Creative Agency</h2>
            <div className="insight-image">
              <img className="insight-image-responsive" src={subImage} alt="Image for section of the page"/>
            </div>
            <div>
            The adventure continues at the backend with tasks revolving around product development,
            engagement models, market acquisition etc.
            July signifies the second half of the year and the TCA team is optimistic for this second
            phase as we bid to attain our resolutions and outstanding goals for the year 2021!
            </div>
          </div>

          <div className="insight-footer">
            <p className="insight-author">by Abiola Yomi</p>
            <div className="insight-socials">
              <a className="share-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                </svg>
              </a>
              <FacebookShareButton
                url={shareUrl}
                title={title}
                className="share-icon"
              >
                <FacebookShareCount url={shareUrl}>
                  {/* {shareCount => <span className="myShareCountWrapper">{shareCount}</span>} */}
                  {shareCount => <span className="myShareCountWrapper">{console.log(shareCount)}</span>}
                </FacebookShareCount>
                <FacebookIcon size={20} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={shareUrl}
                title={title}
                className="share-icon"
              >
                <a className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <TwitterIcon size={20} round/>
              </TwitterShareButton>

              <LinkedinShareButton
                url={shareUrl}
                title={title}
                className="share-icon"
              >
                <a className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <LinkedinIcon size={20} round />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
      </InsightRow>

      <Insights />

    </InsightPageWrapper>
  )
}

export default InsightPage1;

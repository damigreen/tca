import React, { useLayoutEffect } from 'react';
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
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  const subImage = "../../../images/insight-sub-image1.jpeg";
  const shareUrl = "www.thecreativetca.com/insights/keeping-up-with-tca/may-digest";
  const title = "Keeping up with TCA: May Digest";


  return (
    <InsightPageWrapper>
      <Navigation />
      
      <InsightPattern>
        <div className="insight-gradient bg-may">
          <div className="insight-main-heading">
            <h1>Insights</h1>
          </div>
        </div>
      </InsightPattern>


      <InsightRow>
        <div insight-bar>
          <div className="insight-hero may">
            <h2 className="insight-hero-text">The <span style={{backgroundColor: "#F2A32E", padding: '0 0.7rem'}}>Creative</span> Agency Monthly Digest</h2>
          </div>
        </div>
        <div className="insight-wrap">
          <div className="insight-content">
            <h2 className="insight-title">Keeping up with TCA: May Digest</h2>
            As we drew the curtains in April, May began with a bit of publicity towards our first major activity since the official launch. Feeding off the momentum gathered in April, The Creative Agency waxed stronger with a campaign tagged: “TCA DATA GIG-AWAY (VOL 1)” which took place on the 7th of May, 2021.<br/><br/>
            The campaign represents an appreciation of the support received since our official launch
            and our little way of giving value back to the public. Another objective here was to provide
            exposure and awareness to the products/services on offer by various brands, businesses &
            creative individuals. We were able to achieve this with the 3 partners we had for the
            campaign, promoting and marketing their products/services to our WhatsApp audience.
            The campaign officially launched our WhatsApp platform as it took place exclusively on
            WhatsApp. Add us on WhatsApp <a href="https://wa.link/2pp4ll">here</a><br/><br/>
            As we progressed further into the first quarter of May (10th precisely), TCA officially
            clocked 1 month! In celebration of our 1 month anniversary, we had another post-launch
            activity which was the installment of a new feature tagged "Keeping Up With TCA".<br/><br/>
            This feature is a monthly newsletter that provides a summary and quick digest of all the
            activities carried out by The Creative Agency on a monthly basis.<br/><br/>
            You can visit our official Instagram account to catch up on the highlights of our campaign
            and most recent activities <a href="instagram.com/thecreativeagency_tca">here.</a>
            <h2 className="insight-title">What is in the works currently at The Creative Agency</h2>
            <div className="insight-image">
              <img className="insight-image-responsive" src={subImage} alt="Image for section of the page"/>
            </div>
            <div>
              The Creative Agency currently has backend work ongoing. We are preparing to launch our
              official website while settling offline registrations with regulatory bodies to name a few.
              TCA would also be hitting the road to meet up with preselected businesses & services with
              the objective of helping them transit online.
              Lastly, sometime around June, a contest would be coming up with more info in the coming
              weeks!
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

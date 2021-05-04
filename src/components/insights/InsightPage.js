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

const InsightPage = () => {
  const subImage = "../../../images/insight-sub-image.jpeg";
  const shareUrl = "https://thecreativeagency.netlify.app/insights/keeping-up-with-tca";
  const title = "Keeping up with TCA: April";


  return (
    <InsightPageWrapper>
      <Navigation />
      
      <InsightPattern>
        <div className="insight-gradient">
          <div className="insight-main-heading">
            <h1>Insights</h1>
          </div>
        </div>
      </InsightPattern>


      <InsightRow>
        <div insight-bar>
          <div className="insight-hero">
            <h2 className="insight-hero-text">The <span style={{backgroundColor: "#F2A32E", padding: '0 0.7rem'}}>Creative</span> Agency Monthly Digest</h2>
          </div>
        </div>
        <div className="insight-wrap">
          <div className="insight-content">
            <h2 className="insight-title">Keeping up with TCA: April</h2>
            The Creative Agency is a company with a mandate to fast-track creatives, brands & SMEs to their business goals through unique branding, marketing and advertising. The Creative Agency also referred to as TCA officially launched publicly on the 10th of April, 2021.
            While on the road to launch, TCA had a 10-Day countdown which kicked off 31st March and
            ran through April till the launch date stipulated 10th April. The countdown created a lot of
            buzz on social media as it was widely anticipated and received. This course of events led to
            the official launch of “The Creative Agency” brand.
            You can visit our official Instagram account to catch up on how the brand’s official launch
            went down <a href="instagram.com/thecreativeagency_tca"><b>here</b></a>

            <h2 className="insight-title">What is in the works currently at The CreativeAgency</h2>
            <div className="insight-image">
              <img className="insight-image-responsive" src={subImage} alt="Image for section of the page"/>
            </div>
            <div>
              In appreciation of the support received since our official launch, we are set to unveil a campaign tagged: <b>“TCA DATA GIG-AWAY 🎉"</b> <br />
              The campaign is about appreciation & giving value back to the public. It is basically a data
              giveaway, however, through this campaign, we intend to showcase brands and businesses
              that will be partnering with us.
              This way, we are bringing to fore, some of our services which includes marketing and
              providing needed exposure/awareness to brands and businesses.
              The ‘TCA Data Gig-Away’ campaign is scheduled for 7th May, accompanied by an
              announcement via The Creative Agency’s social media platforms.
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

export default InsightPage;

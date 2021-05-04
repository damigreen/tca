import React from 'react';
import {
  InsightPageWrapper,
  InsightRow,
} from './InsightPageStyled';
import Navigation from '../header/Navigation'


const InsightPage = () => {
  const subImage = "../../../images/insight-sub-image.jpeg";

  return (
    <InsightPageWrapper>
      <Navigation />
      <InsightRow>
        <div insight-bar>
          <div className="insight-hero">
            <h2 className="insight-hero-text">The Creative Agency Monthly Digest</h2>
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
        </div>
      </InsightRow>

    </InsightPageWrapper>
  )
}

export default InsightPage;

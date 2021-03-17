import React from 'react';
import {
  PortfolioWrapper,
  PortfolioRow,
} from './StyledPortfolio';




const Portfolio = () => {
  const teamBereImage = '../projects/team-bere-mobile.png';
  const allYouCanEat = '../projects/all-you-can-eat-mobile.png';
  const bolaCateringService = '../projects/bola-catering-service-mobile.png';
  const mercyfc = '../projects/mercyfc-mobile.png';
  const soccerMatch = '../projects/soccer-match-mobile.png';
  const allYouCanEat1 = '../projects/all-you-can-eat1-mobile.png';
  const nhb = '../projects/nhb-mobile.png';
  const nhb1 = '../projects/nhb1-mobile.png';

  


  return (
    <PortfolioWrapper>
      <PortfolioRow>
        <div className="portfolio-content">
          <h1 className="portfolio-header">Our Projects</h1>
          <div className="portfolio-category">
            <a href="#">All</a>
            <a href="#">Branding</a>
            <a href="#">Web Development</a>
            <a href="#">Consultancy</a>
            <a href="#">Design</a>
            <a href="#">Portfolio</a>
          </div>


          <div className="project-wrap">
            <article>
              <a className="project-link" href="#">
                <div className="portfolio-img">
                  <img src={teamBereImage} alt="team bere project image"  />
                </div>
                <div>
                  <h4 className="project-header">Team Bere</h4>
                  <div className="project-text">is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </a>
            </article>
    
            <article>
              <a className="project-link" href="#">
                <div className="portfolio-img">
                  <img src={allYouCanEat} alt="team bere project image" />
                </div>
                <div>
                  <h4 className="project-header">All you can eat</h4>
                  <div className="project-text">is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </a>
            </article>

            <article>
              <a className="project-link" href="#">
                <div className="portfolio-img">
                  <img src={bolaCateringService} alt="team bere project image" />
                </div>
                <div>
                  <h4 className="project-header">Bola catering services</h4>
                  <div className="project-text">is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </a>
            </article>

            <article>
              <a className="project-link" href="#">
                <div className="portfolio-img">
                  <img src={mercyfc} alt="team bere project image" />
                </div>
                <div>
                  <h4 className="project-header">Mercy FC</h4>
                  <div className="project-text">is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </a>
            </article>

            <article>
              <a className="project-link" href="#">
                <div className="portfolio-img">
                  <img src={soccerMatch} alt="team bere project image" />
                </div>
                <div>
                  <h4 className="project-header">Soccer Match</h4>
                  <div className="project-text">is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </a>
            </article>

            <article>
              <a className="project-link" href="#">
                <div className="portfolio-img">
                  <img src={nhb} alt="team bere project image" />
                </div>
                <div>
                  <h4 className="project-header">NHB</h4>
                  <div className="project-text">is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </a>
            </article>

            <article>
              <a className="project-link" href="#">
                <div className="portfolio-img">
                  <img src={allYouCanEat1} alt="team bere project image" />
                </div>
                <div>
                  <h4 className="project-header">All you can eat</h4>
                  <div className="project-text">is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </a>
            </article>

            <article>
              <a className="project-link" href="#">
                <div className="portfolio-img">
                  <img src={nhb1} alt="team bere project image" />
                </div>
                <div>
                  <h4 className="project-header">NHB</h4>
                  <div className="project-text">is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </a>
            </article>

          </div>
        </div>
      </PortfolioRow>
        
     </PortfolioWrapper>
  )
}

export default Portfolio;

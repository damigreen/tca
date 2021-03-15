import React from 'react';
import {
  PortfolioWrapper,
  PortfolioRow,
} from './StyledPortfolio';





const Portfolio = () => {
  // const teamBereImage = '../projects/team-bere.png';
  const teamBereImage = '../projects/team-bere-mobile.png';
  // const teamBereImage = '../projects/team-bere-mobile.png';
  // const teamBereImage = '../projects/team-bere-mobile.png';
  // const teamBereImage = '../projects/team-bere-mobile.png';
  // const teamBereImage = '../projects/team-bere-mobile.png';
  // const teamBereImage = '../projects/team-bere-mobile.png';
  // const teamBereImage = '../projects/team-bere-mobile.png';
    
  return (
    <PortfolioWrapper>
      <PortfolioRow>
        <div className="portfolio-content">
          <h1 className="portfolio-header">Our Projects</h1>
          <div className="portfolio-category">
            <div>All</div>
            <div>Branding</div>
            <div>Web Development</div>
            <div>Consultancy</div>
            <div>Design</div>
            <div>Portfolio</div>
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
                  <img src={teamBereImage} alt="team bere project image" />
                </div>
                <div>
                  <h4 className="project-header">Team bere</h4>
                  <div className="project-text">is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </a>
            </article>

            <article>
              <a className="project-link" href="#">
                <div className="portfolio-img">
                  <img src={teamBereImage} alt="team bere project image" />
                </div>
                <div>
                  <h4 className="project-header">Team bere</h4>
                  <div className="project-text">is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </a>
            </article>

            <article>
              <a className="project-link" href="#">
                <div className="portfolio-img">
                  <img src={teamBereImage} alt="team bere project image" />
                </div>
                <div>
                  <h4 className="project-header">Team bere</h4>
                  <div className="project-text">is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </a>
            </article>

            <article>
              <a className="project-link" href="#">
                <div className="portfolio-img">
                  <img src={teamBereImage} alt="team bere project image" />
                </div>
                <div>
                  <h4 className="project-header">Team bere</h4>
                  <div className="project-text">is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </a>
            </article>

            <article>
              <a className="project-link" href="#">
                <div className="portfolio-img">
                  <img src={teamBereImage} alt="team bere project image" />
                </div>
                <div>
                  <h4 className="project-header">Team bere</h4>
                  <div className="project-text">is simply dummy text of the printing and typesetting industry.</div>
                </div>
              </a>
            </article>

            <article>
              <a className="project-link" href="#">
                <div className="portfolio-img">
                  <img src={teamBereImage} alt="team bere project image" />
                </div>
                <div>
                  <h4 className="project-header">Team bere</h4>
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

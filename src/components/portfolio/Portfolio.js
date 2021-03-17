import React from 'react';
import {
  PortfolioWrapper,
  PortfolioRow,
} from './StyledPortfolio';




const Portfolio = () => {
  const portfolioList = [
    {
      name: 'Team Bere',
      description: '',
      images: ['../projects/team-bere-mobile.png'],

    },
    {
      name: 'All You Can Eat',
      description: '',
      images: ['../projects/all-you-can-eat-mobile.png'],

    },
    {
      name: 'Bola Catering Services',
      description: '',
      images: ['../projects/bola-catering-service-mobile.png'],

    },
    {
      name: 'Mercy FC',
      description: '',
      images: ['../projects/mercyfc-mobile.png'],

    },
    {
      name: 'Soccer Match',
      description: '',
      images: ['../projects/soccer-match-mobile.png'],

    },
    {
      name: 'Cupid Cakes',
      description: '',
      images: ['../projects/all-you-can-eat1-mobile.png'],

    },
    {
      name: 'NHB',
      description: '',
      images: ['../projects/nhb-mobile.png', '../projects/nhb1-mobile.png'],

    },
  ]


  return (
    <PortfolioWrapper>
      <PortfolioRow>
        <div className="portfolio-content">
          <h1 className="portfolio-header">Our Projects</h1>
          <div className="portfolio-category">
            <a className="portfolio-categrory active" href>All</a>
            <a className="portfolio-categrory" href>Branding</a>
            <a className="portfolio-categrory" href>Web Development</a>
            <a className="portfolio-categrory" href>Consultancy</a>
            <a href>Design</a>
            <a href>Portfolio</a>
          </div>


          <div className="project-wrap">
            <article>
              <a className="project-link" href="#">
                <div className="portfolio-img">
                  <img src={portfolioList[0].images[0]} alt="team bere project image"  />
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
                  <img src={portfolioList[1].images[0]} alt="All you can eat project image"  />
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
                  <img src={portfolioList[2].images[0]} alt="Bola catering services project image"  />

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
                  <img src={portfolioList[3].images[0]} alt="Mercy FC project image"  />

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
                  <img src={portfolioList[4].images[0]} alt="Soccer match project image"  />

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
                  <img src={portfolioList[6].images[0]} alt="NHB project image"  />

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
                  <img src={portfolioList[5].images[0]} alt="Cupid Cakes project image"  />
                </div>
                <div>
                  <h4 className="project-header">Cupid Cakes</h4>
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

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
      categories:  ['branding', 'design', 'consultancy']
    },
    {
      name: 'All You Can Eat',
      description: '',
      images: ['../projects/all-you-can-eat-mobile.png'],
      categories:  ['branding', 'portfolio', 'design']
    },
    {
      name: 'Bola Catering Services',
      description: '',
      images: ['../projects/bola-catering-service-mobile.png'],
      categories:  ['branding', 'design']
    },
    {
      name: 'Mercy FC',
      description: '',
      images: ['../projects/mercyfc-mobile.png'],
      categories: ['branding', 'consultancy', 'design']
    },
    {
      name: 'Soccer Match',
      description: '',
      images: ['../projects/soccer-match-mobile.png'],
      categories: ['consultancy', 'design']
    },
    {
      name: 'Cupid Cakes',
      description: '',
      images: ['../projects/all-you-can-eat1-mobile.png'],
      categories: ['branding', 'design']
    },
    {
      name: 'NHB',
      description: '', 
      images: ['../projects/nhb-mobile.png', '../projects/nhb1-mobile.png'],
      categories: ['branding', 'consultancy']
    },
    {
      name: 'Rayckan Herbal Healthcare',
      description: '',
      images: [],
      categories: ['web development', 'branding', 'portfolio']
    },
    {
      name: 'Blog Keep',
      description: '',
      images: [],
      categories: ['web development', 'branding', 'design']
    },
  ]

  const filterAll = () => {
    //   portfolioList.map(port => {
    //   const portCartegory = port.categories;
    //   const brand = portCartegory.find(cat => cat === 'branding');
    //   console.log(brand);
    // })

    const brandPort = () => {
      return portfolioList.filter(portBrand => {
        portBrand.categories.map(c => c === 'branding');
      });
    }

    console.log(brandPort());

    return 1;
  }
  
  
  return (
    <PortfolioWrapper>
      <PortfolioRow>
        <div className="portfolio-content">
          <h1 className="portfolio-header">Our Projects</h1>
          <div className="portfolio-category">
            <a className="portfolio-categrory active" href onClick={filterAll}>All</a>
            <a className="portfolio-categrory" href onClick>Branding</a>
            <a className="portfolio-categrory" href onClick>Web Development</a>
            <a className="portfolio-categrory" href onClick>Consultancy</a>
            <a className="portfolio-categrory" href onClick>Design</a>
            <a className="portfolio-categrory" href onClick>Portfolio</a>
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

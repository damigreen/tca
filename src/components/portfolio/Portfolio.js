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
      categories:  ['branding', 'design', 'consultancy'],
      description: 'is simply dummy text of the printing and typesetting industry.'
    },
    {
      name: 'All You Can Eat',
      description: '',
      images: ['../projects/all-you-can-eat-mobile.png'],
      categories:  ['branding', 'portfolio', 'design'],
      description: 'is simply dummy text of the printing and typesetting industry.'
    },
    {
      name: 'Bola Catering Services',
      description: '',
      images: ['../projects/bola-catering-service-mobile.png'],
      categories:  ['branding', 'design'],
      description: 'is simply dummy text of the printing and typesetting industry.'
    },
    {
      name: 'Mercy FC',
      description: '',
      images: ['../projects/mercyfc-mobile.png'],
      categories: ['branding', 'consultancy', 'design'],
      description: 'is simply dummy text of the printing and typesetting industry.'
    },
    {
      name: 'Soccer Match',
      description: '',
      images: ['../projects/soccer-match-mobile.png'],
      categories: ['consultancy', 'design'],
      description: 'is simply dummy text of the printing and typesetting industry.'
    },
    {
      name: 'Cupid Cakes',
      description: '',
      images: ['../projects/all-you-can-eat1-mobile.png'],
      categories: ['branding', 'design'],
      description: 'is simply dummy text of the printing and typesetting industry.'
    },
    {
      name: 'NHB',
      description: '', 
      images: ['../projects/nhb-mobile.png', '../projects/nhb1-mobile.png'],
      categories: ['branding', 'consultancy'],
      description: 'is simply dummy text of the printing and typesetting industry.'
    },
    {
      name: 'Rayckan Herbal Healthcare',
      description: '',
      images: [],
      categories: ['web development', 'branding', 'portfolio'],
      description: 'is simply dummy text of the printing and typesetting industry.'
    },
    {
      name: 'Blog Keep',
      description: '',
      images: [],
      categories: ['web development', 'branding', 'design'],
      description: 'is simply dummy text of the printing and typesetting industry.'
    },
  ]

  const filterAll = () => {
      portfolioList.map(port => {
      const portCartegory = port.categories;
      const brand = portCartegory.find(cat => cat === 'portfolio') ? port : 'yes';
      console.log(brand);

      return (
        <div>
          {brand}
        </div>
      )
    })    
  }


  const portfolioData = () => {
    const x = portfolioList.map(port => {
      const projectName = port.name;
      const projectDesc = port.description;
      const projectImage = port.images;
      console.log(projectImage)

        return (
          <article>
              <a className="project-link" href="#">
                <div className="portfolio-img">
                  <img src={projectImage[0]} alt="team bere project image"  />
                </div>
                <div>
                  <h4 className="project-header">{projectName}</h4>
                  <div className="project-text">{projectDesc}</div>
                </div>
              </a>
            </article>
        )
    })
    return x;
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
            {portfolioData()}
          </div>
        </div>
      </PortfolioRow>
        
     </PortfolioWrapper>
  )
}

export default Portfolio;

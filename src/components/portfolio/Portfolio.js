import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  PortfolioWrapper,
  PortfolioRow,
} from './StyledPortfolio';


const Portfolio = () => {
  const [portfolioList, setPortfolioList] = useState([]);

  const portfolioUrl = "../../../portfolioData.json"

  useEffect(() => {
    axios.get(portfolioUrl)
      .then(result => {
        setPortfolioList(result.data)
        console.log(result);
      });
  }, []);
  


  const filterAll = (cat) => {
      setPortfolioList(portfolioList);
      let filteredList = [];

      for (var i = 0; i < portfolioList.length; i++) {
        const projectCategories = portfolioList[i].categories;
        const catLen = projectCategories.length;
        
        for (var j = 0; j < catLen; j++) {
          // if (projectCategories[j] === 'branding') {
            console.log(cat);
            if (projectCategories[j] === cat) {
              filteredList.push(portfolioList[i]);
              setPortfolioList(filteredList);
          }
        }
      }
      console.log(filteredList);

    return 0;
  }


  const portfolioData = () => {
    const x = portfolioList.map(port => {
      const projectName = port.name;
      const projectDesc = port.description;
      const projectImage = port.images;

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
            <a className="portfolio-categrory active" href onClick={() => filterAll('consultancy')}>All</a>
            <a className="portfolio-categrory" href onClick={() => filterAll('branding')}>Branding</a>
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

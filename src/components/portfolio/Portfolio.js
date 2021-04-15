import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  PortfolioWrapper,
  PortfolioRow,
} from './StyledPortfolio';


const Portfolio = () => {
  const [portfolioList, setPortfolioList] = useState([]);
  const [portfolioListClone, setPortfolioListClone] = useState([]);

  const portfolioUrl = "../../../portfolioData.json"


  useEffect(() => {
    axios.get(portfolioUrl)
      .then(result => {
        setPortfolioList(result.data)
        setPortfolioListClone(result.data)
      });
  }, []);

  const filterAll = () => {
    const el = document.querySelector('.active');
    setPortfolioList(portfolioListClone);
    return 1; 
  }

  const filterCat = (cat) => {
    if (portfolioList.length <= portfolioListClone.length) {
      filterAll();
    }

    let filteredList = [];

    for (var i = 0; i < portfolioList.length; i++) {
      const projectCategories = portfolioList[i].categories;
      const catLen = projectCategories.length;
      
      for (var j = 0; j < catLen; j++) {
          console.log(cat);
          if (projectCategories[j] === cat) {
            filteredList.push(portfolioList[i]);
            setPortfolioList(filteredList);
        }
        // else {
        //   setPortfolioList(portfolioList);
        // }
      }
    }
    console.log(filteredList);

    return 1;
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
            <a className="portfolio-categrory active" href onClick={filterAll}>All</a>
            <a className="portfolio-categrory" href onClick={() => filterCat('branding')}>Branding</a>
            <a className="portfolio-categrory" href onClick={() => filterCat('development')}>Web Development</a>
            <a className="portfolio-categrory" href onClick={() => filterCat('consultancy')}>Consultancy</a>
            <a className="portfolio-categrory" href onClick={() => filterCat('design')}>Design</a>
            <a className="portfolio-categrory" href onClick={() => filterCat('portfolio')}>Portfolio</a>
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

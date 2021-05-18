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

  // if all is selected
  // set the active class to color #1B658C
  // if not selected, remove color i.e class is not active class=""
    // if branding is selected
    // set branding class to active
    // change color of active to #1B658C
  const setLinkState = () => {

    const activeClass = (id) => {
      if (id.className !== 'active') {
        id.className = 'active';
        id.style.backgroundColor = "#1B658C";
        id.style.color = "#fff";  
      } else {
        id.style.backgroundColor = "#1B658C";
        id.style.color = "#fff";
      }
    }

    const removeActive = (ele) => {
      const el = document.querySelector(`#${ele}`);
      

      if (el.className === 'active') {
        el.className = "";
        el.style.backgroundColor = '#fff';
        el.style.color = "#333";
      }
    }

    const setAllLink = (ele) => {
        const activeEle = document.querySelector('.active');

        if (activeEle) {
          activeEle.className = "";
          activeEle.style.backgroundColor = '#fff';
          activeEle.style.color = "#333";
        }

        const all = document.querySelector(`#${ele}`);
        activeClass(all);
    }

    const setOtherLinks = (id) => {
      const ele = document.querySelector(`#${id}`);
      activeClass(ele);

    }

    return {
      setAllLink,
      setOtherLinks,
      removeActive,
    }
  }

  const filterAll = () => {
    // const el = document.querySelector('.active');
    setPortfolioList(portfolioListClone);
    setLinkState().setAllLink('all');
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
          if (projectCategories[j] === cat) {
            filteredList.push(portfolioList[i]);
            setPortfolioList(filteredList);
            setLinkState().setOtherLinks(cat);
          } else {
            setLinkState().removeActive(projectCategories[j]);
            setLinkState().removeActive('all');
        }
      }
    }

    return 1;
  }


  const portfolioData = () => {
    const x = portfolioList.map(port => {
      const projectName = port.name;
      const projectDesc = port.description;
      const projectImage = port.images;

        return (
          <article>
              <a className="project-link" href="#portfolioLink">
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
            <a className="active" id="all" href onClick={filterAll}>All</a>
            <a className="filter" id="branding" href onClick={() => filterCat('branding')}>Branding</a>
            <a className="filter" id="development"  href onClick={() => filterCat('development')}>Web Development</a>
            <a className="filter" id="consultancy" href onClick={() => filterCat('consultancy')}>Consultancy</a>
            <a className="filter" id="design" href onClick={() => filterCat('design')}>Design</a>
            <a className="filter" id="portfolio" href onClick={() => filterCat('portfolio')}>Portfolio</a>
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

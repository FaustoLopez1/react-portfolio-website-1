import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project-im6.gif'
import IMG2 from '../../assets/project-im5.gif'
import IMG3 from '../../assets/project-im4.gif'
import IMG4 from '../../assets/project-im3.gif'
import IMG5 from '../../assets/project-im2.gif'
import IMG6 from '../../assets/project-im1.gif'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG1} alt='' />
          </div>
          <h3>Book Search Engine</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/FaustoLopez1/book-search-engine'className='btn' target='_blank'>Github</a>
          <a href='https://cryptic-beyond-46423.herokuapp.com/'className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG2} alt='' />
          </div>
          <h3>The Fit Blog</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/FaustoLopez1/fit-blog'className='btn' target='_blank'>Github</a>
          <a href='https://warm-forest-60978.herokuapp.com/'className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG3} alt='' />
          </div>
          <h3>Streaming Service</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/magiscoding2113/streaming-service-tracker'className='btn' target='_blank'>Github</a>
          <a href='https://magiscoding2113.github.io/streaming-service-tracker/'className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG4} alt='' />
          </div>
          <h3>Weather Forecast</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/FaustoLopez1/weather_forecast'className='btn' target='_blank'>Github</a>
          <a href='https://faustolopez1.github.io/weather_forecast/'className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG5} alt='' />
          </div>
          <h3>Scheduler</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/FaustoLopez1/Scheduler'className='btn' target='_blank'>Github</a>
          <a href='https://faustolopez1.github.io/Scheduler/'className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG6} alt='' />
          </div>
          <h3>Ecommerce Back End</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/FaustoLopez1/ecommerce-back-end'className='btn' target='_blank'>Github</a>
          </div>
        </article>
        </div>
    </section>
  )
}

export default Portfolio
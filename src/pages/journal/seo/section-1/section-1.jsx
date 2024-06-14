import './section-1.css'
import hero from '../../../../assets/home/seohero.png'
import heromobile from '../../../../assets/home/seoheromobile.png'
import { Link } from 'react-router-dom'

const Section1SEO = () => {
  return (
    <div className='Section1SEO'>
        <img className='Section1SEOimg' src={hero} alt=''/>
        <img className='Section1SEOimgmobile' src={heromobile} alt=''/>
        <div className='Section1SEOContent'>
            <h1>Lorem ipsum dolor sit amet</h1>
            <Link to={'/la-isla-webpage/journal/internal'}><button className='Section1SEOButton'>LOREM IPSUM</button></Link>
        </div>
    </div>
  )
}

export default Section1SEO
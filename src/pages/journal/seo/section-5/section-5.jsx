import './section-5.css'
import modelradius from '../../../../assets/home/seomodelradius.png'
import play from '../../../../assets/home/playseo.svg'

const Section5SEO = () => {
  return (
    <div className='Section5SEO'>
      <h1>
        Lorem ipsum dolor sit amet consectetur. Varius ut at vulputate et leo dictum mattis quis.
      </h1>
      <div className='Section5SEOVideoZone'>
        <img src={modelradius} className='Section5SEOImg'/>
        <img src={play} className='Section5SEOPlay'/>

      </div>
    </div>
  )
}

export default Section5SEO
import './section-3.css'
import prev from '../../../../assets/home/Prev.svg'
import next from '../../../../assets/home/Next.svg'
import quote from '../../../../assets/home/quote.svg'
import quoterev from '../../../../assets/home/quoterev.svg'

const Section3SEO = () => {
  return (
    <div className='Section3SEO'>

        <button className='Section3SEOBtnPrev'><img src={prev} alt=''/></button>
        <div className='Section3SEOTextRegion'>
            <img className='Section3SEOQuoteLeft' src={quote}/>
            <div className='Section3SEOTextContent'>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p className='Section3SEONormText'>Lorem ipsum dolor sit amet consectetur. Sem sodales vulputate non porta ante mauris fringilla non at. Ipsum id proin lectus eget venenatis facilisis adipiscing consectetur. Velit feugiat sit a egestas. Nunc parturient id pharetra porttitor aenean leo sit praesent.</p>
                <h3>LOREM IPSUM DOLOR</h3>
                <hr/>
                <p className='Section3SEOBrownText'>Lorem ipsum</p>
            </div>
            <img className='Section3SEOQuoteRight' src={quoterev}/>
        </div>
        <button className='Section3SEOBtnNext'><img src={next} alt=''/></button>
    </div>
  )
}

export default Section3SEO
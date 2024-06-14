import './section-1.css'
import hero from '../../../../assets/home/internatitle.png'
import heromobile from '../../../../assets/home/internatitlemobile.png'

const Section1Interna = () => {
  return (
    <div className='Section1Interna'>
         <img className='Section1Internaimg' src={hero} alt=''/>
         <img className='Section1Internaimgmobile' src={heromobile} alt=''/>
    </div>
  )
}

export default Section1Interna
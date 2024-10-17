
import './wedding.css'
import { Link } from 'react-router-dom'

import image1 from '../../assets/marriage/marriage-01.jpg'
import image2 from '../../assets/marriage/marriage-02.jpg'
import image3 from '../../assets/marriage/marriage-03.jpg'
import image4 from '../../assets/marriage/marriage-04.jpg'
import image5 from '../../assets/marriage/marriage-05.jpg'
import image6 from '../../assets/marriage/marriage-06.jpg'
import image7 from '../../assets/marriage/marriage-07.jpg'
import image8 from '../../assets/marriage/marriage-08.jpg'
import image9 from '../../assets/marriage/marriage-09.jpg'
import image10 from '../../assets/marriage/marriage-10.jpg'
import image11 from '../../assets/marriage/marriage-11.jpg'
import image12 from '../../assets/marriage/marriage-12.jpg'
import image13 from '../../assets/marriage/marriage-13.jpg'
import image14 from '../../assets/marriage/marriage-14.jpg'
import image15 from '../../assets/marriage/marriage-15.jpg'



const Wedding = () => {

  return (
    <section>
        <div className='wedding-top'>
            <Link className='back-page-link' > &lt; Back</Link>
            <h1>weddings</h1>
        </div>
        <div className="gallery">
            <figure className="gallery-item1">
                <img src={image1} alt="first" className="gallery-img" />
            </figure>
            <figure className="gallery-item2">
                <img src={image2} alt="first" className="gallery-img" />
            </figure>
            <figure className="gallery-item3">
                <img src={image3} alt="first" className="gallery-img" />
            </figure>
            <figure className="gallery-item4">
                <img src={image4} alt="first" className="gallery-img" />
            </figure>
            <figure className="gallery-item5">
                <img src={image5} alt="first" className="gallery-img" />
            </figure>
            <figure className="gallery-item6">
                <img src={image6} alt="first" className="gallery-img" />
            </figure>
            <figure className="gallery-item7">
                <img src={image7} alt="first" className="gallery-img" />
            </figure>
            <figure className="gallery-item8">
                <img src={image8} alt="first" className="gallery-img" />
            </figure>
            <figure className="gallery-item9">
                <img src={image9} alt="first" className="gallery-img" />
            </figure>
            <figure className="gallery-item10">
                <img src={image10} alt="first" className="gallery-img" />
            </figure>
            <figure className="gallery-item11">
                <img src={image11} alt="first" className="gallery-img" />
            </figure>
            <figure className="gallery-item12">
                <img src={image12} alt="first" className="gallery-img" />
            </figure>
            <figure className="gallery-item13">
                <img src={image13} alt="first" className="gallery-img" />
            </figure>
            <figure className="gallery-item14">
                <img src={image14} alt="first" className="gallery-img" />
            </figure>
            <figure className="gallery-item15">
                <img src={image15} alt="first" className="gallery-img" />
            </figure>
        </div>
    </section>
  )
}

export default Wedding

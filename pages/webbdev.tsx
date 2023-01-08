import React from 'react'
import { urlFor, sanityClient } from '../lib/sanity';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { loadData} from '../lib/loadData'

import styles from '../styles/Carousel.module.css'

export async function getStaticProps() {
  const projects = await loadData(`*[_type == 'skills']`)
  return { props: { projects } }
}

function Webbdev( { projects } ) {



    return (
        <div className={styles.container}>
         <Carousel

         showThumbs={false}
        showArrows={true}
           showIndicators={true}
          infiniteLoop={true}
           dynamicHeight={false}
           >
          {projects.map((item, index) => (
          <div key={index} className={styles.swipItem}>
             <div className={styles.imgBox}>
                 <img className="contain rounded-md max-h-80" alt="slides" src={urlFor(`${item.image.asset._ref}`).url()}/>
                 <h6 className={styles.legend}>{item.title}</h6>

            </div>

            
            </div>
    ))}
          </Carousel>
        </div>
      );
    } 
export default Webbdev

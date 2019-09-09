import React, { FunctionComponent } from 'react';
// @ts-ignore
import LazyHero from 'react-lazy-hero';
import './HeroMessage.scss'

interface HeroProps {
  subject : string
  message : string
  img_path : string
  cta_title : string
  cta_link : string
}

export const Hero:FunctionComponent<HeroProps> = ({ subject, message, img_path: image_src, cta_title, cta_link }) => {
  console.log('image_src: ',image_src)
  return (
    <LazyHero minHeight='80vh' color='#232444' opacity={0.60} imageSrc={image_src} isCentered={false}>
        <div className='hero-content'>
          {
            subject.length > 0 &&
            <h3 className='hero-subject'>{subject}</h3>
          }

          <h1 className='hero-message'>{message}</h1>

          {
            cta_link.length > 0 &&
            <a href={cta_link} className='hero-cta-link'><button className='hero-cta-title'>{cta_title}</button></a>
          }

        </div>


    </LazyHero>
  )
}

export default Hero;

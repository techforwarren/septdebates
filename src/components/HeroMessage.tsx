import React, { FunctionComponent } from 'react';
// @ts-ignore
import LazyHero from 'react-lazy-hero';

interface HeroProps {
  message : string
  img_path : string
}

export const Hero:FunctionComponent<HeroProps> = ({ message, img_path: image_src }) => {
  console.log('image_src: ',image_src)
  return (
    <LazyHero minHeight='80vh' color='#B7E3CF' opacity={0.85} imageSrc={image_src}>
      <h1>{message}</h1>
      
    </LazyHero>
  )
}

export default Hero;
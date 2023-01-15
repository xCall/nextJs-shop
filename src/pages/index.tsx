import Image from 'next/image';
import {useKeenSlider} from 'keen-slider/react';
import { HomeContainer, Product } from "../styles/pages/home";

import 'keen-slider/keen-slider.min.css';

import shirt1 from '../assets/shirts/shirt-1.png';
import shirt2 from '../assets/shirts/shirt-2.png';
import shirt3 from '../assets/shirts/shirt-3.png';
import shirt4 from '../assets/shirts/Shirt-4.png';

export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  return (
   <HomeContainer ref={sliderRef} className='keen-slider'>
    <Product className='keen-slider__slide'>
      <Image src={shirt1} width={520} height={480} alt={'Image ilustrator'}/>
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
    <Product className='keen-slider__slide'>
      <Image src={shirt2} width={520} height={480} alt={'Image ilustrator'}/>
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
    <Product className='keen-slider__slide'>
      <Image src={shirt3} width={520} height={480} alt={'Image ilustrator'}/>
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
    <Product className='keen-slider__slide'>
      <Image src={shirt4} width={520} height={480} alt={'Image ilustrator'}/>
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
   </HomeContainer>
  )
}


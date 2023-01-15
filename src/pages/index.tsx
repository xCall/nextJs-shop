import Image from 'next/image';
import { HomeContainer, Product } from "../styles/pages/home";

import shirt1 from '../assets/shirts/shirt-1.png';
import shirt2 from '../assets/shirts/shirt-2.png';
import shirt3 from '../assets/shirts/shirt-3.png';
import shirt4 from '../assets/shirts/shirt-4.png';

export default function Home() {
  return (
   <HomeContainer>
    <Product>
      <Image src={shirt1} width={520} height={480} alt={'Image ilustrator'}/>
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
    <Product>
      <Image src={shirt2} width={520} height={480} alt={'Image ilustrator'}/>
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
   </HomeContainer>
  )
}


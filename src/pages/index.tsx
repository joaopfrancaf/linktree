import Image from "next/image";
import { DivStyleContainer, DivStyleFoto, DivStyleLinkContainer, DivStyleIcons, DivStyleLink, DivCard} from "../styles/pages";

import Imag from '../assets/ftgab.png'

import Twitter from '../assets/twitter.svg'
import Twitch from '../assets/twitch.svg'
import Insta from '../assets/instagram.svg'
import Linkedin from '../assets/linkedin.svg'
import Git from '../assets/github.svg'

export default function Home() {
  return (
    <DivStyleContainer>
      <DivCard>
        <DivStyleFoto>
          <Image src={Imag} alt={""} width={200}/>
          <p>@MaquinaDelass</p>
        </DivStyleFoto>

        <DivStyleLinkContainer>
          <DivStyleLink>
            <a href="#">LINK 1</a>
          </DivStyleLink>
          <DivStyleLink>
            <a href="#">LINK 2</a>
          </DivStyleLink>
          <DivStyleLink>
            <a href="#">LINK 3</a>
          </DivStyleLink>
          <DivStyleLink>
            <a href="#">LINK 4</a>
          </DivStyleLink>
        </DivStyleLinkContainer>

        <DivStyleIcons>
          <Image src={Twitter} alt={""} width={21}/>
          <Image src={Twitch} alt={""} width={21}/>
          <Image src={Insta} alt={""} width={21}/>
          <Image src={Linkedin} alt={""} width={21}/>
          <Image src={Git} alt={""} width={21}/>
        </DivStyleIcons>
      </DivCard>
    </DivStyleContainer>
  )
}

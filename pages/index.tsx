import styles, { layout } from '../styles/style';
import { Hero, Footer, Skills, Game, Website, ContactBottom, ScrollArrow } from './portfolio/components';


//return home page
export default function Home() {

  return (
    //container
    <div className={`w-full `}>

      {/**container */}
      <div className={`${styles.flexStart} `}>
        {/**content container */}
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <ScrollArrow styles={''} />
        </div>

      </div>

      {/**container */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>

        {/**content container */}
        <div className={`${styles.boxWidth}`}>
          <Skills />
          <Game />
          <Website />
          <ContactBottom />
          <Footer styles={''} />
        </div>
      </div>
    </div>
  )
}


import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import AboutInfo from "../../components/AboutInfo/AboutInfo"
import styles from '../../components/Style.module.css'
import TeamInfo from "../../components/TeamInfo/TeamInfo"
import Comunity from "../../components/Comunity/Comunity"

function AboutPage() {
  
    return (
      <>
        <div className={styles.HeaderBack}>
          <Header />
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.gradientBack}>
          <AboutInfo />
          <Comunity />
          <TeamInfo />
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.footerBack}>
          <Footer />
        </div>
        
      </>
    )
  }
  
  export default AboutPage
  
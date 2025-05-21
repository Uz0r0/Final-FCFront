import Header from "../../components/Header/Header"
import MainInfo from "../../components/MainInfo/MainInfo"
import Rules from "../../components/Rules/Rules"
import Expectation from "../../components/Expectation/Expectation"
import Footer from "../../components/Footer/Footer"
import styles from '../../components/Style.module.css'

function HomePage() {
  
    return (
      <>
        <div className={styles.HeaderBack}>
          <Header />
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.gradientBack}>
          <MainInfo />
          <Rules />
          <Expectation />
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.footerBack}>
          <Footer />
        </div> 
      </>
    )
  }
  
  export default HomePage
  
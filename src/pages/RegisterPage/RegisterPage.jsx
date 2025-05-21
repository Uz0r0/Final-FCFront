import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import styles from '../../components/Style.module.css'
import LeftSide from "../../components/LeftSide/LeftSide"
import Inputreg from "../../components/Inputreg/Inputreg"


function RegisterPage() {

  
    return (
      <>
        <div className={styles.HeaderBack}>
          <Header />
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.dflex}>
            <div className={styles.half}>
                <LeftSide 
                title = "Welcome!"
                description= "Create your profile to participate in battles of tastes and find like-minded people!"
                />
            </div>
            <div className={styles.half}>
                <Inputreg />
            </div>
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.footerBack}>
          <Footer />
        </div> 
      </>
    )
  }
  
  export default RegisterPage
  
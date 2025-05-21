import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import styles from '../../components/Style.module.css'
import LeftSide from "../../components/LeftSide/LeftSide"
import Input from "../../components/Input/Input"

function LogInPage() {
  
    return (
      <>
        <div className={styles.HeaderBack}>
          <Header />
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.dflex}>
            <div className={styles.half}>
                <LeftSide 
                title = "Welcome back!"
                description= "To log in, use the login form, and if you don't have an account yet, use the Registration link above the form."
                />
            </div>
            <div className={styles.half}>
                <Input />
            </div>
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.footerBack}>
          <Footer />
        </div> 
      </>
    )
  }
  
  export default LogInPage
  
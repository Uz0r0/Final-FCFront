import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import styles from '../../components/Style.module.css'
import ContactInfo from "../../components/ContactInfo/ContactInfo"

function ContactPage() {
  
    return (
      <>
        <div className={styles.HeaderBack}>
          <Header />
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.gradientBack}>
          <ContactInfo />
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.footerBack}>
          <Footer />
        </div>  
      </>
    )
  }
  
  export default ContactPage
  
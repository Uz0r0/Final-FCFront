import Header from "../../components/Header/Header"
import styles from '../../components/Style.module.css'
import okak from '../../assets/images/окак.png'

function Page404() {
  
    return (
      <>
        <div className={styles.HeaderBack}>
          <Header />
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.gradientBack}>
            <div className={styles.dflexAround}>
                <div className={styles.center}>
                    <h1 className={styles.size}>404</h1>
                    <p>Page is not found</p>
                </div>
                <img src={okak} alt="" className={styles.FCImg}/>
            </div>  
            <div className={styles.BigSpace}></div>
        </div>
      </>
    )
  }
  
export default Page404

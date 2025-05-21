import styles from './DevCard.module.css'
import generalstyles from "../Style.module.css";

const DevCard = ({Img, Name, Info}) => {
  
    return ( 
        <div className={styles.CardStyle}>
            <img className={styles.img} src= {Img} alt="" />
            <div>
                <h1 className={styles.devh1}>{Name}</h1>
                <p>{Info}</p>
            </div>
        </div>
    )
  }
  
  export default DevCard 
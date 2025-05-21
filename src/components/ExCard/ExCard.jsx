import styles from './ExCard.module.css'
import generalstyles from "../Style.module.css";

const ExCard = ({title, description}) => {
  
    return ( 
        <div className={styles.ExCard}>
            <h1>{title}</h1>
            <p className={styles.ExCardP}>{description}</p>
        </div>    
    )
  }
  
  export default ExCard 
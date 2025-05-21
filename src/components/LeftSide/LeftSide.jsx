import styles from './LeftSide.module.css'
import generalstyles from "../Style.module.css";

const LeftSide = ({title, description}) => {
  
    return ( 
       <div className={styles.Back}>
            <div className={styles.text}>
                <h1>{title}</h1>    
                <p>{description}</p>
            </div>    
       </div>
    )
  }
  
  export default LeftSide 
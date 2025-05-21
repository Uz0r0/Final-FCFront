import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from '../../components/Style.module.css'
import settingsIcon from '../../assets/images/settings.png'
import LogOutIcon from '../../assets/images/LogOut.png'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

const ProfilePage = () => {
    const [username, setUsername] = useState("");
    const [cardData, setCardData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
            setUsername(savedUsername);
        }

        const fetchCardData = async () => {
            try {
                const token = localStorage.getItem("access_token");
                const res = await axios.get("http://localhost:8080/card/get-cardData", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setCardData(res.data);
            } catch (err) {
                console.error("Ошибка при загрузке карточки:", err);
            }
        };

        fetchCardData();
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div>
            <div className={styles.HeaderBack}>
                <Header />
            </div>
            <div className={styles.VerticalLine}></div>
            <div className={styles.gradientBackProfile}>
                <div className={`&{styles.PersonalInfo} ${styles.center}`}>
                    <div className={styles.ProfileHeader}>
                    <h1>Personal account</h1>
                    <div>
                        <a href="/settings" title="Settings"><img src={settingsIcon} alt="" className={styles.ProfileIcons} /></a>
                        <a href="" title="Log Out" onClick={handleLogout}><img src={LogOutIcon} alt="" /></a>
                    </div>
                  </div>
                  <h1>Nickname: {username}</h1>
                  {cardData && (
                      <div className={styles.UserCard}>
                          <h1>Card Info</h1>
                          <p className={styles.inputStyle}><span>Music: </span> {' '} {cardData.music}</p>
                          <p className={styles.inputStyle}><span>Musician: </span> {' '} {cardData.musician}</p>
                          <p className={styles.inputStyle}><span>Actor: </span> {' '} {cardData.actor}</p>
                          <p className={styles.inputStyle}><span>Anime: </span> {' '} {cardData.anime}</p>
                          <p className={styles.inputStyle}><span>Film: </span> {' '} {cardData.film}</p>
                          <p className={styles.inputStyle}><span>Meme: </span> {' '} {cardData.meme}</p>
                      </div>
                  )}
                </div>
            </div>
            <div className={styles.VerticalLine}></div>
            <div className={styles.footerBack}>
                <Footer />
            </div>
        </div>
    );
};

export default ProfilePage;

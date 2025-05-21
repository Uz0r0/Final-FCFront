import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from '../../components/Style.module.css';
import down from '../../assets/images/down.png'

const BattlePage = () => {
  const [duel, setDuel] = useState(null);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem('access_token');

  const fetchDuel = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/fite/duel`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDuel(res.data);
    } catch (err) {
      setMessage("Error loading duel data")
    }
  };

  const vote = async (cardId) => {
    try {
      await axios.post(`http://localhost:8080/card/${cardId}/like`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchDuel();
    } catch (err) {
      setMessage('Voting error: ' + (err.response?.status || err.message));
    }
  };

  useEffect(() => {
    fetchDuel();
  }, []);

  if (!token) {
    return <div>
      <div className={styles.HeaderBack}>
        <Header />
      </div>
      <div className={styles.VerticalLine}></div>
      <div className={styles.gradientBack}>
        <div className={styles.center}>
          <h1>To participate in the battle, we ask you to log in to your account or create a new account.</h1>
          <div className={styles.space}></div>
          <img src={down} alt="" />
          <div className={styles.space}></div>
          <a href="/login"><button className={styles.btnStyle}>Log in</button></a>
        </div>
      </div>
      <div className={styles.VerticalLine}></div>
      <div className={styles.footerBack}>
        <Footer />
      </div> 
    </div>;
  }

  if (!duel) {
    return;
  }

  const cards = [];
  if (duel.card1) cards.push(duel.card1);
  if (duel.card2) cards.push(duel.card2);

  if (cards.length < 2) return;
  return (
    <div>
      <div className={styles.HeaderBack}>
          <Header />
      </div>
      <div className={styles.VerticalLine}></div>
      <div className={styles.gradientBack}>
        <h1 className={styles.center}>Battle of Cards</h1>
        <div className={styles.BigSpace}></div>
        <div className={styles.dflexAround}>
          {cards.map((card) => (
            <div key={card.id}>
              <button className={styles.btnStylePassword} onClick={() => vote(card.id)}>Vote</button>
              <div className={styles.UserCard}>
                <p className={styles.inputStyle}><span>User:</span> {card.username}</p>
                <p className={styles.inputStyle}><span>Music:</span> {card.music}</p>
                <p className={styles.inputStyle}><span>Musician:</span> {card.musician}</p>
                <p className={styles.inputStyle}><span>Actor:</span> {card.actor}</p>
                <p className={styles.inputStyle}><span>Anime:</span> {card.anime}</p>
                <p className={styles.inputStyle}><span>Film:</span> {card.film}</p>
                <p className={styles.inputStyle}><span>Meme:</span> {card.meme}</p>
                <p className={styles.inputStyle}><span>Likes:</span> {card.likes}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.BigSpace}></div>
         {message && <div className={styles.error}>{message}</div>}
      </div>
      <div className={styles.VerticalLine}></div>
      <div className={styles.footerBack}>
        <Footer />
      </div> 
    </div>
  );
};

export default BattlePage;
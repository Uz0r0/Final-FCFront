import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import styles from '../../components/Style.module.css'
import { useState } from "react";
import axios from "axios";

function SetPasswordPage() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
  
    const ChangePassword = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("access_token");

            if (!token) {
                setMessage("Not authenticated. Please log in.");
                return;
            }

            if (newPassword.length < 6) {
                setMessage("Password must be at least 6 characters.");
                return;
            }

            const res = await axios.post("http://localhost:8080/auth/change-password",
                { currentPassword, newPassword },
                {
                    headers: { 
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setMessage("Password changed successfully.");
        } catch (error) {
            console.log(error);
            setMessage("Failed to change password. Please try again.");
        }
    };

    return (
      <>
        <div className={styles.HeaderBack}>
          <Header />
        </div>
        <div className={styles.VerticalLine}></div>
        <div>
            <div className={`${styles.gradientBackPassword} ${styles.center}`}>
                <div className={styles.textWrapper}>
                    <h1 className={styles.a}>Change password</h1>
                    <a href={`/profile/${localStorage.getItem("username")}`}>Go to profile</a>
                </div>
                <div className={styles.PicksCard}>
                    <form onSubmit={ChangePassword}>
                        <div className={styles.formContainer}>
                            <div className={styles.inputStyleS}>
                                <input
                                    type="password"
                                    placeholder="Current Password"
                                    className={styles.inputField}
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                />
                            </div>
                            <div className={styles.inputStyleS}>
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    className={styles.inputField}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                        </div> 
                        {message && <div className={styles.UpdateMessage}>{message}</div>}
                        <button type="submit" className={styles.btnStylePassword}>Save changes</button> 
                    </form>
                </div>
            </ div> 
        </div>
        <div className={styles.VerticalLine}></div>
        <div className={styles.footerBack}>
          <Footer />
        </div> 
      </>
    )
  }
  
  export default SetPasswordPage
  
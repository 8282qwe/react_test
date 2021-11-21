import { Link } from "react-router-dom";
import styles from "./Banner.module.css";
import imgLogo from "./logo.jpg";

function Banner(){
    return(
        <div className={styles.head}>
            <div className={styles.logo}>
                <img className={styles.logoImg} src={imgLogo} alt="logo"/>
                <span>화랑영화관</span>
            </div>
            <div className={styles.menunav}>
              <span className={styles.Home}>
                <Link to='/'>Home</Link>
              </span>
                <span>
                    <Link to='/#'>상영시간표</Link>
                </span>
                <span>
                    <Link to='/login'>로그인</Link>
                </span>
            </div>
        </div>

    )
}
export default Banner;
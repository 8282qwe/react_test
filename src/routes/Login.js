import Banner from "./Banner";
import styles from "./Login.module.css"

function Login() {
    return (
        <div style={{width: '1400px', margin: '0'}}>
            <Banner/>
            <div style={{width: '100%', margin: '1rem auto'}}>
                <hr style={{width: '100%', heigh: '200px', color: 'Yellow'}}/>
                <div className={styles.wrap}>
                    <div className={styles.login}>
                        <h2>Log-in</h2>
                        <div className={styles.login_id}>
                            <h4>ID</h4>
                            <input type="email" name="" id="" placeholder="Email"/>
                        </div>
                        <div className={styles.login_pw}>
                            <h4>Password</h4>
                            <input type="password" name="" id="" placeholder="Password"/>
                        </div>
                        <div className={styles.submit}>
                            <input type="submit" value="Login"/>
                            <input type="submit" value="Sign Up"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
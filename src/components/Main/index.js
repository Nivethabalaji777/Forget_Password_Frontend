import styles from "./styles.module.css";
import { Link } from "react-router-dom";
// import background from "client/src/desk_items-transformed.jpeg";



const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	

	

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>My Auth App</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
					
					
		</div>
	);
};

export default Main;
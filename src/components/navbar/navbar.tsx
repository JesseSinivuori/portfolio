import { Link } from 'react-router-dom';
import styles from './navbar.module.scss'

export default function Navbar() {

    return (
        <div className={styles.container}>

            <Link to="/">Home</Link>
            <Link to="first">My First Component</Link>
            <Link to="example">My First Component</Link>
        </div>
    );
};


